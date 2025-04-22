import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Suraj from "../Our_Working_Team/assets/Suraj_Kumar.jpg";
import Pooja from "./assets/pooja_limbola.jpg";

const projects = [
  {
    image: Suraj,
    title: "Suraj Kumar - MERN Stack Developer",
    link: "https://www.linkedin.com/in/suraj-kumar-939268228",
  },
  {
    image: Pooja,
    title: "Pooja Limbola - Sofwtare Engineer",
    link: "https://www.linkedin.com/in/pooja-limbola-2b915b190/",
  },
  {
    image: Suraj,
    title: "Suraj Kumar - MERN Stack Developer",
    link: "https://www.linkedin.com/in/suraj-kumar-939268228",
  },
  {
    image: Pooja,
    title: "Pooja Limbola - Sofwtare Engineer",
    link: "https://www.linkedin.com/in/pooja-limbola-2b915b190/",
  },
  {
    image: Suraj,
    title: "Suraj Kumar - MERN Stack Developer",
    link: "https://www.linkedin.com/in/suraj-kumar-939268228",
  },
  {
    image: Pooja,
    title: "Pooja Limbola - Sofwtare Engineer",
    link: "https://www.linkedin.com/in/pooja-limbola-2b915b190/",
  },
  {
    image: Suraj,
    title: "Suraj Kumar - MERN Stack Developer",
    link: "https://www.linkedin.com/in/suraj-kumar-939268228",
  },
  {
    image: Pooja,
    title: "Pooja Limbola - Sofwtare Engineer",
    link: "https://www.linkedin.com/in/pooja-limbola-2b915b190/",
  },
];

const Our_Working_Team = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-20 bg-white sm:mt-[95px]">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10 relative">
        <h2 className="text-[#b48f2b] text-[16px] font-bold uppercase tracking-[2.56px] leading-[30px] mb-[10px] pr-[10px] relative before:absolute before:w-[40px] before:h-[2px] before:bg-[#b48f2b] before:top-1/2 before:-right-12">
          Our Working Team
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <button className="swiper-button-prev absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#b48f2b] rounded-md bg-transparent hover:text-white transition">
          <FaArrowLeft />
        </button>
        <button className="swiper-button-next absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#b48f2b] rounded-md bg-transparent hover:text-white transition">
          <FaArrowRight />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover object-top"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-3 text-black">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" // ye new tab me link ko open karwayega
                    className="inline-block bg-[#b48f2b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a27726] transition"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-10 space-x-2" />
      </div>
    </div>
  );
};

export default Our_Working_Team;
