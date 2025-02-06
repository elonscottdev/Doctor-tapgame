import React, {useState} from "react";

import staking_img from "../../assets/staking_img.png";
import minting_img from "../../assets/minting_img.png";
import home_img from "../../assets/home_img.png";
import reward_img from "../../assets/reward_img.png";
import profile_img from "../../assets/profile_img.png";

import staking_2 from "../../assets/staking_2.png";
import minting_2 from "../../assets/minting_2.png";
import home_2 from "../../assets/home_2.png";
import reward_2 from "../../assets/reward_2.png";
import profile_2 from "../../assets/profile_2.png";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const tabs = [
    { label: "staking", src: staking_img, src1: staking_2, active: false },
    { label: "minting", src: minting_img, src1: minting_2, active: false },
    { label: "home", src: home_img, src1: home_2, active: false },
    { label: "reward", src: reward_img, src1: reward_2, active: false },
    { label: "profile", src: profile_img, src1: profile_2, active: false },
  ];

  const [activeTab, setActiveTab] = useState("Home");


  return (
    <div className="fixed bottom-0 w-full bg-[#1D1C1C] flex justify-around py-3 rounded-b-xl border-t-2 border-[#312d2d] ">
      <nav className="flex justify-between w-full px-6">

        {tabs.map((tab) => (
            <Link to={tab.label} >
            <button className="flex flex-col items-center text-xs font-medium font-pixelify" onClick={() => setActiveTab(tab.label)}  key={tab.label}>
            <img src={activeTab === tab.label ? tab.src1 : tab.src} className={`w-6 h-6  ${
                activeTab === tab.label ? "text-blue-500" : "text-gray-500"
              }`}></img>
            <p className={` ${
                activeTab === tab.label ? "text-blue-500" : "text-[#504F4F]" }`}>{tab.label}</p>
            </button>
          </Link>
        ))}
        {/* <Link to="staking" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={staking_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">staking</p>
        </Link>
       
        <Link to="reward" >
          <button className="flex flex-col items-center text-xs font-medium font-pixelify" onClick={handle_bg_change}  key={tabs.label}>
          <img src={reward_img} className={`w-6 h-6  ${
              activeTab === tabs.label ? "text-blue-500" : "text-gray-500"
            }`}></img>
          <p className="text-[#504F4F]">reward</p>
          </button>
        </Link>
        <Link to="/" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={home_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">home</p>
        </Link>
        <Link to="minting" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={minting_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">minting</p>
        </Link>
        <Link to="profile" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={profile_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">profile</p>
        </Link> */}
      </nav>
     
    </div>
  );
};

export default FooterNav;
