import React from "react";

const galleryImages = [
  "/images/cake1.jpg",
  "/images/dinner.jpg",
  "/images/group.jpg",
  "/images/cake2.jpg",
  "/images/cake3.jpg",
  "/images/group2.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-[#f9f0e6] py-20 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h3 className="text-yellow-600 uppercase font-semibold tracking-widest text-sm mb-2">
            Gallery
          </h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0c1a4b]">
            Capturing Moments from Our Events & Functions
          </h2>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-md shadow-md">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
