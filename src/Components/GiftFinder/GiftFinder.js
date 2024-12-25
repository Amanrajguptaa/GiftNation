import React, { useState } from "react";
import image from "../../../public/assets/GiftFinderLoader.png";

const GiftFinder = () => {
  const [message, setMessage] = useState("Start the Search");
  const [isSearching, setIsSearching] = useState(false);

  const handleSendClick = () => {
    if (isSearching) return;

    setIsSearching(true);
    const messages = [
      "Looking for the best gift 🎁",
      "Searching the inventory 🔍",
      "Almost there ⏳",
    ];

    let index = 0;

    const interval = setInterval(() => {
      setMessage(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(interval);
        setMessage("Search Complete ✅");
        setIsSearching(false);
      }
    }, 1500);
  };

  return (
    <div className="main_ctr h-[500px] my-12 mx-32 px-16 py-2 bg-[#efefef] rounded-xl flex items-center justify-between gap-2">
      <div className="left_div w-6/12 flex flex-col gap-6">
        <div className="title_ctr">
          <div className="font-bold text-3xl">Find the Perfect Gift</div>
          <div className="text-md">
            Answer a few questions and let our gift finder do the magic.
            Personalized recommendations based on your preferences.
          </div>
        </div>
        <div className="opts_ctr flex flex-col gap-6">
          <div className="occasion_ctr flex flex-col gap-1">
            <div className="heading text-lg font-bold">Occasion</div>
            <div className="options flex items-center justify-between w-full gap-2">
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 1
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 2
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 3
              </div>
            </div>
          </div>
          <div className="occasion_ctr flex flex-col gap-1">
            <div className="heading text-lg font-bold">Recipient</div>
            <div className="options flex items-center justify-between w-full gap-2">
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 1
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 2
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 3
              </div>
            </div>
          </div>
          <div className="occasion_ctr flex flex-col gap-1">
            <div className="heading text-lg font-bold">Recipient</div>
            <div className="options flex items-center justify-between w-full gap-2">
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 1
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 2
              </div>
              <div className="text-sm text-center bg-[#E0E0E0] rounded-full w-4/12 p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out">
                Option 3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_div w-4/12 h-full flex items-center justify-center flex-col gap-4 py-16">
        <div className="bg-white rounded-xl shadow-md h-full w-full flex items-center justify-center">
          <img
            src={image}
            alt="Gift Finder Loader"
            className={`max-w-[30%] ${isSearching ? "animate-pulse" : ""}`}
          />
        </div>
        <div className="btns_ctr flex items-center justify-between w-full gap-2">
          <div className="w-10/12 p-4 py-2 flex items-center justify-center text-sm border border-black rounded-md bg-white shadow-sm cursor-pointer">
            {message}
          </div>
          <div
            className={`w-2/12 p-4 py-2 flex items-center justify-center bg-[#111827] shadow-sm cursor-pointer rounded-md overflow-hidden ${isSearching ? "bg-green-600" : ""}`}
            onClick={handleSendClick}
          >
            <div
              className={`bi bi-send-fill text-white duration-1000 ${
                isSearching ? "translate-x-6 -translate-y-6" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftFinder;
