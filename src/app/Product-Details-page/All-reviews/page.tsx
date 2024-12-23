import React from "react";
import StarRating from "../../component/star/page";
import TabNavigation from "@/app/component/tab-navigation/page";

const Allreviews = () => {
  return (
    <div>
      <TabNavigation />

      {/* Load More Reviews Button */}
      <div className="flex justify-center items-center h-[100px]">
        <div className="flex justify-center items-center pt-10 rounded-sm w-[230px] text-center">
          <button className="px-4 py-2 w-[230px] h-[52px] rounded-[62px] border-[1px] hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Recommendations Section */}
      <h1 className="flex justify-center text-lg font-semibold mt-6 transition-transform duration-300 hover:scale-105">
        YOU MIGHT ALSO LIKE
      </h1>
      <div className="flex gap-5 pl-[40px]">
        {[
          { src: "/Frame 32.png", label: "SKINNY FIT JEANS" },
          { src: "/Frame 33.png", label: "SKINNY FIT JEANS", hidden: "md" },
          { src: "/Frame 34.png", label: "SKINNY FIT JEANS", hidden: "lg" },
          { src: "/Frame 38.png", label: "SKINNY FIT JEANS" },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.hidden ? `hidden ${item.hidden}:block` : ""}`}
          >
            <img
              src={item.src}
              alt={item.label}
              className="h-[298px] w-[280px] transition-transform duration-300 hover:scale-105"
            />
            <h1 className="mt-2 text-center transition-transform duration-300 hover:scale-105">
              {item.label}
            </h1>
            <StarRating
              rating={3.5}
              originalPrice={260}
              discountPercentage={20}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allreviews;
