import React from "react";
import StarRating from "../../component/star/page";

const Section = () => {
  return (
    <div className="w-full h-[650px]">
      <h1 className="flex justify-center text-6xl pt-20 pb-20 font-bold text-black">
        New Arrival
      </h1>
      <div className="flex justify-around space-x-4">
        {" "}
        <div>
          <img src="/ta.png" alt="" className="h-[298px] w-[280px]" />
          <h1>T-SHIRT WITH TAPE DETAILS</h1>
          <StarRating rating={4.5} originalPrice={120} />
        </div>
        <div>
          <img src="/tb.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SKINNY FIT JEANS</h1>
          <StarRating
            rating={3.5}
            originalPrice={260}
            discountPercentage={20}
          />
        </div>
        <div>
          <img src="/tc.png" alt="" className="h-[298px] w-[280px]" />
          <h1>CHECKERED SHIRT</h1>
          <StarRating rating={4.5} originalPrice={180} />
        </div>
        <div>
          <img src="/td.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SLEEVE STRIPED T-SHIRT</h1>
          <StarRating
            rating={4.5}
            originalPrice={160}
            discountPercentage={30}
          />
        </div>
      </div>
      <div className="flex justify-center pt-7 pb-7">
        <h1 className="   flex justify-center items-center border-[2px] w-[218px] text-[15px]  rounded-full h-[52px] border-custom-black-alpha">
          View All
        </h1>
      </div>
    </div>
  );
};

export default Section;
