import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import About from "../about/About";
import Services from "../services/Services";
import ChooseUs from "../chooseUs/ChooseUs";
import Team from "../Our Team/Team";
import OurWork from "../Our Work/OurWork";
import OurClients from "../Our Clients/OurClients";
import { Link } from "react-router-dom";

// Custom Prev Arrow (only for desktop)
const PrevArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute left-5 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-70 p-6 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <GrPrevious size={25} />
  </div>
);

// Custom Next Arrow (only for desktop)
const NextArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute right-5 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-70 p-6 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <GrNext size={25} />
  </div>
);

const HomepageSlider = () => {
  const slides = [
    {
      image: "/src/assets/wallpaper.jpg",
      title: "We Provide Services.",
      description:
        "Website Development, App Development, Digital Marketing, Social Media Marketing,Content Writing.",
      buttonText: "Contact Us",
    },
    {
      image: "/src/assets/wallpaper2.jpg",
      title: "Elavate Your Online Presence with Us.",
      description:
        "We specialize in creating cutting-edge IT solution that enhance your brand visibility, improve user engagement, and drive business growth.",
      buttonText: "Contact Us",
    },
    {
      image: "/src/assets/wallpaper3.webp",
      title: "Smart Solution for a Digital Wolrld.",
      description:
        "In a era driven by technology, businesses need innovative and efficient IT solutions to stay ahead.",
      buttonText: "Contact Us",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white opacity-60 hover:opacity-100 transition-all duration-300"></div>
    ),
  };

  return (
    <>
    <div className="relative w-full h-[100vh] mt-25 verflow-hidden">
      <div className="relative h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="h-[100vh] w-full relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay Content for each slide */}
              <div className="absolute inset-0 flex items-center z-10 px-4">
                <div className="ml-[8%] min-h-[80px]  text-center sm:text-left text-white bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl py-8 px-6 max-w-[90%] sm:max-w-[600px]">
                  <h1 className="text-[20px] sm:text-7xl  leading-5 tracking-tighter mb-4">
                    {slide.title}
                  </h1>
                  <p className=" sm:text-base mb-1 sm:mb-5 mt-4 font-[10px] sm:font-[15px] text-#fff leading-6  sm:tracking-wider tracking-normal">
                    {slide.description}
                  </p>
                  <Link to="/contact-banner" className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-sm sm:text-base px-6 py-2 rounded-[50px] mt-[15px] p-[12px 15px]">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <About />
    <Services />
    <ChooseUs />
    <Team />
    <OurWork />
    <OurClients />
    </>
  );
};

export default HomepageSlider;
