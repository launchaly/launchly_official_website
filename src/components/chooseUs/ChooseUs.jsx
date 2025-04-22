import React from "react";

const features = [
  {
    icon: "/src/components/Our_Working_Team/assets/icon1.png",
    title: "Expert Team",
    desc: "Our team of experts ensures top-notch service and innovative solutions.",
  },
  {
    icon: "/src/components/Our_Working_Team/assets/icon2.png",
    title: "Customized Solutions",
    desc: "We provide tailored solutions to meet your specific needs.",
  },
  {
    icon: "/src/components/Our_Working_Team/assets/icon3.png",
    title: "Affordable Pricing",
    desc: "We offer high-quality services at competitive and affordable prices.",
  },
  {
    icon: "/src/components/Our_Working_Team/assets/icon4.png",
    title: "Timely Delivery",
    desc: "We ensure your project is delivered on time, every time.",
  },
  {
    icon: "/src/components/Our_Working_Team/assets/icon5.png",
    title: "End-to-End Support",
    desc: "We provide comprehensive support throughout the project lifecycle.",
  },
];

const ChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="text-start mb-6">
        <p className="text-[#b48f2b] text-[16px] font-bold uppercase tracking-[2.56px] leading-[30px] mb-[10px] pr-[10px] relative font-['Roboto','Helvetica','Arial',sans-serif] m-0 ">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#00113b]">
          Empowering Digital Success
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-0 justify-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#b48f2b] rounded-xl p-6 flex flex-col items-center text-center justify-center box-border
                 w-full max-w-[450px] h-auto lg:h-[200px]"
          >
            <div className="bg-[#b48f2b] w-16 h-16 flex items-center justify-center rounded-full shadow-md mb-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#00113b] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-800 text-md">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
