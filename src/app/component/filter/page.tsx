"use client";
import FilterComponent from "../../component/filtercomponent/page";
// import ProductListComponent from "../productlist/productlist";
import AllProduct from '@/app/all-products/page'

const MainComponent = () => {
  return (
    <div className="flex mx-auto lg:ml-[100px]">
      <FilterComponent />
      {/* <ProductListComponent /> */}
      <AllProduct/>


    </div>
  );
};

export default MainComponent;
