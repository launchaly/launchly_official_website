import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// Base services data
const baseServices = [
  {
    title: "App Development",
    desc: "App development is the process of designing, building, testing, and deploying software applications for mobile or desktop platforms.",
    icon: "/src/assets/Services/icon1.svg",
    link: "/app-development-banner/2",
  },
  {
    title: "Content Writing",
    desc: "Content writing is the process of creating, editing, and publishing written content for digital and print media.",
    icon: "/src/assets/services/icon2.svg",
    link: "content-writer-banner/3",
  },
  {
    title: "Website Development",
    desc: "Website development involves creating, designing, and maintaining websites for the internet or intranet.",
    icon: "/src/assets/services/icon3.svg",
    link: "/web-decvelopment-banner/1",
  },
];

// Repeat base services to simulate multiple slides
const services = Array(3).fill(baseServices).flat();

const Services = () => {
  const swiperRef = useRef(null);

  const handleArrow = (direction) => {
    if (!swiperRef.current) return;
    if (direction === "left") {
      swiperRef.current.slidePrev();
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-[#f6eee5] py-16 px-4 lg:px-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <p className="text-[#b48f2b] text-[16px] font-bold uppercase tracking-[2.56px] leading-[30px]">
          Our Services
        </p>
      </div>

      <div className="flex justify-between">
        <h2 className="text-[#00113b] text-[34px] sm:text-[60px] lg:text-[50px] font-bold sm:leading-[64px] leading-[40px] mb-10 mt-3">
          Smart Solutions for a <br /> Digital World
        </h2>

        <div className="hidden lg:flex gap-3 mt-12 lg:mt-20">
          <button
            onClick={() => handleArrow("left")}
            className="w-[55px] h-[55px] flex items-center justify-center border-2 border-[#b48f2b] rounded-md shadow hover:bg-[#b48f2b] hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleArrow("right")}
            className="w-[55px] h-[55px] flex items-center justify-center border-2 border-[#b48f2b] rounded-md shadow hover:bg-[#b48f2b] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper Cards */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: "#custom-swiper-pagination",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl p-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300 flex flex-col items-center justify-center text-center w-[90%] mt-0 mb-[25px] mx-auto">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4 p-2 bg-[#fafafa] rounded-xl"
              />
              <h3 className="text-[22px] font-bold text-[#00113b] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md mb-4 line-clamp-3 -tracking-tighter leading-7">
                {service.desc}
              </p>
              <Link
                to={service.link}
                className="bg-[#b48f2b] text-white px-8 py-4 rounded-full text-md font-semibold hover:bg-[#997520] transition"
              >
                View More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots */}
      <div className="flex justify-center mt-6" id="custom-swiper-pagination"></div>
    </section>
  );
};

export default Services;
