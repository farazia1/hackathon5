import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#F2F0F1] lg:relative lg:mt-[24px]">
      {/* Main Content Container */}
      <div className="">
        {/* Title */}
        <h1 className="lg:absolute lg:top-[103px] pt-3 left-[100px] lg:w-[577px] w-[315px] xl:h-[173px] h-[93px] font-[Integral CF] font-bold text-[36px] leading-[34px] lg:text-[64px] m-4 lg:leading-[64px] transition-all duration-300 hover:text-blue-500">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        {/* Subtitle */}
        <p className="lg:absolute lg:top-[308px] left-[100px] lg:w-[545px] w-[358px] h-[50px] font-[satoshi] font-normal text-[16px] m-4 leading-[22px] transition-all duration-300 hover:text-gray-700">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* Button */}
        <button className="lg:absolute lg:top-[373px] lg:left-[100px] w-[358px] lg:w-[210px] h-[52px] bg-black text-white m-4 mt-[30px] rounded-[62px] flex items-center justify-center transition-all duration-300 hover:bg-gray-700">
          Shop Now
        </button>

        {/* Stats Section */}
        <div className="lg:absolute md:hidden lg:top-[473px] ml-[56px] flex lg:items-center justify-between lg:space-x-8">
          {/* International Brands */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold transition-all duration-300 hover:text-blue-500">200+</span>
            <span>International Brands</span>
          </div>
          <div className="border-l-2 h-12 mx-4"></div>

          {/* High-Quality Products */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold transition-all duration-300 hover:text-blue-500">2,000+</span>
            <span>High-Quality Products</span>
          </div>
          <div className="border-l-2 h-12 mx-4"></div>
        </div>

        {/* Happy Customers */}
        <div className="flex flex-col md:hidden items-center justify-center">
          <span className="text-xl font-bold transition-all duration-300 hover:text-blue-500">30,000+</span>
          <span>Happy Customers</span>
        </div>
      </div>

      {/* Image and Logo Section */}
      <div className="relative lg:w-full">
        <div className="relative flex lg:ml-[700px] w-[390px] lg:w-[557px] lg:h-[663px] transition-all duration-300 hover:scale-105">
          <img
            src="/bb (2).png"
            alt=""
            className="xl:h-[50px] absolute xl:w-[50px] h-[44px] w-[44px] my-[150px] xl:my-[200px] ml-[6px] transition-transform duration-300 hover:scale-110"
          />
          <img src="/assfour.jpeg" alt="" className="md:h-[663px]" />
          <img
            src="/bb (1).png"
            alt=""
            className="xl:h-[85px] xl:w-[85px] h-[76px] w-[76px] my-[70px] absolute ml-[297px] xl:my-[70px] xl:mx-[-70px] transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        {/* Bottom Logos */}
        <div className="flex absolute flex-wrap bottom-0 items-center justify-around h-[146px] w-full md:h-[122px] bg-black">
          <img src="/a.png" alt="" className="w-[100px] h-[23px] md:w-[150px] md:h-[33px] transition-transform duration-300 hover:scale-105" />
          <img src="/b.png" alt="" className="w-[100px] h-[23px] md:w-[150px] md:h-[33px] transition-transform duration-300 hover:scale-105" />
          <img src="/c.png" alt="" className="w-[100px] h-[23px] md:w-[150px] md:h-[33px] transition-transform duration-300 hover:scale-105" />
          <img src="/d.png" alt="" className="w-[100px] h-[23px] md:w-[150px] md:h-[33px] transition-transform duration-300 hover:scale-105" />
          <img src="/e.png" alt="" className="w-[100px] h-[23px] md:w-[150px] md:h-[33px] transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
