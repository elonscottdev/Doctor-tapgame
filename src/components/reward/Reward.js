import React from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { FiLayers } from "react-icons/fi";
// import { BsPerson } from "react-icons/bs";
// import { BiCoinStack } from "react-icons/bi";
import dolar from "../../assets/dolar.png";
const Reward = () => {
  const value = 50;
  return (
    <div className=" bg-gray-800 text-white flex flex-col justify-between items-center px-6 py-2">
      {/* Main Content */}
      <main className="p-4 space-y-6 w-full">
        {/* Balance and Token Info */}
        <section className="bg-gray-800 p-4 rounded-2xl border-2 border-gray-700 space-y-4">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="flex font-bold text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-full" src={dolar} /> &nbsp;2001
              </p>
              <p className="text-sm text-gray-400">Current Balance</p>
            </div>
            <div className="text-left">
              <p className="flex font-bold text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-full" src={dolar} /> &nbsp; $2001
              </p>
              <p className="text-sm text-gray-400">BEP20 Token</p>
            </div>
            <div className="">
              <div className=" w-full flex justify-center items-center   top-[-50px]">
                <div className="w-20 h-20 rounded-full bg-[#181f32] border-2 border-blue-700  flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-white">01</p>
                  <p className="text-xs text-gray-400">level</p>
                </div>
              </div>
              {/* <img src={home_main_img} alt="Character" className=" mt-2" /> */}
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="bg-gray-800 pb-6 border border-gray-700 rounded-2xl space-y-4 px-4">
          <div className="flex items-center  justify-between ">
            <div className="w-1/4"></div>
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-12">
              <h2 className="text-blue-700 font-bold text-center text-sm ">
                CONVERSION OF TOKEN
              </h2>
            </div>
            <div className="flex w-1/4 justify-end gap-2  items-center">
              <p className="text-green-400 text-sm">Connected</p>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-blue-700 fonf-bold">
                Converting Amount
              </label>
              <div className="flex items-center bg-blue-800 rounded-xl p-4">
                <input
                  type="text"
                  placeholder="Enter UNICE Amount"
                  className="bg-transparent w-full outline-none text-sm"
                />
                <span className="text-yellow-400">
                  <img className="h-full" src={dolar} />
                </span>
              </div>
            </div>
            <div>
              <label className="text-gray-500 font-bold">
                Receiving Amount
              </label>
              <div className="flex items-center border border-gray-700 rounded-xl p-4">
                <input
                  type="text"
                  placeholder="Amount you received"
                  className="bg-transparent w-full outline-none text-sm"
                />
                <span className="text-yellow-400">
                  <img className="h-full" src={dolar} />
                </span>
              </div>
            </div>
            <button className="w-full bg-blue-700 text-center py-4  rounded-xl font-bold text-white hover:bg-blue-600">
              Convert Now
            </button>
          </div>
        </section>

        {/* Rewards Section */}
        <section className=" rounded-2xl border-2 border-gray-700 ">
          <div className="text-left px-2">
            <div className="flex  justify-between items-center border-b border-gray-700 p-2 rounded-t-xl">
              <div>
                <h3 className="font-bold">Complete LEVEL 01</h3>
                <p className="text-sm text-blue-400">
                  Get the reward to earn more
                </p>
              </div>
              <div className="bg-blue-500 text-sm p-2 rounded-xl text-white flex">
                <img className="h-full" src={dolar} />
                1000 PTS
              </div>
            </div>

            {[
              {
                level: "LEVEL 02",
                points: "2000 PTS",
                description: "Get the reward to earn more",
              },
              {
                level: "Stake Amount",
                points: "2000 PTS",
                description: "Stake amount 3 times",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center  p-2 border-b border-gray-700"
              >
                <div>
                  <h3 className="font-bold">{item.level}</h3>
                  <p className="text-sm text-blue-400">{item.description}</p>
                </div>
                <div className="bg-blue-500 text-sm p-2 rounded-xl text-white flex">
                  <img className="h-full" src={dolar} />
                  {item.points}
                </div>
              </div>
            ))}

<div className="flex justify-between items-center text-left  p-2 rounded-b-xl">
            <div>
              <h3 className="font-bold">Convert Amount</h3>
              <p className="text-sm text-blue-400">Convert minimum 10000 PTS</p>
            </div>
            <div className="bg-blue-500 text-sm p-2 rounded-xl text-white flex">
              <img className="h-full" src={dolar} />
              2000 PTS
            </div>
          </div>
          </div>
         
        </section>
      </main>
    </div>
  );
};

export default Reward;
