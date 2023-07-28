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
    <div className="header pb-15">
      <div className="desktop-view">
        <div className="top-header flex space-between align-centered">
          <div className="logo flex space-between align-centered">
            <Logo />
            <div className="header-searchbar">
              <Icon name="search" className="search-icon" />
            </div>
            <input type="text" placeholder="Search" className="inp-header" />
          </div>
          <div className="profile-section-header flex space-between align-centered">
            <Icon name="notification" className="header-icon" />
            <span className="number-of-notification"></span>
            <div className="settings-header">
              <Icon name="settings" className="header-icon" />
            </div>
            <div className="flex space-between align-centered">
              <div className="flex mr-10">
                <img
                  className="profile-img"
                  src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="Profile"
                />
              </div>
              <div className="mr-10 initials">Taddy E.</div>
              <div>
                <div onClick={handleNavState}>
                  <Icon name="arrow-down" />
                </div>
                {isNavOpen && (
                  <div id="myNav" className="overlay">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="closebtn"
                        onClick={handleNavState}
                      >
                        &times;
                      </a>
                    </div>
                    <div className="overlay-content">
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
        <nav className="mt-20 ml-50 mr-50 nav-section">
          <Link to={"/"} className="nav mr-20">
            Home
          </Link>
          <Link to={"/payments"} className="nav mr-20">
            Payments
          </Link>
          <Link to={"/billing"} className="nav mr-20">
            Billings
          </Link>
          <Link to={"/balances"} className="nav mr-20">
            Balances
          </Link>
          <Link to={"/customers"} className="nav mr-20">
            Customers
          </Link>
          <Link to={"/Products"} className="nav mr-20">
            Products
          </Link>
          <Link to={"/Reports"} className="nav mr-20">
            Reports
          </Link>
        </nav>
      </div>
    </div>
  );
};
