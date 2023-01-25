import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hippoLogo from "../assets/slider-logo/hippo.svg";
import homeAndLivingLogo from "../assets/slider-logo/home-and-living.svg";
import ilios from "../assets/slider-logo/ilios.svg";
import dioLivingLogo from "../assets/slider-logo/dio-living.svg";
import melandasLogo from "../assets/slider-logo/melandas.svg";

const assets = [
  hippoLogo,
  homeAndLivingLogo,
  ilios,
  dioLivingLogo,
  melandasLogo,
  hippoLogo,
  homeAndLivingLogo,
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const LogoSlider = () => {
  return (
    <div className="w-full h-fit">
      <Slider {...settings}>
        {assets.map((e, i) => (
          <div key={i}>
            <img src={e} alt={`slider-logo-${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
