"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Products } from "../utils/productsData";
import { IoMdClose } from "react-icons/io";

const Modal = ({ openModal, toggleModal }) => {
  const [product, setProduct] = useState(Products);
  const [filters, setFilters] = useState({ brand: [], category: [] });
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

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  useEffect(() => {
    if (filters.brand.length === 0 && filters.category.length === 0) {
      setProduct(Products); // Show all products if no filters are applied
      return;
    }

    const filtered = product.filter(
      (product) =>
        (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
        (filters.category.length === 0 ||
          filters.category.includes(product.category))
    );

    setProduct(filtered);
  }, [filters]);

  const clearFilters = () => {
    setFilters({ brand: [], category: [] });
    setProduct(Products);
  };

  return (
    <section className={openModal ? "modalOverlay container" : ""}>
      <div className="flex flex-col gap-5 mt-24">
        <div className="flex justify-between">
          <h1>Filters</h1>
          <IoMdClose className=" text-2xl" onClick={toggleModal} />
        </div>
        <div>
          <button
            className="border-none bg-redShades-200 py-4 px-12 text-white-200 rounded text-left"
            onClick={clearFilters}
          >
            Clear All Filters
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className={
              filterVisibility.brands
                ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-70 h-60 rounded"
                : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-70 h-12 rounded"
            }
          >
            <button
              className="flex justify-between items-center"
              onClick={() => toggleFilter("brands")}
            >
              Brands Filter
              {filterVisibility.brands ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* </div> */}
            {filterVisibility.brands && (
              <div className="flex flex-col gap-4">
                {["Dell", "HP", "Lenovo", "Asus"].map((brand) => (
                  <label key={brand}>
                    <input
                      type="checkbox"
                      value={brand}
                      checked={filters.brand.includes(brand)} // Ensure React tracks state
                      onChange={() => handleFilterChange("brand", brand)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            )}
          </div>
          {/*  */}
          <div
            className={
              filterVisibility.categories
                ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-70 h-52 rounded"
                : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-70 h-12 rounded"
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
              <div className="flex flex-col gap-4">
                {["Business", "Gaming", "Student"].map((category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      value={category}
                      checked={filters.category.includes(category)}
                      onChange={() => handleFilterChange("category", category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
