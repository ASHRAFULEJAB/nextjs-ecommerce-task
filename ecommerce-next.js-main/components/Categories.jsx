import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../public/assets/woman2.jpg";
import img2 from "../public/assets/headphones.jpg";
import img3 from "../public/assets/mancap.jpg";

const Categories = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-10/12">
        {/* title */}
        <h2 className="mb-8 text-3xl text-[#333]">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* category */}
          <Link href="/category/sunglasses">
            <div className="relative">
              <Image
                src={img1}
                alt=""
                className="h-[325px] w-full object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
                Rice
              </span>
            </div>
          </Link>
          {/* category */}
          <Link href="/category/headphones">
            <div className="relative">
              <Image
                src={img2}
                alt=""
                className="h-[325px] w-full object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
                Oil
              </span>
            </div>
          </Link>
          {/* category */}
          <Link href="/category/hat">
            <div className="relative">
              <Image
                src={img3}
                alt=""
                className="h-[325px] w-full object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
                Eggs
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
