import React from "react";

const Footer = () => {
  return (
    <footer className="h-full w-full flex justify-center mt-[10rem] pb-12">
      <div className="h-full w-10/12 grid grid-cols-3 justify-between">
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Contacts</h2>
          <span>27 Longview Court, Saint John,New Brunswick, Canada</span>
          <span>Email: hello@qwikit.ca</span>
          <span>Number: +1(416)8259900</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Privacy Policy</h2>
          <p>
            QwikIt aims to provide cutting-edge software solutions that cater to
            the specific needs of businesses and individuals within the Canadian
            market. The company's motive is to leverage technology to drive
            digital transformation, enhance productivity, and deliver innovative
            software products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
