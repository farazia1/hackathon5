import React from "react";
import Review from "../../component/reviews-cart/page"; // Adjust the import path
import StarRating from "../../component/star/page";
import TabNavigation from "@/app/component/tab-navigation/page";

const Allreviews = () => {
  return (
    <div>
      

      <TabNavigation />
      
      
      <div className="flex justify-center items-center h-[100px]">
        <div className="flex justify-center items-center pt-10 rounded-sm  w-[230px] text-center">
          <button className="px-4 py-2 w-[230px] h-[52px]  rounded-[62px] border-[1px] hover:bg-blue-600 transition">
            Load More Reviews
          </button>
        </div>
      </div>
      <div></div>
      <h1 className="flex justify-center">YOU MIGHT ALSO LIKE</h1>
      <div className="flex gap-5 pl-[40px]">
        <div>
          <img src="/Frame 32.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SKINNY FIT JEANS</h1>
          <StarRating
            rating={3.5}
            originalPrice={260}
            discountPercentage={20}
          />
        </div>
        <div>
          <img src="/Frame 33.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SKINNY FIT JEANS</h1>
          <StarRating
            rating={3.5}
            originalPrice={260}
            discountPercentage={20}
          />
        </div>
        <div>
          <img src="/Frame 34.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SKINNY FIT JEANS</h1>
          <StarRating
            rating={3.5}
            originalPrice={260}
            discountPercentage={20}
          />
        </div>
        <div>
          <img src="/Frame 38.png" alt="" className="h-[298px] w-[280px]" />
          <h1>SKINNY FIT JEANS</h1>
          <StarRating
            rating={3.5}
            originalPrice={260}
            discountPercentage={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Allreviews;
