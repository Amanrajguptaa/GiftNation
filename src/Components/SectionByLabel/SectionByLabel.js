import React from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileCard from "../MobileCard/MobileCard";

const SectionByLabel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main_ctr flex flex-col items-center justify-center py-10 px-6 md:px-12 lg:px-24 gap-8">
      <div className="text_ctr text-center">
        <h2 className="heading_ctr text-4xl font-semibold">
          Trending Now
        </h2>
        <p className="subheading_ctr text-lg mt-2 text-gray-600">
          Discover what's capturing hearts this season
        </p>
      </div>

      <div className="relative w-full hidden md:block">
        <Slider {...settings} className="slider-container">
          {[1,2,3,4,5,6].map((item, index) => (
            <div key={index} className="px-3">
              <Card />
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex flex-col gap-4 md:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <MobileCard key={index} />
        ))}
      </div>

      <button className="explore_btn flex items-center justify-center bg-gray-200 rounded-full font-semibold px-8 py-3 text-sm text-gray-800 hover:bg-gray-300 transition duration-200 ease-in-out">
        View All Gifts
        <span className="bi bi-arrow-right ml-2"></span>
      </button>
    </div>
  );
};

export default SectionByLabel;
