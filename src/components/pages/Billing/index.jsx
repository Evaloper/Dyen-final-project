import React from "react";
import { Link } from "react-router-dom";
import { Icon, Text, Button } from "../../atoms";
import "./index.scss";
import { PageTemplate } from "../../templates/PageTemplate";
import { AvatarText, IconText, IconText2 } from "../../molecules";
import { Table } from "../../organisms/Table";

export const Billing = () => {
  return (
    <PageTemplate>
      <div className="billing-main">
        <div className="flex align-centered btm-header pt-20 pb-90">
          <div className="arrow-left">
            <Link to={"/"}>
              <Icon name="arrow-left" />
            </Link>
          </div>
          <Text className="arrow-left-para">Back to invoices</Text>
        </div>
        <div className="main-section space-between">
          <div className="left-section">
            <div className="section1">
              <div className="flex space-between top-section ">
                <Text type="h3" className="section1-header">
                  Invoice <span className="blue-num">#42D42-0001 </span>
                  <span className="small-font">for</span> $2250.65
                </Text>
                <div className="flex align-centered copy-icon">
                  <Icon name="copy-icon" className="link-icon" />
                  <p>Copy link</p>
                </div>
              </div>
              <div className="section1-para">
                <span className="span-open-para">Open</span>
                <span className="span-due-para"> Due next month</span>
              </div>
              <div className="section1-para2 flex">
                <a href="#">
                  <Button
                    className="send-invoice-btn btn"
                    text={"Send invoice"}
                  />
                </a>
                <a href="#">
                  <Button
                    className="edit-invoice-btn btn"
                    text={"Edit invoice"}
                  />
                </a>
                <a href="#">
                  <Button className="add-note-btn btn" text={"Add note"} />
                </a>
              </div>
            </div>
            <div className="section2">
              <Text className="section2-header" type={"h3"}>
                History
              </Text>
              <div>
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice was sent to cloudnew@gmail.com"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice was finalized"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
                <IconText2
                  name={"fill-white-mail"}
                  text={"Invoice #42D42-0001 was Created"}
                  text2={"Jul 2, 2023, 2:56 PM"}
                />
              </div>
            </div>
            <div className="section3 mt-25">
              <div className="flex space-between align-centered section3-div">
                <Text className="section3-div-header" type={"h3"}>
                  Items
                </Text>
                <div className="customize">
                  <IconText
                    name="slider"
                    className="slider slider-icon-para txt-primary-color"
                    text={"Customize columns"}
                  />
                </div>
              </div>
              <Table />
            </div>
          </div>
          <div className="right-section">
            <div className="right-section1">
              <div>
                <Text className="right-section1-header" type={"h3"}>
                  Details
                </Text>
                <div className="right-section-texticon">
                  <AvatarText
                    src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                    text="Cloud Newton"
                  />
                  <IconText name="mail" text="claudnew@gmail.com" />
                  <IconText name="calendar" text="Aug 5, 3:16 AM" />
                  <IconText name="hashtag" text="#42D42-0001" />
                </div>
                <div className="btn-div">
                  <a href="#">
                    <Button className="invoice-btn" text={"Invoice PDF"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-section2">
              <div>
                <div className="number">24</div>
                <div className="div-after-number"></div>
                <Text type="h3" className="right-section2-header mt-20">
                  Ask us
                </Text>
                <Text className="mt-15" type={"p"}>
                  If you have a question or encounter a problem, we can help you
                  anytime.
                </Text>
                <div>
                  <a href="#">
                    <Button
                      className="invoice-btn invoice-btn-right"
                      text={"Ask a question"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
