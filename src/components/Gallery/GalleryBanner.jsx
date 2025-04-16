import React from "react";
import Gallery from "./Gallery";
import { Link } from 'react-router-dom'

const GalleryBanner = () => {
  return (
    <>
      <section className="bg-[#1d1500] text-yellow-400 py-20 px-4 sm:px-10 sm:mt-[95px]">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Gallery</h1>
          <div className="text-sm sm:text-base text-yellow-300 flex items-center space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-yellow-400">/</span>
            <span>Gallery</span>
          </div>
          <p className="text-black mt-2 text-sm sm:text-base">Breadcrumbs</p>
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default GalleryBanner;
