import BannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto items-center ">
      <div>
        <h1 className="font-extrabold text-[60px] mb-4 leading-[1.1]">
             Build Your Ideal<br /><span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
  Development Stack
</span>
        </h1>
        <p className="mb-14 font-normal text-[18px]">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits
          your <br />
          next project.
        </p>
        <div className="flex mt-5 gap-3">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="btn btn-lg px-14 font-normal">Learn More</button>
        </div>
      </div>
      <img src={BannerImage} alt="An image of Tech Stack Illustration" />
    </div>
  );
};

export default Banner;
