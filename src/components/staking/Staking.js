import React, { useState, useEffect } from "react";
import staking_avatar1 from "../../assets/staking_avatar1.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
const Staking = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    mins: 10,
    secs: 12,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, mins, secs } = prev;

        if (secs > 0) return { ...prev, secs: secs - 1 };
        if (mins > 0) return { ...prev, mins: mins - 1, secs: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, mins: 59, secs: 59 };
        if (days > 0)
          return { ...prev, days: days - 1, hours: 23, mins: 59, secs: 59 };
        return prev; // Stop at 0
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className=" bg-gray-800 text-white flex flex-col justify-between items-center px-4 py-2">
      <main className="p-4 space-y-6 w-full">
        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl space-y-4 px-4">
          <div className="bg-gray-800 rounded-lg  flex items-center justify-between shadow-lg w-full">
            {/* NFT and Title */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={staking_avatar1}
                  alt="NFT"
                  className="w-16 h-16  object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-2xl">STAKED NFT</h3>
                <p className="text-blue-400 text-xs">
                  YOUR REWARD:{" "}
                  <span className="text-yellow-400">BNB: $56.90</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex space-x-2 text-center rounded-xl p-2 border-2 bg-blue-950 border-blue-700">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit}>
                  <p className="text-blue-400 text-xl font-bold">{value}</p>
                  <p className="text-gray-400 text-xs">{unit.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-800 pb-6 border border-gray-700 rounded-2xl space-y-4 px-4">
          <div className="flex items-center  justify-center ">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-12">
              <h2 className="text-blue-700 font-bold text-center text-sm ">
                STAKE YOUR NFT'S
              </h2>
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className=" bg-blue-500 flex items-center justify-center rounded-md">
                <img className="w-10" src={avatar1} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">STAKED NFT'S</h3>
                <p className="text-sm text-blue-400">YORU CURRENT STAKED NFT'S</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex flex-col items-end">
              <span className="font-bold text-yellow-400"> BNB: %56.90</span>
              <span className="font-bold text-blue-400 text-xl">QTY: 20</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className=" bg-blue-500 flex items-center justify-center rounded-md">
                <img className="w-10" src={avatar2} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">STAKED EARNED</h3>
                <p className="text-sm text-blue-400">TOTAL REWARD EARNED FROM STAKING</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex flex-col items-end">
              <span className="font-bold text-yellow-400"> BNB: %56.90</span>
              <span className="font-bold text-blue-400 text-xl">QTY: 20</span>
            </div>
          </div>
        </section>



        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl space-y-4 px-4">
          <div className="bg-gray-800 rounded-lg  flex items-center justify-between shadow-lg w-full">
            {/* NFT and Title */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={staking_avatar1}
                  alt="NFT"
                  className="w-16 h-16  object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-2xl">STAKED NFT</h3>
                <p className="text-blue-400 text-xs">
                  YOUR REWARD:{" "}
                  <span className="text-yellow-400">BNB: $56.90</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
           
          </div>
        </section>
      </main>
    </div>
  );
};

export default Staking;
