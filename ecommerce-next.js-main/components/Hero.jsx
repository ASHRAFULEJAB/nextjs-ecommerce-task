import React from "react";
import Image from "next/image";
import woman_img from "../public/assets/womanimg.jpg";

const Hero = () => {
  return (
    <div className="h-[500px] w-full flex justify-center mt-16 mb-[20rem]">
      <div className="relative h-[500px] w-10/12 mx-auto">
        <Image
          className="h-[500px] w-full object-cover rounded-xl"
          src={woman_img}
          alt=""
        />
        <div className="absolute top-[15rem] left-[9.0rem] flex flex-col items-center gap-4">
          <span className="text-black text-4xl">
            Get some fresh <span className="text-orange-500">Vegtables</span>
          </span>
          <span className="text-black text-3xl">
            At a distance of a click
          </span>
          <button
            className="mt-6 bg-orange-500 text-[#efefef] px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-orange-600"
          >
            See now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
