import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaPhoneAlt size={30} />,
    title: "Phone",
    lines: ["9693318841"],
  },
  {
    icon: <FaEnvelope size={30} />,
    title: "Email",
    lines: ["launchlysoftware@gmail.com"],
  },
  {
    icon: <FaMapMarkerAlt size={30} />,
    title: "Location",
    lines: [
      "Vill - Nayanananagr, P.O - Dihalahi,",
      "Laherialsarai, Darbhanaga ,Bihar-846004",
    ],
  },
];

const Contact = () => {
  return (
    <section className="bg-[#f3ebdb] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl text-center px-6 py-10 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#b3974e] text-white rounded-full p-5 shadow-md">
                {item.icon}
              </div>
            </div>
            <h3 className="text-[#b3974e] font-bold uppercase mb-2 text-lg">
              {item.title}:
            </h3>
            {item.lines.map((line, i) => (
              <p key={i} className="text-black text-md sm:text-lg">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
