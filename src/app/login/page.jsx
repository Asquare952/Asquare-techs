'use client'

import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Page = () => {
  const {
      login,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
  
    const onSubmit = (data) => console.log("User Data:", data);
  return (
    <section className="flex items-center gap-32 mt-14">
      <div className="bg-blueShades-200 hidden 2xl:block">
        <Image
          src="/Assets/signup-page-img.png"
          alt=""
          width={710}
          height={706}
        />
      </div>
      <div className="flex flex-col gap-12 form">
        <Link href="/register">
          <FaArrowLeft />
        </Link>
        <div className="flex flex-col gap-6">
          <h3 className=" font-medium text-4xl ">Log in to Asquarez Tech</h3>
          <p className="font-normal text-base">Enter your details below</p>
        </div>
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="Email"
            className="form-input outline-none pb-4"
            {...login("email")}
          />
          {errors.email && (
            <p className="text-red-800">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="form-input outline-none pb-4"
            {...login("password")}
          />

          <button
            type="submit"
            className="text-center bg-redShades-200 rounded-md py-4 px-12 text-greyShades-300"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center gap-20">
          <Link href="#" className="text-redShades-200">
            Forget Password?
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page
