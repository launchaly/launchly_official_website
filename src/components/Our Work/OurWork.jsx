import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    image: "/src/components/Our_Working_Team/assets/W9.jpg",
    title: "Apna Paisa",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/PGB.jpg",
    title: "PGB Technologies",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/Quick.jpg",
    title: "Quick Mobiles",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/W8.jpg",
    title: "Reify",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/W5.jpg",
    title: "Aveda Hotels",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/W4.jpg",
    title: "Metsmorf",
    link: "#",
  },
  {
    image: "/src/components/Our_Working_Team/assets/W3.jpg",
    title: "Sentinels Security",
    link: "#",
  },
];

const OurWork = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-20 bg-white sm:mt-[95px]">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10 relative">
        <h2 className="text-[#b48f2b] text-[16px] font-bold uppercase tracking-[2.56px] leading-[30px] mb-[10px] pr-[10px] relative before:absolute before:w-[40px] before:h-[2px] before:bg-[#b48f2b] before:top-1/2 before:-right-12">
          Our Work
        </h2>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#b48f2b] rounded-md bg-transparent hover:text-white transition">
          <FaArrowLeft />
        </button>
        <button className="swiper-button-next absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#b48f2b] rounded-md bg-transparent hover:text-white transition">
          <FaArrowRight />
        </button>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2.2 }, // Tablet
            1024: { slidesPerView: 3.2 }, // Desktop
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
                  className="w-full h-70 object-cover object-top"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-3 text-black">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="inline-block bg-[#b48f2b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a27726] transition"
                  >
                    View
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

export default OurWork;
