import React from "react";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHeroFrame from "../assets/images/img-hero-frame.jpg";
// import ImageHero from '../assets/images/img-hero.jpg'
// import ImageHero from '../assets/images/img-hero.jpg'
// import ImageHero from '../assets/images/img-hero.jpg'

import numberFormat from "../etc/formatNumber";

import Button from "../utils/Button";

function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container mx-auto pt-5 p-4">
      <div className="flex items-center justify-between">
        <div className="col-auto pe-5 w-1/3">
          <h1 className="font-bold mb-3 text-[42px] font-sans">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font light text-slate-300 font-sans text-[16px]">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-blue-700/30 shadow-lg"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="flex gap-5 mt-3">
            <div className="flex mt-3">
              <h6 className="text-blue-800 font-semibold">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-light">Travelers</span>
              </h6>
            </div>
            <div className="flex mt-3">
              <h6 className="text-blue-800 font-semibold">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-500 font-light">Treasures</span>
              </h6>
            </div>
            <div className="flex mt-3">
              <h6 className="text-blue-800 font-semibold">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="ms-5 w-[540px] h-[420px]">
          <img
            src={ImageHero}
            alt="Room with couches"
            className="absolute z-10 w-[540px] h-[420px] ms-[-30px]"
          />
          <img
            src={ImageHeroFrame}
            alt="Room with couches frame"
            className="absolute w-[540px] h-[420px] mt-[30px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
