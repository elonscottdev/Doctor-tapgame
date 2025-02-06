import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import FooterNav from "../layouts/FooterNav";
import staking_avatar1 from "../../assets/staking_avatar1.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Staking = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    mins: 10,
    secs: 12,
  });

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
    return () => clearInterval(timer);
  }, []);

  const [open, setOpen] = useState(false);

  const handle_open = () => {
    setOpen(true);
  };

  const [stakeAmount, setStakeAmount] = useState("$0.0045");
  const [stakingPeriod, setStakingPeriod] = useState(1); // Default to 14 days

  return (
    <div className="pt-16 h-screen text-white flex flex-col justify-between items-center py-2 min-w-[320px] max-w-full">
      <main className="p-6 pb-20 sm:pb-20 sm:px-8 space-y-4 w-full">
        {/* NFT Staked Section */}
        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl space-y-3 px-2">
          <div className="bg-gray-800 rounded-lg flex flex-col gap-2 sm:flex-row items-center justify-between shadow-lg w-full p-2">
            {/* NFT and Title */}
            <div className="flex items-center space-x-3">
              <img
                src={staking_avatar1}
                alt="NFT"
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
              />
              <div className="text-left">
                <h3 className="text-white font-bold text-lg sm:text-2xl">
                  STAKED NFT
                </h3>
                <p className="text-blue-400 text-xs sm:text-sm">
                  YOUR REWARD:{" "}
                  <span className="text-yellow-400">BNB: $56.90</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex space-x-1 sm:space-x-2 text-center rounded-lg p-2 border border-blue-700 bg-blue-950 text-xs sm:text-sm">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="px-1">
                  <p className="text-blue-400 font-bold">{value}</p>
                  <p className="text-gray-400">{unit.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stake Your NFT Section */}
        <section className="bg-gray-800 pb-5 border border-gray-700 rounded-xl ">
          <div className="flex items-center justify-center">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-6 sm:px-12">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm text-center">
                STAKE YOUR NFT'S
              </h2>
            </div>
          </div>

          {/* Staked NFTs Info */}
          {[
            {
              img: avatar1,
              title: "STAKED NFT'S",
              desc: "YOUR CURRENT STAKED NFT'S",
            },
            {
              img: avatar2,
              title: "STAKED EARNED",
              desc: "YOUR CURRENT STAKED NFT'S",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-700 p-2 sm:p-4"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-blue-500 flex items-center justify-center rounded-md p-1 sm:p-2">
                  <img className="w-8 sm:w-10" src={item.img} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-sm sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400">
                    {item.desc}
                  </p>
                </div>
              </div>
              {/* Amount Display */}
              <div className="flex flex-col items-end">
                <span className="font-bold text-yellow-400 text-xs sm:text-sm">
                  BNB: $56.90
                </span>
                <span className="font-bold text-blue-400 text-xs sm:text-xl">
                  QTY: 20
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Final Section */}
        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl px-2">
          <div className="bg-gray-800 rounded-lg flex items-center justify-between shadow-lg w-full p-2">
            {/* NFT and Title */}
            <div className="flex items-center w-[70%] space-x-3">
              <img
                src={staking_avatar1}
                alt="NFT"
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
              />
              <div className="text-left">
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-2xl">
                    NFT NAME
                  </h3>
                  <p className="text-white text-xs">
                    The virus has spread globally, triggering an official
                    appearance by highly skilled doctors.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 text-[10px] sm:text-sm py-2 px-3 rounded-lg  text-white"
                onClick={handle_open}
              >
                STAKE NOW
              </button>
            </div>
          </div>
        </section>
      </main>
      <Dialog open={open} onClose={setOpen} className="relative z-10 ">
        <DialogBackdrop
          transition
          className="fixed rounded-xl inset-0  bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed flex items-center justify-center  inset-0 z-10 w-screen">
          <div className="flex  items-end justify-center p-1 text-center ">
            <DialogPanel
              transition
              className="relative flex flex-col items-center jusitfy-center p-4 border-2 border-blue-500 transform overflow-hidden rounded-xl bg-gray-800 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className=" bg-gray-900 text-white p-6">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <button className="bg-blue-900 px-3 py-2 rounded-lg">
                    <span className="text-blue-400 text-lg">&#8592;</span>
                  </button>
                  <h2 className="text-blue-400 font-bold text-lg">
                    Stake Amount
                  </h2>
                </div>

                {/* Input Section */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Staking Amount */}
                    <div>
                      <label className="block text-gray-400 mb-2">
                        Staking Amount
                      </label>
                      <div className="flex items-center border border-gray-700 rounded-md p-3">
                        <input
                          type="text"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                          className="bg-transparent w-full text-yellow-300 outline-none"
                        />
                        <span className="text-yellow-400 ml-2">$</span>
                      </div>
                    </div>

                    {/* Staking Period */}
                    <div>
                      <label className="block text-gray-400 mb-2">
                        Staking Period
                      </label>
                      <div className="flex items-center border border-gray-700 rounded-md p-3">
                        <input
                          type="number"
                          value={stakingPeriod}
                          onChange={(e) =>
                            setStakingPeriod(Number(e.target.value))
                          }
                          className="bg-transparent w-full text-white outline-none"
                        />
                        <select
                          value={stakingPeriod}
                          onChange={(e) =>
                            setStakingPeriod(Number(e.target.value))
                          }
                          className="bg-transparent text-gray-500 ml-2"
                        >
                          <option value="1">1</option>
                          <option value="6">6</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Period Selection Buttons */}
                <div className="flex justify-around mb-6">
                  {["1 month", "6 months", "12 months"].map((period, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setStakingPeriod(Number(period.split(" ")[0]))
                      }
                      className={`px-2 py-2 rounded-lg font-bold ${
                        stakingPeriod === Number(period.split(" ")[0])
                          ? "bg-blue-500 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>

                {/* Stake Now Button */}
                <button className="w-full bg-blue-500 text-center py-3 rounded-lg font-bold hover:bg-blue-600">
                  Stake Now
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Staking;
