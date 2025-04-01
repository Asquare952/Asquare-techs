"use client";

import Image from "next/image";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Products } from "../utils/productsData";
import { useState } from "react";

const Product = () => {
  const [product, setProduct] = useState(Products);
  const [filterVisibility, setFilterVisibility] = useState({
    brands: true,
    categories: true,
    // price: true,
    // ratings: true,
  });

  const toggleFilter = (filterName) => {
    setFilterVisibility((prev) => ({
      ...prev,
      [filterName]: !prev[filterName], // Toggle the specific filter
    }));
  };
  return (
    <>
      <section className="pt-[30px]">
        <section className="flex gap-6">
          <div className="hidden md:flex md:flex-col gap-5">
            <h1>Filters</h1>
            <div className="flex flex-col gap-4">
              <div
                className={
                  filterVisibility.brands
                    ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-52"
                    : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-12"
                }
              >
                <button
                  className="flex justify-between items-center"
                  onClick={() => toggleFilter("brands")}
                >
                  Brands Filter
                  {filterVisibility.brands ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                {/* </div> */}
                {filterVisibility.brands && (
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
                )}
              </div>
              {/*  */}
              <div
                className={
                  filterVisibility.categories
                    ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-52"
                    : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-12"
                }
              >
                <button
                  className="flex justify-between items-center"
                  onClick={() => toggleFilter("categories")}
                >
                  Catigory Filter
                  {filterVisibility.categories ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                {filterVisibility.categories && (
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
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="pb-6 flex justify-between items-center">
              <h1>Products</h1>
              <button className="flex gap-4 items-center md:hidden border text-greyShades-400 rounded p-2 py-1 px-5">
                <span className=" text-blackShades-200">Filter</span>
                <IoFilterOutline className=" text-blackShades-200" />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {product.map((item) => {
                const { id, name, images, price } = item;
                return (
                  <div key={id} className="flex flex-col gap-4">
                    <div className=" relative  bg-greyShades-400  rounded">
                      <div className="">
                        <Image
                          src={images}
                          width={120}
                          height={180}
                          alt={name}
                          className=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-base ">{name}</p>
                      <span className="font-medium text-base text-redShades-200">
                        #{price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Product;
