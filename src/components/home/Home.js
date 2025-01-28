import React from "react";
import home_main_img from "../../assets/home_main_img.png";
import arrow_right from "../../assets/arrow_right.png";
import dolar from "../../assets/dolar.png";
import lightning_img from "../../assets/lightning_img.png";
import lightning_img_blue from "../../assets/lightning_img_blue.png";
import btn_tap from "../../assets/btn_tab.png";

const Home = () => {
  const value = 50;
  return (
    <div className=" bg-darkBlue text-white flex flex-col justify-between items-center px-4 py-2">
      {/* Main Content */}
      <div className=" flex flex-col items-center justify-center w-full">
        <div className="flex justify-between bg-[#1D1D20] rounded-2xl border-2 border-gray-700  p-2 mb-4 w-full">
          <div className="text-left">
            <div className="flex">
              <p className=" text-xs text-gray-400">Daily Limit</p>
              <img src={arrow_right}></img>
            </div>
            <div className="flex pt-2">
              <div className="flex items-center">
                <img
                  src={lightning_img_blue}
                  className=" px-2 py-2 border border-gray-700 rounded-lg "
                ></img>
              </div>
              <div className="flex items-center pl-2">
                <p className="flex text-xl font-bold text-white ">140.4k</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="flex font-bold text-2xl text-yellow-400 mt-2 items-center">
              2001 <img className="h-full" src={dolar} />
            </p>
            <p className="text-sm text-gray-400">Balance</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-full flex justify-center items-center   top-[-50px]">
            <div className="w-16 h-16 rounded-full bg-[#181f32] border-2 border-blue-700  flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-white">01</p>
              <p className="text-xs text-white">level</p>
            </div>
          </div>
          <img src={home_main_img} alt="Character" className=" mt-2" />
        </div>
        <button className=" gap-1 flex items-center px-6 py-1.5 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700">
          <img src={btn_tap} />
          <p>Tap Me</p>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full px-4 py-2">
        <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="flex justify-start text-sm mt-2">
          <img src={lightning_img} />
          <p>4900/5000</p>
          {/* <p>100%</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
