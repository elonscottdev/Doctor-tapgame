import React from "react";
import dolar from "../../assets/dolar.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import episode1_all from "../../assets/episode1_all.png";
import episode2_all from "../../assets/episode2_all.png";

const Minting = () => {
  const value = 50;
  return (
    <div className=" bg-darkBlue text-white flex flex-col justify-between items-center px-6 py-2">
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
          <div className="flex items-center  justify-center ">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-12">
              <h2 className="text-blue-700 font-bold text-center text-sm ">
                CURRENT MINTING
              </h2>
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className=" bg-blue-500 flex items-center justify-center rounded-md">
                <img className="w-10" src={avatar1} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">EPISODES 01</h3>
                <p className="text-sm text-blue-400">CITY ON HIGH ALERT</p>
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
                <h3 className="font-bold text-white text-xl">EPISODES 02</h3>
                <p className="text-sm text-blue-400">CITY ON HIGH ALERT</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex flex-col items-end">
              <span className="font-bold text-yellow-400"> BNB: %56.90</span>
              <span className="font-bold text-blue-400 text-xl">QTY: 20</span>
            </div>
          </div>
        </section>

        <section className=" pb-6 rounded-2xl space-y-4 ">
          <div className="flex gap-3 justify-between">
            <div className=" overflow-hidden shadow-lg w-60 ">
              {/* Image Section */}
              <div className=" flex justify-center items-center  w-full">
                <img
                  src={episode1_all}
                  alt="Episode Character"
                  className="w-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className=" pb-6 pt-2 px-3 bg-gray-800 rounded-b-3xl flex justify-between items-center">
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">EPISODE 01</h3>
                  <p className="text-yellow-400 text-sm">BNB: $56.90</p>
                </div>
                {/* Button */}
                <button className="h-8 px-4 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600">
                  MINT NOW
                </button>
              </div>
            </div>
            <div className=" overflow-hidden shadow-lg w-60 ">
              {/* Image Section */}
              <div className=" flex justify-center items-center  w-full">
                <img
                  src={episode2_all}
                  alt="Episode Character"
                  className="w-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className=" pb-6 pt-2 px-3 bg-gray-800 rounded-b-3xl flex justify-between items-center">
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">EPISODE 01</h3>
                  <p className="text-yellow-400 text-sm">BNB: $56.90</p>
                </div>
                {/* Button */}
                <button className="h-8 px-4 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600">
                  MINT NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Minting;
