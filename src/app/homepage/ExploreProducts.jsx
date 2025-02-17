"use client";

import { useState } from "react";
import { Products } from "../utils/productsData";
import Image from "next/image";

const ExploreProducts = () => {
  const [product, setProduct] = useState(Products);
  return (
    <>
      <section className="mt-10 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-redShades-200 w-5 h-10 rounded"></div>
            <p className="font-semibold text-base text-redShades-200">
              Our Products
            </p>
          </div>
          <h2 className="font-semibold text-xl lg:text-4xl">
            Explore Our Products
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.map((item) => {
            const { id, name, images, price } = item;
            return (
              <div key={id} className="flex flex-col gap-4">
                <div className=" relative bg-greyShades-400 min-h-32 rounded">
                  <div className=" absolute top-4 left-5">
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
                  <span className="font-medium text-base text-redShades-200">#{price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ExploreProducts;
