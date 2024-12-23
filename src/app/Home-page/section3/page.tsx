import React from "react";
import StarRating from "../../component/star/page";

const Section3 = () => {
  return (
    <div className="w-full h-[650px] mx:auto">
      <h1 className="flex justify-center text-6xl pt-20 pb-20 font-bold text-black transition-transform duration-300 hover:scale-110">
        Top Selling
      </h1>
      <div className="flex justify-around space-x-4">
        <div className="transition-transform duration-300 hover:scale-110">
          <img src="/tdd.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            VERTICAL STRIPED SHIRT
          </h1>
          <StarRating rating={5} originalPrice={232} discountPercentage={20} />
        </div>
        <div className="transition-transform duration-300 hover:scale-110">
          <img src="/tcc.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            COURAGE GRAPHIC T-SHIRT
          </h1>
          <StarRating rating={4} originalPrice={145} />
        </div>
        <div className="hidden md:block transition-transform duration-300 hover:scale-110">
          <img src="/tbb.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            LOOSE FIT BERMUDA SHORTS
          </h1>
          <StarRating rating={3} originalPrice={80} />
        </div>
        <div className="hidden lg:block transition-transform duration-300 hover:scale-110">
          <img src="/taa.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            FADED SKINNY JEANS
          </h1>
          <StarRating rating={4.5} originalPrice={210} />
        </div>
      </div>
      <div className="flex justify-center pt-7">
        <h1 className="flex justify-center items-center border-[2px] w-[218px] text-[15px] rounded-full h-[52px] border-custom-black-alpha transition-transform duration-300 hover:scale-110">
          View All
        </h1>
      </div>
    </div>
  );
};

export default Section3;
