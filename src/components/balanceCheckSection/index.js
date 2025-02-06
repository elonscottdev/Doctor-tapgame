import React, { useEffect, useState } from "react";
import dolar from "../../assets/dolar.png";
import { useAccount } from "wagmi";

export const BalanceCheckerSection = () => {
  const { address } = useAccount();
  const [balance, setBalance] = useState("0");
  useEffect(() => {
    const fetchNftBalance = async () => {
      if (address) {
        try {
          const balance_response = await fetch(
            "http://localhost:5000/walletBalance",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ address }),
            }
          );
          if (!balance_response.status) {
            throw new Error("Network response was not ok");
          }
          const balance_data = await balance_response.json();
          setBalance(balance_data.value);
        } catch (error) {
          console.error("Error fetching NFT balance:", error);
        }
      } else {
        setBalance(0);
      }
    };

    fetchNftBalance();
  }, [address]);

  return (
    <section className="bg-gray-800 p-3 sm:p-4 rounded-2xl border border-gray-700 space-y-3">
      <div className="flex  justify-between items-center text-center sm:text-left">
        <div>
          <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
            <img className="h-6 sm:h-full" src={dolar} /> &nbsp; {balance}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">Current Balance</p>
        </div>
        <div>
          <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
            <img className="h-6 sm:h-full" src={dolar} /> &nbsp; {balance}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">BEP20 Token</p>
        </div>
        <div className="">
          <div className="w-16 h-16  rounded-full bg-[#181f32] border border-blue-700 flex flex-col items-center justify-center">
            <p className="text-lg sm:text-2xl font-bold text-white">01</p>
            <p className="text-xs text-gray-400">Level</p>
          </div>
        </div>
      </div>
    </section>
  );
};
