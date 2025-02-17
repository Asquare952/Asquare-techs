import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black to-blue-900 text-white-200 p-12">
      <div className="container flex flex-col-reverse gap-5 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">
            Power. Performance. Precision.
          </h1>
          <p>Upgrade to the best laptops and IT gadgets today.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Now →
          </button>
        </div>
        <div>
          <Image
            src="/Assets/hero-img 1.png"
            width={500}
            height={700}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
