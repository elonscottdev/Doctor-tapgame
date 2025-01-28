import React from "react";

import staking_img from "../../assets/staking_img.png";
import minting_img from "../../assets/minting_img.png";
import home_img from "../../assets/home_img.png";
import reward_img from "../../assets/reward_img.png";
import profile_img from "../../assets/profile_img.png";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const tabs = [
    { label: "Staking", src: staking_img, active: false },
    { label: "Minting", src: minting_img, active: false },
    { label: "Home", src: home_img, active: false },
    { label: "Reward", src: reward_img, active: false },
    { label: "Profile", src: profile_img, active: false },
  ];

  return (
    <div className="w-full bg-[#1D1C1C] flex justify-around py-3 rounded-b-xl border-t-2 border-[#312d2d] font-pixelify-Sans">
      <nav className="flex justify-between w-full px-6">
        <Link to="staking" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={staking_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">staking</p>
        </Link>
       
        <Link to="reward" className="flex flex-col items-center text-xs font-medium font-pixelify">
          <img src={reward_img} className="w-6 h-6 "></img>
          <p className="text-[#504F4F]">reward</p>
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
        </Link>
      </nav>
    </div>
  );
};

export default FooterNav;
