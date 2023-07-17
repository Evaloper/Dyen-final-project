import React from "react";
import { Header } from "../../organisms";
import { Icon, Image } from "../../atoms";
import "./index.scss";

export const Billing = () => {
  return (
    <div>
      <Header />
      <div className="billing-main">
        <div className="flex align-centered btm-header pt-20 pb-90">
          <div className="arrow-left">
            <Icon name="arrow-left" />
          </div>
          <p className="arrow-left-para">Back to invoice</p>
        </div>
        <div className="main-section flex space-between mr-25 ml-50">
          <div className="left-section">
            <div className="section1">
              <div className="flex space-between top-section ">
                <p className="top-section-para">
                  Invoice <span className="blue-num">#42D42-0001 </span><span className="small-font">for</span> $2250.65
                </p>
                <div className="flex align-centered copy-icon">
                    <Image name="copy-link"/>
                    <p>Copy link</p>
                </div>
              </div>
              <div className="top-section-para2">
                <span className="span-open-para">Open</span>
                <span className="space-due-para"> Due next month</span>
              </div>
              <div className="top-section-para3 flex">
                <button className="send-invoice-btn btn">Send Invoice</button>
                <button className="edit-invoice-btn btn">Edit Invoice</button>
                <button className="add-note-btn btn">Add note</button>

              </div>
            </div>
            <div className="section2"></div>
            <div className="section3"></div>
          </div>
          <div className="right-section">
            <div className="right-section1"></div>
            <div className="right-section2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
