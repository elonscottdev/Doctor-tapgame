import React from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { FiLayers } from "react-icons/fi";
// import { BsPerson } from "react-icons/bs";
// import { BiCoinStack } from "react-icons/bi";
import dolar from "../../assets/dolar.png";
import header_logo from "../../assets/header_logo.png";
import volume_img from "../../assets/volume_img.png";
import file_img from "../../assets/file_img.png";
import copy_img from "../../assets/copy.png";
import download_img from "../../assets/download.png";
const Profile = () => {
  const value = 50;
  return (
    <div className=" bg-gray-800 text-white flex flex-col justify-between items-center px-6 py-2">
      {/* Main Content */}
      <main className="p-4 space-y-6 w-full">
        {/* Balance and Token Info */}
        <section className="bg-gray-800 p-4 rounded-2xl border-2 border-gray-700 space-y-4">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="flex font-bold text-3xl text-yellow-400 mt-2 items-center">
                <img className="h-full" src={dolar} /> &nbsp;34,800{" "}
                <p className="text-sm "> &nbsp;PTS</p>
              </p>
              <p className="text-sm text-white font-bold">CURRENT BALANCE</p>
            </div>

            <div className="bg-blue-500 text-sm p-4 rounded-xl text-white font-bold">
              WITHDRAWL NOW
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="bg-gray-800 pb-6 border border-gray-700 rounded-2xl space-y-4 px-4">
          <div className="flex items-center  justify-center ">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-24">
              <h2 className="text-blue-700 font-bold text-center text-sm ">
                PROFILE
              </h2>
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className=" bg-blue-500 flex items-center justify-center rounded-md">
                <img className="w-10" src={header_logo} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">
                  TALHA TAHIR 867
                </h3>
                <p className="text-sm text-blue-400">YOUR USERNAME</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex items-center space-x-2">
              <img className="w-5" src={copy_img} />
              <span className="font-bold text-gray-400 text-xl">COPY</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-950 flex items-center justify-center rounded-md">
                <img className="w-1/2" src={file_img} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">
                  WITHDRAW AMOUNT
                </h3>
                <p className="text-sm text-blue-400">
                  TOTAL WITHDRAW AMOUND OF BEP20
                </p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex items-center space-x-2">
              <img src={dolar} />
              <span className="font-bold text-yellow-400 text-xl">$44.56</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-950 flex items-center justify-center rounded-md">
                <img className="w-1/2" src={file_img} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">WHITEPAPER</h3>
                <p className="text-sm text-blue-400">
                  DOWNLOAD WHITEPPER OR SEE
                </p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex items-center space-x-2">
              <img className="w-5" src={download_img} />
              <span className="font-bold text-gray-400 text-xl">OPEN</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-950 flex items-center justify-center rounded-md">
                <img className="w-1/2" src={volume_img} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">GAME VOLUME</h3>
                <p className="text-sm text-blue-400">TURN ON/OFF VOLUME</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex items-center space-x-2">
              <div className="flex gap-3 bg-blue-950 rounded-lg">
                
                <button className="bg-blue-700 w-7 h-8 rounded-lg"></button>
                <p className="text-lg mr-2 font-bold text-blue-800">off</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-950 flex items-center justify-center rounded-md">
                <img className="w-1/2" src={volume_img} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl">
                  GAME NOTIFICATION
                </h3>
                <p className="text-sm text-blue-400">TURN ON/OFF VOLUME</p>
              </div>
            </div>

            {/* Amount Display */}
            <div className="flex items-center space-x-2">
              <div className="flex gap-3 bg-blue-950 rounded-lg">
                <p className="text-lg ml-2 font-bold text-blue-700">on</p>
                <button className="bg-blue-500 w-7 h-8 rounded-lg"></button>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
      </main>
    </div>
  );
};

export default Profile;
