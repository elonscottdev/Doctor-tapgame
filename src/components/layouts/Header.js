import React from "react";

import header_logo from "../../assets/header_logo.png";
import tron_img from "../../assets/tron_img.png";
import dmond_img from "../../assets/dmond_img.png";
import file from "../../assets/file.png";
import translate from "../../assets/translate.png"

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2  bg-black rounded-t-xl">
      {/* User Info */}
      <div className="flex gap-2 items-center bg-[#1D1D20] p-2 rounded-xl border-2 border-gray-700">
        <img src={header_logo}/>
        <div className=" flex items-center text-xs gap-2  text-white">
          <p className=" font-bold truncate ">talhatahir...</p>
          <div className="flex flex-col">
            <div className="flex space-x-2 items-center">
              <img src={tron_img} className="h-[9px]"/>
              <span className="">0</span>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={dmond_img} className="h-[9px]"/>
              <span className="">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white">
          <img src={file}/>
        </button>
        <button className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white">
        <img src={translate}/>
        </button>
      </div>
    </div>
  );
};

export default Header;
