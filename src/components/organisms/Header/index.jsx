import React from "react";
import { Logo, Icon } from "../../atoms";
import "./index.css";

export const Header = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

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
            <div>
              <Icon name="notification" className="header-icon" />
            </div>
            <span className="number-of-notification"></span>
            <div className="settings-header">
              <Icon name="settings" className="header-icon" />
            </div>
            <div className="flex space-between align-centered">
              <div className="flex mr-10">
                <img
                  className="profile-img"
                  src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                />
              </div>
              <div className="mr-10 initials">Taddy E.</div>
              <div>
                <div onClick={openNav}>
                  <Icon name="arrow-down" />
                </div>
                <div id="myNav" className="overlay">
                  <div onClick={closeNav}>
                    <a href="javascript:void(0)" class="closebtn">
                      &times;
                    </a>
                  </div>
                  <div className="overlay-content">
                    <a href="#">Home</a>
                    <a href="#">Payments</a>
                    <a href="#">Billings</a>
                    <a href="#">Balances</a>
                    <a href="#">Customers</a>
                    <a href="#">Products</a>
                    <a href="#">Reports</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="mt-20 ml-50 mr-50 nav-section">
          <a href="#" className="mr-20">
            Home
          </a>
          <a href="#" className="mr-20">
            Payments
          </a>
          <a href="#" className="mr-20">
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
      </div>
    </div>
  );
};
