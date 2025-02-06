import React, { useState } from "react";

import header_logo from "../../assets/header_logo.png";
import tron_img from "../../assets/tron_img.png";
import dmond_img from "../../assets/dmond_img.png";
import file from "../../assets/file.png";
import translate from "../../assets/translate.png";
import arrow_left from "../../assets/arrow_left.png";
import imTokenIcon from "../../assets/imTokenIcon.png";
import unstoppableIcon from "../../assets/unstoppableIcon.png";
import safepalIcon from "../../assets/safepalIcon.png";
import tonWalletIcon from "../../assets/tonWalletIcon.png";
import english from "../../assets/english.png";
import thailand from "../../assets/thailand.png";
import vitenamese from "../../assets/vitenam.png";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Header = () => {
  const [selectedWallet, setSelectedWallet] = useState("TON Wallet");
  const [selectedLanguage, setSelectedLanguage] = useState("Thailand");

  const wallets = [
    { name: "Unstoppable", icon: unstoppableIcon },
    { name: "IM Token", icon: imTokenIcon },
    { name: "Safepal", icon: safepalIcon },
    { name: "TON Wallet", icon: tonWalletIcon },

  ];

  const languages = [
    { name: "English", icon: english },
    { name: "Thailand", icon: thailand },
    { name: "Vitenamese", icon: vitenamese },

  ];

  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);

  const handle_open1 = () => {
    setOpen1(true);
  };

  const handle_open = () => {
    setOpen(true);
  };
  return (
    <div className="z-20 fixed top-0 w-full  flex  justify-between items-center px-4 py-2  bg-black rounded-t-xl">
      {/* User Info */}
      <div className="flex gap-2 items-center bg-[#1D1D20] p-2 rounded-xl border-2 border-gray-700">
        <img src={header_logo} />
        <div className=" flex items-center text-xs gap-2  text-white">
          <p className=" font-bold truncate ">talhatahir...</p>
          <div className="flex flex-col">
            <div className="flex space-x-2 items-center">
              <img src={tron_img} className="h-[9px]" />
              <span className="">0</span>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={dmond_img} className="h-[9px]" />
              <span className="">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white"
          onClick={handle_open1}
        >
          <img src={file} />
        </button>
        <button onClick={handle_open} className="w-8 h-8  bg-gray-700 rounded-md flex items-center justify-center text-white">
          <img src={translate} />
        </button>
      </div>

      <Dialog open={open1} onClose={setOpen1} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed rounded-xl inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed  inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  justify-center p-1 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative flex flex-col itens-center jusitfy-center p-4 border-2 border-blue-500 transform overflow-hidden rounded-xl bg-gray-800 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="flex items-center justify-between w-full pb-2 border-b-2 border-gray-700">
                <button className="flex items-center space-x-2 text-blue-400">
                  <img src={arrow_left} alt="Back" className="w-4 h-4" />
                  <span className="text-sm font-bold">BACK TO HOME</span>
                </button>
              </div>

              {/* Wallet Options */}
              <div className="w-full  mt-6 grid grid-cols-2 gap-4">
                {wallets.map((wallet) => (
                  <div
                    key={wallet.name}
                    className={`flex justify-between items-center gap-1 px-1 py-2 bg-gray-800 rounded-xl border ${
                      selectedWallet === wallet.name
                        ? "border-blue-500"
                        : "border-gray-700"
                    } cursor-pointer`}
                    onClick={() => setSelectedWallet(wallet.name)}
                  >
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-8 h-8"
                    />
                    <p className="text-sm text-white font-bold">{wallet.name}</p>
                    <div
                      className={`ml-auto w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                        selectedWallet === wallet.name
                          ? "border-blue-500"
                          : "border-gray-700"
                      }`}
                    >
                      {selectedWallet === wallet.name && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>


      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed rounded-xl inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed  inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-1 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative flex flex-col itens-center jusitfy-center p-4 border-2 border-blue-500 transform overflow-hidden rounded-xl bg-gray-800 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="flex items-center justify-between w-full pb-2 border-b-2 border-gray-700">
                <button className="flex items-center space-x-2 text-blue-400">
                  <img src={arrow_left} alt="Back" className="w-4 h-4" />
                  <span className="text-sm font-bold">BACK TO HOME</span>
                </button>
              </div>

              {/* Language Options */}
              <div className="w-full  mt-6 grid grid-cols-2 gap-4">
                {languages.map((languages) => (
                  <div
                    key={languages.name}
                    className={`flex justify-between items-center gap-1 px-1 py-2 bg-gray-800 rounded-xl border ${
                      selectedLanguage === languages.name
                        ? "border-blue-500"
                        : "border-gray-700"
                    } cursor-pointer`}
                    onClick={() => setSelectedLanguage(languages.name)}
                  >
                    <img
                      src={languages.icon}
                      alt={languages.name}
                      className="w-8 h-8"
                    />
                    <p className="text-sm text-white font-bold">{languages.name}</p>
                    <div
                      className={`ml-auto w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                        selectedLanguage === languages.name
                          ? "border-blue-500"
                          : "border-gray-700"
                      }`}
                    >
                      {selectedLanguage === languages.name && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Header;
