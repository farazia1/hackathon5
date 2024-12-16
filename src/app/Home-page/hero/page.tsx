import React from "react";

const Hero = () => {
  return (
    <div className=" w-full h-auto  bg-[#F2F0F1] relative mt-[24px]">
      {/* Main Content Container */}
      <div className="">
        {/* Title */}
        <h1 className="absolute top-[103px] left-[100px] w-[577px] h-[173px] font-[Integral CF] text-[64px] font-bold leading-[64px] text-left">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        {/* Subtitle */}
        <p className="absolute top-[308px] left-[100px] w-[545px] h-[33px] font-[satoshi] font-normal text-[16px] leading-[22px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* Button */}
        <button className="absolute top-[373px] left-[100px] w-[210px] h-[52px] bg-black text-white rounded-[62px] flex items-center justify-center">
          Shop Now
        </button>

        {/* Stats Section */}
        <div className="absolute top-[473px] left-[100px] flex items-center space-x-8">
          {/* International Brands */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">200+</span>
            <span>International Brands</span>
          </div>
          <div className="border-l-2 h-12 mx-4"></div>

          {/* High-Quality Products */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">2,000+</span>
            <span>High-Quality Products</span>
          </div>
          <div className="border-l-2 h-12 mx-4"></div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">30,000+</span>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="flex ml-[700px] w-[557px] h-[663px] ">
        <img src="/bb (2).png" alt="" className="h-[50px] w-[50px] my-[200px] mx-[]" />
        <img src="/assfour.jpeg" alt="" className="h-[663px]" />
        <img src="/bb (1).png" alt="" className="h-[85px] w-[85px] my-[70px] mx-[-70px]"/>
      </div>
      <div className="flex items-center justify-around w-full h-[122px] bg-black ">
        <img src="/a.png" alt="" className="w-[150px] h-[33px]"/>
        <img src="/b.png" alt="" className="w-[150px] h-[33px]"/>
        <img src="/c.png" alt="" className="w-[150px] h-[33px]"/>
        <img src="/d.png" alt="" className="w-[150px] h-[33px]"/>
        <img src="/e.png" alt="" className="w-[150px] h-[33px]"/>
      </div>
    </div>
  );
};

export default Hero;
