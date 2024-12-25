import React from "react";
import Card from "../Card/Card";
import "./SectionByLabel.css";
import MobileCard from "../MobileCard/MobileCard";

const SectionByLabel = () => {
  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-6 md:px-24 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          Trending Now
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          Discover what's capturing hearts this season
        </div>
      </div>
      <div className="relative w-full items-center px-24 hidden md:flex">
        <div className="w-full flex items-center justify-between scrollbar">
          <div className="cards_ctr w-[200%] flex items-center justify-center gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="w-full mobile_cards_ctr flex flex-col gap-3 md:hidden">
        <MobileCard/>
        <MobileCard/>
        <MobileCard/>
      </div>
      <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
        View All Gifts
        <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
      </div>
    </div>
  );
};

export default SectionByLabel;