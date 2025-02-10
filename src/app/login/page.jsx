import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa6";

const Page = () => {
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
        <form className="flex flex-col gap-10">
          <input
            type="email"
            placeholder="Email"
            className="form-input outline-none pb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input outline-none pb-4"
          />
        </form>
        <div className="flex items-center gap-20">
          <button
            type="submit"
            className="text-center bg-redShades-200 rounded-md py-4 px-12 text-greyShades-300"
          >
            Log in
          </button>
          <Link href="#" className="text-redShades-200">
            Forget Password?
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page
