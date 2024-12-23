"use client";
import FilterComponent from "../../component/filtercomponent/page";
import ProductListComponent from "../productlist/productlist";

const MainComponent = () => {
  return (
    <div className="flex mx-auto lg:ml-[100px]">
      <FilterComponent />
      <ProductListComponent />
    </div>
  );
};

export default MainComponent;
