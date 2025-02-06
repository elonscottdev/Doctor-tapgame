import React from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { FiLayers } from "react-icons/fi";
// import { BsPerson } from "react-icons/bs";
// import { BiCoinStack } from "react-icons/bi";


import dolar from "../../assets/dolar.png";
const Reward = () => {
  return (
    <div className="h-screen pt-16   text-white flex flex-col justify-between items-center py-2 px-4 min-w-[320px] max-w-full">
      <main className="p-2 sm:p-4 space-y-4 w-full pb-20 sm:pb-20">
        
        {/* Balance and Token Info */}
        <section className="bg-gray-800 p-3 sm:p-2 rounded-2xl border border-gray-700 space-y-3">
          <div className="flex  justify-between items-center text-center sm:text-left">
            <div>
              <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-6 sm:h-full" src={dolar} /> &nbsp;2001
              </p>
              <p className="text-xs sm:text-sm text-gray-400">Current Balance</p>
            </div>
            <div>
              <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-6 sm:h-full" src={dolar} /> &nbsp; $2001
              </p>
              <p className="text-xs sm:text-sm text-gray-400">BEP20 Token</p>
            </div>
            <div className="">
              <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#181f32] border border-blue-700 flex flex-col items-center justify-center">
                <p className="text-lg sm:text-2xl font-bold text-white">01</p>
                <p className="text-xs text-gray-400">Level</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="bg-gray-800 pb-5 border border-gray-700 rounded-2xl space-y-3 px-3 sm:px-4">
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
            <div className="w-1/4 hidden sm:block"></div>
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-6 sm:px-12 text-center">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm">
                CONVERSION OF TOKEN
              </h2>
            </div>
            <div className="flex w-1/4 justify-end gap-2 items-center">
              <p className="text-green-400 text-xs sm:text-sm">Connected</p>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-blue-700 font-bold text-xs sm:text-sm">
                Converting Amount
              </label>
              <div className="flex items-center border border-gray-700 rounded-xl p-3 sm:p-4">
                <input
                  type="text"
                  placeholder="Enter UNICE Amount"
                  className="bg-transparent w-full outline-none text-xs sm:text-sm"
                />
                <span className="text-yellow-400">
                  <img className="h-4 sm:h-full" src={dolar} />
                </span>
              </div>
            </div>
            <div>
              <label className="text-gray-500 font-bold text-xs sm:text-sm">
                Receiving Amount
              </label>
              <div className="flex items-center border border-gray-700 rounded-xl p-3 sm:p-4">
                <input
                  type="text"
                  placeholder="Amount you received"
                  className="bg-transparent w-full outline-none text-xs sm:text-sm"
                />
                <span className="text-yellow-400">
                  <img className="h-4 sm:h-full" src={dolar} />
                </span>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-center py-2 sm:py-2 rounded-xl font-bold text-white hover:bg-blue-600 text-sm sm:text-base">
              Convert Now
            </button>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="  rounded-2xl border border-gray-700">
          <div className="text-left px-2">
            {[
              { level: "Complete LEVEL 01", points: "1000 PTS", description: "Get the reward to earn more" },
              { level: "LEVEL 02", points: "2000 PTS", description: "Get the reward to earn more" },
              { level: "Stake Amount", points: "2000 PTS", description: "Stake amount 3 times" },
              { level: "Convert Amount", points: "2000 PTS", description: "Convert minimum 10000 PTS" }
            ].map((item, index) => (
              <div key={index} className={`flex  justify-between items-center p-2 ${index !== 3 ? 'border-b border-gray-700' : ''}`}>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-sm sm:text-base">{item.level}</h3>
                  <p className="text-xs sm:text-sm text-blue-400">{item.description}</p>
                </div>
                <div className="bg-blue-500 text-xs sm:text-sm p-2 rounded-xl text-white flex items-center mt-2 sm:mt-0">
                  <img className="h-4 sm:h-full" src={dolar} />
                  {item.points}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reward;


