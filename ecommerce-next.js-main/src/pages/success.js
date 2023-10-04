import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <>
      {" "}
      <div className="text-center mt-12 text-3xl">
        You have successfully payed with card!
      </div>
      <Link href='/'>Go Back</Link>
    </>
  );
};

export default Success;
