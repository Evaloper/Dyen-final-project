import React from "react";
import { Logo, Icon } from "../../atoms";
import "./index.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="">
        <div className="top-header flex space-between align-centered ml-50 mr-50">
          <div className="logo flex space-between align-centered">
            <Logo />
            <div className="header-searchbar">
              <Icon name="search" />
            </div>
            <input type="text" placeholder="Search" className="inp-header" />
          </div>
          <div className="profile-section-header flex space-between align-centered">
            <div>
              <Icon name="notification" className="mr-20" />
            </div>
            <div>
              <Icon name="settings" className="mr-20" />
            </div>
            <div className="flex space-between align-centered">
              <div className="flex mr-10">
                <img
                  className="profile-img"
                  src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                />
              </div>
              <div className="mr-10">Taddy E.</div>
              <div>
                <Icon name="arrow-down" />
              </div>
            </div>
          </div>
        </div>
        <nav className="mt-20 mb-20 ml-50 mr-50">
          <a href="#" className="mr-20">
            Home
          </a>
          <a href="#" className="mr-20">
            Payments
          </a>
          <a href="#" className="current-page mr-20">
            Billings
          </a>
          <a href="#" className="mr-20">
            Balances
          </a>
          <a href="#" className="mr-20">
            Customers
          </a>
          <a href="#" className="mr-20">
            Products
          </a>
          <a href="#" className="mr-20">
            Reports
          </a>
        </nav>
        <div className="flex align-centered btm-header pt-20 pb-90 pl-50">
          <div className="arrow-left">
            <Icon name="arrow-left" />
          </div>
          <p>Back to invoice</p>
        </div>
      </div>
      {/* Next is to first make it responsive */}
    </div>
  );
};
