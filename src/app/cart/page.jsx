'use client';

import CartItems from "./CartItems";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
const page = () => {
  const {cartItems, clearCart} = useCart()
  return (
    <section className="container">
      {/* cart header */}
      <section className="pt-[50px] flex flex-col gap-6">
        <div className="flex justify-between items-center shadow-md py-6 px-6 rounded">
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Action</p>
        </div>
        {/* cart items */}
        {cartItems.length === 0 ? <p>Cart Is Empty</p> : <CartItems />}

        {/*  */}
        <div className="flex justify-between mt-3">
          <Link href="/products">
            <button className="border text-blackShades-200 rounded px-7 py-2 md:px-12 md:py-4">
              Return To Shop
            </button>
          </Link>

          <button
            onClick={clearCart}
            className="border text-blackShades-200 rounded px-7 py-2 md:px-12 md:py-4"
          >
            Clear Cart
          </button>
        </div>
      </section>
      {/* cart footer */}
      <section className="flex justify-center md:justify-end mt-7">
        <div className="flex flex-col gap-3 border-[2px] text-black rounded p-3">
          <h2 className="font-medium text-xl">Cart Total</h2>
          <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <span>$200</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>Shiping:</p>
            <span>Free</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <span>$200</span>
          </div>
          <div>
            <button className="border-none bg-redShades-200 py-4 px-12 text-white-200 rounded text-left">
              Proccess to checkout
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
