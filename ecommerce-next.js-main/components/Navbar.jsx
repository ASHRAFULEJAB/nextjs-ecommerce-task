import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthContext } from "../ctx/authContext";
import { useCartContext } from "../ctx/cartContext";
import Cart from "./Cart";
import ProductItem from "./ProductItem";
import { useRouter } from "next/router";
import ProductModal from "./ProductModal";
import Image from "next/image";
import Hero from "./Hero";

const Navbar = ({ products }) => {
  const { isCartOpen, toggleCart, cartItems } = useCartContext();
  const { user } = useAuthContext();
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Add state to manage responsive navigation menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // // State for the search query
  // const [searchQuery, setSearchQuery] = useState("");
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };
  // Function to handle search input change
  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredProducts);
  };
  // Access the Next.js router
  const router = useRouter();

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // This part is the same as the handleSearchChange function
    const query = searchQuery.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setSearchResults(filteredProducts);
  };

  
  return (
    <div className="relative bg-orange-500 text-[#efefef] py-2 px-6 lg:h-[60px] w-full z-50">
      <div className="lg:w-10/12 mx-auto flex justify-between items-center relative">
        {/* left */}
        <h2 className="text-3xl">
          <Link href="/">Qwik IT Grocery</Link>
        </h2>
        {/* center - Responsive Navigation Menu */}
        <div className="lg:hidden">
          <button
            className="text-[#efefef] text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden bg-orange-500 absolute inset-x-0 top-[60px] left-0 h-screen flex flex-col justify-center items-center text-[#efefef]`}
        >
          <li className="cursor-pointer transition-all hover:text-[#efefefe6] my-2">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="cursor-pointer transition-all hover:text-[#efefefe6] my-2">
            <Link href="/hero">Hero</Link>
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6] my-2">
            <Link href="/categories">Categories</Link>
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6] my-2">
            <Link href="/featured">Featured</Link>
          </li>
          <li className="cursor-pointer transition-all hover:text-[#efefefe6] my-2">
            <Link href="/contacts">Contacts</Link>
          </li> */}
          {/* Mobile Search */}
          <div className="flex items-center gap-4 my-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="bg-white px-2 py-1 rounded-lg flex items-center">
                <input
                  className="text-[#222] outline-none"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <AiOutlineSearch color="black" />
              </div>
            </form>
            <div className="relative">
              <AiOutlineShoppingCart size={25} onClick={toggleCart} />
              <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
                {cartItems?.length}
              </span>
              <div className="absolute top-4 -right-16 z-10">
                {isCartOpen && <Cart />}
              </div>
            </div>
          </div>
          {/* Mobile Login/Register */}
          <div className="flex flex-col items-center">
            <span>{user?.username}</span>
            <Link href="/login">
              <button className="bg-white text-black px-5 py-3 my-2 rounded-2xl">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-white text-black px-5 py-3 rounded-2xl">
                Register
              </button>
            </Link>
          </div>
        </ul>
        {/* right - Desktop */}
        <div className="lg:flex items-center gap-6 hidden">
          <form onSubmit={handleSearchSubmit}>
            <div className="bg-white px-2 py-1 rounded-lg flex items-center">
              <input
                className="text-[#222] outline-none"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <AiOutlineSearch color="black" />
            </div>
          </form>
          <div className="relative">
            <AiOutlineShoppingCart size={25} onClick={toggleCart} />
            <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
              {cartItems?.length}
            </span>
            <div className="absolute top-4 -right-16 z-10">
              {isCartOpen && <Cart />}
            </div>
          </div>
          <span>{user?.username}</span>
          <Link href="/login">
            <button className="bg-white text-black px-5 py-3 mr-3 rounded-2xl">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-white text-black px-5 py-3 rounded-2xl">
              Register
            </button>
          </Link>
        </div>
      </div>
      {/* Display search results */}
      {searchQuery && (
        <div className="mb-28">
          {searchResults.map((product) => (
            <div key={product.id}>
              {/* Render each search result here based on the data in 'searchResults' */}
              <div className="text-center  bg-slate-600">
                <div className="flex items-center justify-center flex-col gap-2">
                  <h3 className="text-orange-500 text-2xl capitalize mt-4">
                    {product.name}
                  </h3>
                  {/* <span className="text-[18px]">{product.category}</span> */}
                  <span className="text-orange-500">${product.price}</span>
                  <span>
                    <Image
                      src={product.image}
                      width="100"
                      height="100"
                      className="mb-16"
                      alt=""
                    />
                  </span>
                  {/* <button
                      className="btn bg-orange-600 p-4 text-white"
                      onClick={openModal}
                    >
                      View Details
                    </button>
                    {isModalOpen && (
                      <ProductModal product={product} closeModal={closeModal} />
                    )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
