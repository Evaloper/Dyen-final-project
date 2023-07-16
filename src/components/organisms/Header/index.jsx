import React from "react";
import { Logo, Icon } from "../../atoms";
import "./index.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="ml-50 mr-50">
        <div className="top-header flex space-between align-centered">
          <div className="logo flex space-between align-centered">
            <Logo />
            <div className="header-searchbar">
              <Icon name="search" />
            </div>
            <input type="text" placeholder="Search" className="inp-header" />
          </div>
          <div className="profile-section-header flex space-between align-centered">
            <div>
              <Icon name="notification" className="mr-20"/>
            </div>
            <div>
              <Icon name="settings" className="mr-20"/>
            </div>
            <div className="flex space-between align-centered">
              <div className="flex mr-10">
                <img className="profile-img" src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"/>
              </div>
              <div className="mr-10">Taddy E.</div>
              <div>
                <Icon name="arrow-down" />
              </div>
            </div>
          </div>
        </div>
        <div>NavBar</div>
        <div>Back to Invoice</div>
      </div>
    </div>
  );
};
