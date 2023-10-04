import React, { useState } from "react";
import { useAuthContext } from "../../ctx/authContext";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const Login = () => {
  const [data, setData] = useState({});
  const { handleLogin } = useAuthContext();

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-[#21798B] h-screen w-screen flex justify-center items-center">
        {/* <h2 className="text-black text-3xl">
        Go Back to{" "}
        <u>
          <Link href="/">Home</Link>
        </u>
      </h2> */}
        <div className="h-[40vh] w-[20vw] border border-orange-600 rounded-xl">
          <h2 className="text-center mt-6 text-2xl text-[#efefef]">Login</h2>
          <form
            className="flex flex-col gap-6 items-center my-10"
            onSubmit={(e) => handleLogin(e, data)}
          >
            <input
              onChange={handleChange}
              className="pl-2 rounded-md placeholder:text-[15px]"
              type="email"
              name="email"
              placeholder="Email..."
            />
            <input
              onChange={handleChange}
              className="pl-2 rounded-md placeholder:text-[15px]"
              type="password"
              name="password"
              placeholder="Password..."
            />
            <button className="bg-white text-orange-400 px-6 py-2 mb-5 rounded-xl mt-10 transition-all hover:bg-[#efefef]">
              Submit
            </button>
          </form>
          <div>
            Don't have any account{" "}
            <u>
              <Link href="/register"> Register</Link>
            </u>
          </div>
          <h2 className="text-black text-3xl">
            Go Back to{" "}
            <u>
              <Link href="/">Home</Link>
            </u>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
