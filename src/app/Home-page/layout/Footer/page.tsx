import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0]  h-auto relative my-32 p-8">
      {/* Top Black Section */}
      <div className="bg-black w-auto p-6 lg:w-[1000px]  lg:h-[170px] mx-auto rounded-xl md:flex lg:justify-around text-white relative -top-[85px]">
        <div className="my-auto leading-[35px] lg:text-[40px] text-[32px] md:w-[540px]">
          <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className="flex flex-col items-center justify-center my-auto text-center space-y-4 p-4">
          <input
            type="text"
            placeholder="Enter your text here"
            className="bg-white px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-white px-6 py-2 text-black font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex mt-12 flex-wrap">
        {/* Shop.co Section */}
        <div className="w-[220px]">
          <h1 className="font-bold text-lg">Shop.co</h1>
          <p className="text-sm mt-2">
            We have clothes that suit your style and that you’re proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-700 transition duration-300 text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-900 transition duration-300 text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-700 transition duration-300 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-900 transition duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex lg:ml-20 w-[850px] flex-wrap justify-between ">
          {/* Company Section */}
          <div className="m-4">
            <h1 className="font-bold text-lg">COMPANY</h1>
            <ul className="text-sm mt-2 space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="m-4">
            <h1 className="font-bold text-lg">HELP</h1>
            <ul className="text-sm mt-2 space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="m-4">
            <h1 className="font-bold text-lg">FAQ</h1>
            <ul className="text-sm mt-2 space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="m-4">
            <h1 className="font-bold text-lg">RESOURCES</h1>
            <ul className="text-sm mt-2 space-y-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-black mx-auto mt-8"></div>

        <div className="flex justify-between flex-wrap pt-10">
          <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
          <div className="flex pt-4">
            <img
              src="/badge (1).png"
              alt=""
              className="h-[30px] w-[46px] rounded-[5px]  border-[0.22px]"
            />
            <img
              src="/badge (2).png"
              alt=""
              className="h-[30px] w-[46px] rounded-[5px]  border-[0.22px]"
            />
            <img
              src="/badge (3).png"
              alt=""
              className="h-[30px] w-[46px] rounded-[5px]  border-[0.22px]"
            />
            <img
              src="/badge (4).png"
              alt=""
              className="h-[30px] w-[46px] rounded-[5px]  border-[0.22px]"
            />
            <img
              src="/badge.png"
              alt=""
              className="h-[30px] w-[46px] rounded-[5px]  border-[0.22px]"
            />
          </div>
        </div>
    </div>
  );
};

export default Footer;
