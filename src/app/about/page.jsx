import AboutHero from "./AboutHero";
import KeyMetrics from "./KeyMetrics";
import OurServices from "../Component/OurServices";

const page = () => {
  return (
    <div className="container mt-[90px] pb-20">
      <AboutHero />
      <KeyMetrics/>
      <OurServices/>
    </div>
  );
};

export default page;
