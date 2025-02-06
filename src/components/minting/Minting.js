import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nftDatas } from "../../mockup/mockupdata";
import { useAccount } from "wagmi";
import { BalanceCheckerSection } from "../balanceCheckSection";
import { Loading } from "notiflix";

const Minting = () => {
  const { address } = useAccount();
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/minting/mint_detail?${index}`);
  };

  const [nftBalances, setNftBalances] = useState(["0"]);

  useEffect(() => {
    const fetchNftBalance = async () => {
      if (address) {
        try {
          Loading.standard();
          const response = await fetch(
            "http://localhost:5000/checkNftBalance",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ address }),
            }
          );

          if (!response.status) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          const nftBalances = [
            data.firstValue,
            data.secondValue,
            data.thirdValue,
            data.fourthValue,
            data.fifthValue,
            data.sixthValue,
          ];

          setNftBalances(nftBalances);
          Loading.remove();
        } catch (error) {
          console.error("Error fetching NFT balance:", error);
          Loading.remove();
        }
      }
    };

    fetchNftBalance();
  }, [address]);

  return (
    <div className="h-screen  pt-16  text-white flex flex-col justify-between items-center px-3 sm:px-4  min-w-[320px] max-w-full">
      <main className="p-3 sm:p-4 space-y-4 w-full">
        {/* Balance and Token Info */}
        <BalanceCheckerSection />

        {/* Current Minting Section */}
        <section className="bg-gray-800 pb-5 border border-gray-700 rounded-2xl space-y-3 px-3 sm:px-4">
          <div className="flex justify-center">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-6 sm:px-12 text-center">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm">
                CURRENT MINTING
              </h2>
            </div>
          </div>

          {nftDatas.map((item, index) => (
            <div
              key={index}
              className="flex  justify-between border-b border-gray-700 p-3 sm:p-4"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-blue-500 flex items-center justify-center rounded-md p-2">
                  <img className="w-8 sm:w-10" src={item.image} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-sm sm:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end mt-2 sm:mt-0">
                <span className="font-bold text-yellow-400 text-xs sm:text-sm">
                  BNB: {item.price} BNB
                </span>
                <span className="font-bold text-blue-400 text-base sm:text-xl">
                  QTY: {nftBalances[index] || 0}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Minting Cards Section */}
        <section className="pb-16 rounded-2xl space-y-4">
          <div className="flex flex-col flex-wrap sm:flex-row gap-3 justify-between">
            {nftDatas.map((data, index) => (
              <div
                key={index}
                className="overflow-hidden shadow-lg w-full sm:w-60"
              >
                {/* Image Section */}
                <div className="flex justify-center items-center w-full">
                  <img
                    src={data.image}
                    alt="Episode Character"
                    className="w-full object-contain"
                  />
                </div>
                {/* Content Section */}
                <div className="pb-4 pt-2 px-3 bg-gray-800 rounded-b-3xl flex justify-between items-center">
                  <div className="text-left">
                    <h3 className="text-white font-bold text-sm sm:text-lg">
                      {data.name}
                    </h3>
                    <p className="text-yellow-400 text-xs sm:text-sm">
                      BNB: {data.price} BNB
                    </p>
                  </div>
                  {/* Button */}
                  <button
                    className="h-8 px-3 sm:px-4 bg-blue-500 text-white text-xs sm:text-sm rounded-md hover:bg-blue-600"
                    onClick={() => handleClick(index + 1)}
                  >
                    MINT NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Minting;
