import React from "react";
import StarRating from "../../component/star/page";

const Section = () => {
  return (
    <div className="w-full h-[650px] pl-6">
      <h1 className="flex justify-center text-6xl pt-20 pb-20 font-bold text-black transition-transform duration-300 hover:scale-110">
        New Arrival
      </h1>

      <div className="flex flex-around space-x-4">
        <div className="transition-transform duration-300 hover:scale-110">
          <img src="/ta.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            T-SHIRT WITH TAPE DETAILS
          </h1>
          <StarRating rating={4.5} originalPrice={120} />
        </div>

        <div className="transition-transform duration-300 hover:scale-110">
          <img src="/tb.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            SKINNY FIT JEANS
          </h1>
          <StarRating rating={3.5} originalPrice={260} discountPercentage={20} />
        </div>

        <div className="hidden md:block transition-transform duration-300 hover:scale-110">
          <img src="/tc.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            CHECKERED SHIRT
          </h1>
          <StarRating rating={4.5} originalPrice={180} />
        </div>

        <div className="hidden lg:block transition-transform duration-300 hover:scale-110">
          <img src="/td.png" alt="" className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-110" />
          <h1 className="transition-transform duration-300 hover:scale-110">
            SLEEVE STRIPED T-SHIRT
          </h1>
          <StarRating rating={4.5} originalPrice={160} discountPercentage={30} />
        </div>
      </div>

      <div className="flex justify-center pt-7 pb-7">
        <h1 className="flex justify-center items-center border-[2px] w-[218px] text-[15px] rounded-full h-[52px] border-custom-black-alpha transition-transform duration-300 hover:scale-110">
          View All
        </h1>
      </div>
    </div>
  );
};

export default Section;
