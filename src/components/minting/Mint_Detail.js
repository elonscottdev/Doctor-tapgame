import React, { useState, useEffect } from "react";
import arrow_left from "../../assets/arrow_left.png";
import { useLocation } from "react-router-dom";
import { nftDatas } from "../../mockup/mockupdata";
import { BalanceCheckerSection } from "../balanceCheckSection";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import Notiflix, { Loading } from "notiflix";

const Mint_Detail = () => {
  const [quantity, setQuantity] = useState(5);
  const [nftType, setNftType] = useState(0);
  const [data, setData] = useState(null);
  const location = useLocation();
  const { address } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = location.search;
    const number = queryString.replace("?", "");
    console.log("number:", number);
    setNftType(Number(number) - 1);
    setData(nftDatas[Number(number) - 1]);
  }, [location]);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 99)); // Maximum quantity limit: 99
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // Minimum quantity limit: 1
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(Math.max(1, Math.min(value, 99))); // Enforce limits
    }
  };

  const handleMint = async () => {
    if (address) {
      try {
        Loading.standard();
        const response = await fetch("http://localhost:5000/nftMint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address, nftType, amount: quantity }),
        });

        if (!response.status) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.transactionHash) {
          Notiflix.Notify.success("Nft Minted");
          navigate("/minting");
        }
        Loading.remove();
      } catch (error) {
        console.error("Error fetching NFT balance:", error);
        Loading.remove();
      }
    }
  };

  return (
    <div className="h-screen  pt-16  text-white flex flex-col justify-between items-center px-3 sm:px-4  min-w-[320px] max-w-full">
      <main className="pb-24 sm:pb-24 p-3 sm:p-4 space-y-4 w-full">
        {/* Balance and Token Info */}
        <BalanceCheckerSection />

        {/* Current Minting Section */}
        {data !== null && (
          <section className="bg-gray-800 pb-5 border border-gray-700 rounded-2xl space-y-3 px-3 sm:px-4">
            <div className="w-full  bg-gray-800 rounded-2xl pt-6 shadow-lg ">
              {/* Back Button */}
              <div className="flex justify-between  w-full items-start">
                <div className="w-1/4 text-left">
                  <button className="  bg-gray-700 p-2  rounded-lg">
                    <img src={arrow_left} alt="Back" className="w-3 h-3" />
                  </button>
                </div>
                {/* Character Image */}
                <div className="flex w-2/4 justify-center mb-6">
                  <img
                    src={data.image}
                    alt="Character"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                {/* Header */}
                <div className="flex w-1/4 justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-white"></h2>
                  <div className="flex items-center">
                    {address ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-xs text-green-400 ml-2">Connected</p>
                      </>
                    ) : (
                      <p className="text-xs text-white-400 ml-2">UnConnected</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Title and Price */}
              <h3 className="text-center text-blue-400 font-bold text-xl mb-1">
                {data.name}{" "}
                <span className="text-yellow-400">BNB: {data.price} BNB</span>
              </h3>
              <p className="text-center text-gray-400 text-sm mb-6">
                {data.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <p className="text-yellow-400  text-xs mb-2 text-left">
                  Write Quantities
                </p>
                <div className="flex items-center justify-between border border-gray-700 rounded-lg p-2">
                  <button
                    className="w-10 h-10 border border-blue-700 rounded-lg flex items-center justify-center text-white font-bold"
                    onClick={handleDecrement}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={quantity.toString().padStart(2, "0")}
                    onChange={handleQuantityChange}
                    className="w-16 text-center bg-transparent outline-none text-white text-lg font-bold"
                  />
                  <button
                    className="w-10 h-10 border border-blue-700 rounded-lg flex items-center justify-center text-white font-bold"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mint Button */}
              <button
                className="w-full bg-blue-600 text-white text-base  py-2 rounded-lg hover:bg-blue-700"
                onClick={handleMint}
              >
                MINT NOW
              </button>
            </div>
          </section>
        )}

        {/* Minting Cards Section */}
      </main>
    </div>
  );
};

export default Mint_Detail;
