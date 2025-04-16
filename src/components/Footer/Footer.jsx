import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div className="space-y-6">
          <img
            src="/src/assets/logo.jpg"
            alt="Logo"
            className=" rounded-full w-[80px] h-[80px] object-cover mx-auto md:mx-0"
          />

          <p className="m-0 font-roboto font-normal text-sm md:text-base leading-6 tracking-[0.00938em]">
            Your one-stop solution for all things digital. <br />
            We are passionate about helping businesses thrive in the digital
            world.
          </p>
          <Link
            to="/about-banner"
            className="flex items-center justify-center gap-[5px] bg-[#b48f2b] text-white mt-[20px] px-[15px] py-[12px] rounded-full text-center w-[150px] font-sans text-sm md:text-base font-semibold"
          >
            View More
            <span className="text-lg">{">>"}</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#b48f2b] text-[16px] uppercase mt-[30px] mb-[20px]">
            QUICK LINK
          </h3>
          <ul className="space-y-3 text-md md:text-base flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/about-banne">About Us</Link>
            <Link to="/services-banner">Services</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/gallery-banner">Gallery</Link>
            <Link to="/contact-banner">Contact Us</Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#b48f2b] text-[16px] uppercase mt-[30px] mb-[20px]">
            SERVICE
          </h3>
          <ul className="space-y-3 text-md md:text-base flex flex-col">
            <Link to="">Website Development</Link>
            <Link to="">App Development</Link>
            <Link to="">Content Writing</Link>
            <Link to="">Graphic Design</Link>
          </ul>
        </div>

        {/* Address & Socials */}
        <div className="space-y-4 text-md md:text-base">
          <h3 className="text-[#b48f2b] text-[16px] uppercase mt-[30px] mb-[20px]">
            ADDRESS
          </h3>
          <p>
            Mahada Complex near yashwant nagar,
            <br />
            virar-nalasopara linked road Virar(west)-401303
          </p>
          <p>+91 9693318841</p>
          <p>launchlysoftware@gmail.com</p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="bg-[#b68f2b] p-3 rounded-full text-black hover:scale-105 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sadanand-kumar-yadav-433a81260/"
              className="bg-[#b68f2b] p-3 rounded-full text-black hover:scale-105 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-md md:text-base flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p>
          <a href="#" className="text-[#b68f2b]">
            Launchly Software Pvt Ltd
          </a>{" "}
          © {new Date().getFullYear()}. All rights reserved. Designed and
          Developed by{" "}
          <a href="#" className="text-[#b68f2b]">
            Launchly Software Pvt Ltd
          </a>
        </p>
        <div className="flex gap-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
