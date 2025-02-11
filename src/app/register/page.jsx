'use client'

import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const page = () => {
  const {
    register,
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
        <Link href="/">
          <FaArrowLeft />
        </Link>
        <div className="flex flex-col gap-6">
          <h3 className=" font-medium text-4xl ">Create an account</h3>
          <p className="font-normal text-base">Enter your details below</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
          noValidate
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="form-input outline-none pb-4"
          />
          {errors.name && <p className="text-red-800">{errors.name.message}</p>}
          <input
            {...register("email")}
            placeholder="Email"
            className="form-input outline-none pb-4"
          />
          {errors.email && (
            <p className="text-red-800">{errors.email.message}</p>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="form-input outline-none pb-4"
          />
          {errors.password && (
            <p className="text-red-800">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="text-center bg-redShades-200 rounded-md py-4 px-28 text-greyShades-300"
          >
            Create account
          </button>
        </form>

        <div className="flex flex-col items-center gap-6">
          <p>
            Already have account?{" "}
            <a href="/login" className="">
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
