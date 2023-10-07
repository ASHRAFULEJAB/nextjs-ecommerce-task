import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <Link
          href={`/product/${product._id}`}
          className="no-underline shadow-lg p-5 hover:shadow-xl transition-all"
        >
          <Image src={product.image} width="500" height="500" alt="" />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h3 className="text-orange-500 text-2xl capitalize mt-4">
          {product.name}
        </h3>
        {/* <span className="text-[18px]">{product.category}</span> */}
        <span className="text-[#555]">${product.price}</span>
        <button  className="btn bg-orange-600 p-4 text-white" onClick={openModal}>View Details</button>
        {isModalOpen && (
          <ProductModal product={product} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default ProductItem;
