import React, { useState, useEffect, useRef } from "react";
import home_main_img from "../../assets/home_main_img.png";
import arrow_right from "../../assets/arrow_right.png";
import dolar from "../../assets/dolar.png";
import lightning_img from "../../assets/lightning_img.png";
import lightning_img_blue from "../../assets/lightning_img_blue.png";
import btn_tap from "../../assets/btn_tab.png";
import { motion } from "framer-motion";

import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import v5 from "../../assets/v5.png";
import v6 from "../../assets/v6.png";

const getRandomValue = (range) => Math.random() * (2 * range) - range;

const Home = () => {

  const [animations, setAnimations] = useState([]);
  const images = [v1, v2, v3, v4, v5, v6];
  const value = 50;
  const handleClick = () => {
    const range = 400;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    console.log(centerX + " , " + centerY)
    const offsetX = Math.random() * range - range;
    const offsetY = Math.random() * range - range;
    console.log(offsetX + " , " + offsetY)

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setAnimations((prev) => [
      ...prev,
      { id: Date.now(), x: centerX, y: centerY, imageSrc: randomImage, offset: getRandomValue(window.innerWidth/4) },
    ]);
  };
  

  return (
    <div className="h-screen px-6 mb-0 sm:mb-0 text-white flex flex-col justify-between items-center py-20 min-w-[320px] max-w-full relative">
      
      {animations.map(({ id, x, y, imageSrc, offset }) => (
        <motion.img
          key={id}
          src={imageSrc}
          alt="Moving Image"
          className="absolute  object-cover z-50"
          initial={{ x: offset, y, opacity: 1 }}
          animate={{ x: offset, y: "-100%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() =>
            setAnimations((prev) => prev.filter((anim) => anim.id !== id))
          }
        />
      ))}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex relative justify-between bg-[#1D1D20] rounded-xl border border-gray-700 p-2 mb-3 w-full">
          <div className="text-left">
            <div className="flex">
              <p className="text-[10px] sm:text-xs text-gray-400">
                Daily Limit
              </p>
              <img src={arrow_right} className="w-3 sm:w-4" alt="arrow" />
            </div>
            <div className="flex pt-2">
              <div className="flex items-center">
                <img
                  src={lightning_img_blue}
                  className="px-1 py-1 border border-gray-700 rounded-lg w-5 sm:w-6"
                  alt="lightning"
                />
              </div>
              <div className="flex items-center pl-2">
                <p className="text-lg sm:text-xl font-bold text-white">
                  140.4k
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-1 items-center">
              2001 <img className="h-4 sm:h-6" src={dolar} alt="dollar" />
            </p>
            <p className="text-[10px] sm:text-sm text-gray-400">Balance</p>
          </div>
          <div className="absolute z-10 w-full flex justify-center items-center top-[40px]">
            <div className="w-16 h-16 rounded-full bg-[#181f32] border border-blue-700 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-white">01</p>
              <p className="text-xs text-white">level</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 h-full flex flex-col justify-center items-center">
        <div className="relative">
          <img src={home_main_img} alt="Character" className="w-92 h-92" />
        </div>

        <button
          className="gap-1 z-50 flex items-center px-4 py-1 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 text-sm sm:px-6 sm:py-1.5 sm:text-base"
          onClick={handleClick}
        >
          <img src={btn_tap} className="w-4 sm:w-5" alt="tap" />
          <p>Tap Me</p>
        </button>
      </div>

      <div className="mt-3 px-2 py-1 w-full">
        <div className="w-full bg-gray-600 h-1.5 sm:h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-[10px] sm:text-sm mt-2">
          <div className="flex">
            <img src={lightning_img} className="w-3 sm:w-4" alt="lightning" />
            <p>4900/5000</p>
          </div>
          <p>100%</p>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
