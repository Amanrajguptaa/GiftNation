import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FeatureCardsSection from "./Components/FeatureCardsSection/FeatureCardsSection";
import FeaturedCategoriesSection from "./Components/FeaturedCategoriesSection/FeaturedCategoriesSection";
import SectionByLabel from "./Components/SectionByLabel/SectionByLabel";
import CtaBannerSection from "./Components/CtaBannerSection/CtaBannerSection";
import GiftFinder from "./Components/GiftFinder/GiftFinder";

const App = () => {
  return (
    <>
      <Header />
      <FeatureCardsSection />
      <FeaturedCategoriesSection />
      <SectionByLabel />
      <CtaBannerSection/>
      <GiftFinder/>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
