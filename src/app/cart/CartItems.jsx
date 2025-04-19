"use client";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

const CartItems = () => {
  const { cartItems, removeFromCart } = useCart();
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center shadow-md py-6 px-6 rounded"
        >
          <div className="flex gap-2">
            <Image src={item.images} width={50} height={50} alt={item.name} />
            {/* <p className="w-52">{item.name}</p> */}
          </div>
          <div>{item.price}</div>
          <div className="flex gap-3 items-center border text-blackShades-200 rounded p-2">
            <p>{item.quantity}</p>
            <div className="felx flex-col gap-3">
              <IoIosArrowUp className=" cursor-pointer" />
              <IoIosArrowDown className=" cursor-pointer" />
            </div>
          </div>
          <div>{item.price}</div>
          <div onClick={() => removeFromCart(item.id)}>
            <RiDeleteBin6Line className="text-xl cursor-pointer" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
