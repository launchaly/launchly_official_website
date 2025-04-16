import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clipValue, setClipValue] = useState("9%");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setClipValue("30%");
      } else {
        setClipValue("9%");
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed z-50 sm:h-[100px] h-[60px] shadow-md w-full top-0 left-0 flex items-center justify-between bg-[#f6ede3] px-6 md:px-20">
      {/* Logo */}
      <div className="z-10 flex items-center">
        <Link to="/">
        <img
          src="/src/assets/logo.jpg"
          alt="Logo"
          className="w-[55px] md:w-[90px] h-auto rounded-full"
        />
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Diagonal Black Background */}
      <div
        className="absolute top-0 left-[160px] sm:left-[270px] right-0 bottom-0 bg-black z-0"
        style={{
          clipPath: `polygon(${clipValue} 0, 100% 0, 100% 100%, 0% 100%)`,
        }}  
      />  

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex absolute top-0 right-0 h-full items-center pr-6 md:pr-16 space-x-6 text-white text-md font-medium z-10">
        <Link
          to="/"
          className="text-[#c79f2f] font-semibold hover:text-gray-300"
        >
          Home
        </Link>
        <Link to="/about-banner" className="hover:text-gray-300">
          About Us
        </Link>
        <Link to="/services-banner" className="hover:text-gray-300">
          Services
        </Link>
        <Link to="/our-work-banner" className="hover:text-gray-300">
          Our Work
        </Link>
        <Link to="/gallery-banner" className="hover:text-gray-300">
          Gallery
        </Link>
        <Link to="/contact-banner" className="hover:text-gray-300">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 right-0 bg-black text-white z-30 py-4 px-6 lg:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/" className="text-[#c79f2f] hover:text-gray-300">
              Home
            </Link>
            <Link to="/about-banner" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/services-banner" className="hover:text-gray-300">
              Services
            </Link>
            <Link to="/our-work-banner" className="hover:text-gray-300">
              Our Work
            </Link>
            <Link to="/gallery-banner" className="hover:text-gray-300">
              Gallery
            </Link>
            <Link to="/contact-banner" className="hover:text-gray-300">
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
