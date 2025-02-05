"use client";


import Image from "next/image";

const Section4 = () => {
  return (
    <div className="lg:w-[1150px] mx-auto h-auto border-[20px] border-white rounded-[60px] lg:h-[866px] bg-[#F0F0F0] mt-[100px]">
      <h1 className="flex justify-center mx-auto pt-10 text-[32px] w-[246px] lg:w-[687px] h-[72px] lg:h-[58px] md:leading-[57px] leading-[36px] md:pt-10 md:pb-10 font-bold text-black transition-transform duration-300 hover:scale-110">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="m-6 p-4 mt-10">
        <div className="md:flex justify-center">
          <Image
            src="/4a.png"
            alt="Dress Style 1"
            width={310}
            height={289}
            className="m-3 transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/4b.png"
            alt="Dress Style 2"
            width={684}
            height={289}
            className="m-3 transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="md:flex justify-center">
          <Image
            src="/4c.png"
            alt="Dress Style 3"
            width={684}
            height={289}
            className="m-3 transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/4d.png"
            alt="Dress Style 4"
            width={310}
            height={289}
            className="m-3 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;



  









