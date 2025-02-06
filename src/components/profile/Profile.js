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
import Header from "../layouts/Header";
import FooterNav from "../layouts/FooterNav";

const Profile = () => {
  return (
    <div className="pt-16  h-screen text-white flex flex-col justify-between items-center  min-w-[320px] max-w-full">
      {/* Main Content */}
      <main className="pb-20 sm:pb-20  p-6 sm:p-8 space-y-4 w-full">
        {/* Balance and Token Info */}
        <section className="bg-gray-800 p-3 sm:p-4 rounded-2xl border border-gray-700 space-y-3">
          <div className="flex  justify-between items-center text-center sm:text-left">
            <div className="flex flex-col ">
              <div className="flex items-end">
                <p className="flex font-bold text-lg sm:text-3xl text-yellow-400 mt-2 items-center">
                  <img className="h-6 sm:h-full" src={dolar} /> &nbsp;34,800
                </p>
                <span className="text-xs sm:text-sm text-yellow-400"> &nbsp; PTS</span>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold">
                CURRENT BALANCE
              </p>
            </div>

            <button className="bg-blue-500 text-xs sm:text-sm  p-3 rounded-xl  text-white">
              WITHDRAW NOW
            </button>
          </div>
        </section>

        {/* Profile Section */}
        <section className="bg-gray-800 mb-16 border border-gray-700 rounded-2xl space-y-3 px-3 sm:px-4">
          <div className="flex justify-center">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-12 sm:px-24 text-center">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm">
                PROFILE
              </h2>
            </div>
          </div>

          {[
            {
              img: header_logo,
              title: "TALHA TAHIR 867",
              desc: "YOUR USERNAME",
              actionImg: copy_img,
              actionText: "COPY",
            },
            {
              img: file_img,
              title: "WITHDRAW AMOUNT",
              desc: "TOTAL WITHDRAW AMOUNT OF BEP20",
              actionImg: dolar,
              actionText: "$44.56",
            },
            {
              img: file_img,
              title: "WHITEPAPER",
              desc: "DOWNLOAD WHITEPAPER OR SEE",
              actionImg: download_img,
              actionText: "OPEN",
            },
            {
              img: volume_img,
              title: "GAME VOLUME",
              desc: "TURN ON/OFF VOLUME",
              toggle: true,
              toggleState: "off",
            },
            {
              img: volume_img,
              title: "GAME NOTIFICATION",
              desc: "TURN ON/OFF NOTIFICATIONS",
              toggle: true,
              toggleState: "on",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 justify-between border-b border-gray-700 p-2 sm:p-4"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-950 flex items-center justify-center rounded-md">
                  <img className="w-1/2" src={item.img} />
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

              {/* Toggle or Action */}
              <div className="flex items-center space-x-2 sm:space-x-3 mt-2 sm:mt-0">
                {item.toggle ? (
                  <div className="flex items-center gap-2 sm:gap-3 bg-blue-950 rounded-lg px-2 py-1">
                    {item.toggleState === "on" && (
                      <p className="text-sm font-bold text-blue-700">on</p>
                    )}
                    <button
                      className={`w-6 h-7 sm:w-7 sm:h-8 rounded-lg ${
                        item.toggleState === "on"
                          ? "bg-blue-500"
                          : "bg-blue-700"
                      }`}
                    ></button>
                    {item.toggleState === "off" && (
                      <p className="text-sm font-bold text-blue-800">off</p>
                    )}
                  </div>
                ) : (
                  <>
                    <img className="w-4 sm:w-5" src={item.actionImg} />
                    <span className="font-bold text-xs sm:text-xl text-gray-400">
                      {item.actionText}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
export default Profile;
