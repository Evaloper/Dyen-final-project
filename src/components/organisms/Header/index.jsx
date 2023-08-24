import React, { useState } from "react";
import { Logo, Icon } from "../../atoms";
import { Link } from "react-router-dom";
import "./index.css";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavState = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-dark-blue text-white pb-4">
      <div className="desktop-view">
        <div className="pt-5 mx-12  flex justify-between items-center max-[780px]:mx-5">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="ml-12 relative left-9 bottom-0.5 max-[780px]:ml-1.5 max-[610px]:hidden">
              <Icon name="search" />
            </div>
            <input type="text" placeholder="Search" className="w-60 h-9 border-none text-sm rounded-lg pl-9 bg-[#2c2f36] placeholder:text-grey max-[780px]:w-48 max-[610px]:hidden" />
          </div>
          <div className="flex justify-between items-center max-[300px]:ml-2.5">
            <Icon name="notification" className="mr-3.5 max-[500px]:mr-1 max-[780px]:mr-2.5" />
            <span className="w-1.5 h-1.5 rounded-full relative right-5 bottom-2 bg-red max-[780px]:right-4"></span>
            <div className="mr-5 max-[500px]:mr-2">
              <Icon name="settings" className="mr-3.5 max-[500px]:mr-1 max-[780px]:mr-2.5" />
            </div>
            <div className="flex space-between align-centered">
              <div className="flex mr-2.5">
                <img
                  className="w-10 h-10 rounded-full border-none max-[300px]:w-6 max-[300px]:h-6 max-[500px]:w-7 max-[500px]:h-7"
                  src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="Profile"
                />
              </div>
              <div className="mr-2.5 text-base font-light max-[610px]:hidden">Taddy E.</div>
              <div>
                <div onClick={handleNavState}>
                  <Icon name="arrow-down" />
                </div>
                {isNavOpen && (
                  <div id="myNav" className="hidden max-[610px]:block max-[610px]:w-full max-[610px]:h-full max-[610px]:fixed max-[610px]:z-30 max-[610px]:top-0 max-[610px]:left-0 max-[610px]:bg-dark-blue max-[610px]:overflow-x-hidden">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="closebtn absolute top-5 right-11 text-2xl"
                        onClick={handleNavState}
                      >
                        &times;
                      </a>
                    </div>
                    <div className="relative top-32 w-full text-center leading-loose">
                      <Link className="nav" to={"/"}>
                        Home
                      </Link>
                      <Link to={"/payments"} className="nav">
                        Payments
                      </Link>
                      <Link to={"/billing"} className="nav">
                        Billings
                      </Link>
                      <Link to={"/balances"} className="nav">
                        Balances
                      </Link>
                      <Link to={"/customers"} className="nav">
                        Customers
                      </Link>
                      <Link to={"/products"} className="nav">
                        Products
                      </Link>
                      <Link to={"/reports"} className="nav">
                        Reports
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <nav className="mt-5 mx-14 text-[#82878c] max-[780px]:ml-8 max-[780px]:mr-5 max-[610px]:hidden" >
          <Link to={"/"} className="nav mr-5">
            Home
          </Link>
          <Link to={"/payments"} className="nav mr-5">
            Payments
          </Link>
          <Link to={"/billing"} className="nav mr-5">
            Billings
          </Link>
          <Link to={"/balances"} className="nav mr-5">
            Balances
          </Link>
          <Link to={"/customers"} className="nav mr-5">
            Customers
          </Link>
          <Link to={"/Products"} className="nav mr-5">
            Products
          </Link>
          <Link to={"/Reports"} className="nav mr-5">
            Reports
          </Link>
        </nav>
      </div>
    </div>
  );
};
