import BannerImage from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between container mx-auto items-center gap-10 px-4">
      <div>
        <h1 className="font-extrabold text-[36px] md:text-[60px] mb-4 leading-[1.1] text-style text-center md:text-left">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mb-8 md:mb-14 font-normal text-[16px] md:text-[18px] text-[#475569] text-center md:text-left">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden md:block" /> compare them side by side, and put
          together the stack that fits your <br className="hidden md:block" />
          next project.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start mt-5 gap-3">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer">
            Explore Technologies
          </button>
          <button className="btn btn-lg btn-outline px-14 font-normal hover:bg-linear-to-r hover:from-[#F97316] hover:to-[#EC4899] hover:text-white hover:border-transparent transition">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={BannerImage}
        alt="An image of Tech Stack Illustration"
        className="max-w-full h-auto w-64 md:w-80 lg:w-auto"
      />
    </div>
  );
};

export default Banner;
