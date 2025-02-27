import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Product = () => {
  return (
    <>
      <section className="pt-[80px]">
        <section className="flex gap-4">
          <div className="flex flex-col gap-5">
            <h1>Filters</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-52">
                {/* <div className="flex justify-between items-center"> */}
                <button className="flex justify-between items-center">
                  Brands Filter
                  <IoIosArrowUp />
                </button>
                {/* </div> */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Hp</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Dell</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Asus</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Lenovo</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-52">
                {/* <div className="flex justify-between items-center"> */}
                <button className="flex justify-between items-center">
                  Catigory Filter
                  <IoIosArrowUp />
                </button>
                {/* </div> */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Business Laptop</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Gaming Laptop</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Student Laptop</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>Products</h1>
            <div></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Product;
