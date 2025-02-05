"use client";
import FilterComponent from "../../component/filtercomponent/page";
import AllProduct from '@/app/all-products/page'

const MainComponent = () => {
  return (
    <div className="flex mx-auto lg:ml-[100px]">
      <FilterComponent />
      <AllProduct/>


    </div>
  );
};

export default MainComponent;
