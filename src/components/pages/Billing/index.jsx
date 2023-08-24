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
      <div className="billing-main bg-off-white text-dark-blue">
        <div className="flex items-center pl-14 border-[#82878c30] border-t border-[#fffff26] bg-dark-blue pt-5 pb-24 max-[768px]:pl-6">
          <div className="flex justify-center text-center border-2 border-solid border-white rounded-full w-6 h-6 text-white">
            <Link to={"/"}>
              <Icon name="arrow-left" />
            </Link>
          </div>
          <Text className="ml-3.5 font-normal text-white">
            Back to invoices
          </Text>
        </div>
        <div className="flex relative bottom-14 mx-12 mr-5 justify-between max-[768px]:ml-6 max-[280px]:block max-[500px]:mx-5 max-[700px]:block">
          <div className="left-section w-4/6 mr-3.5 min-[280px]:w-full min-[700px]:w-full min">
            <div className="px-7 py-7 bg-white rounded-xl border border-solid border-[#0000000a] min-[280px]:px-7 min-[280px]:py-7 max-[700px]:px-7 max-[700px]:py-7 ">
              <div className="flex justify-between top-section ">
                <Text
                  type="h3"
                  className="text-xl font-semibold max-[500px]:text-base max-[768px]:text-lg"
                >
                  Invoice <span className="text-blue-grey">#42D42-0001 </span>
                  <span className="small-font font-medium text-sm text-[#797e82] min-[700px]:text-xs max-[768px]:text-xs">
                    for
                  </span>{" "}
                  $2250.65
                </Text>
                <div className="flex align-centered copy-icon text-blue-grey font-light max-[768px]:text-xs">
                  <Icon
                    name="copy-icon"
                    className="w-6 min-[700px]:w-4 max-[768px]:w-4"
                  />
                  <p className="ml-1 text-base">Copy link</p>
                </div>
              </div>
              <div className="py-2.5 font-medium text-[#212328c7] min-[500px]:pt-1 max-[280px]:pt-5 max-[300px]:pt-5 max-[700px]:pt-1  ">
                <span className="bg-off-blue text-xs  border-none rounded-xl py-1 px-2 mr-2.5 min-[500px]:text-xs max-[700px]:text-xs">
                  Open
                </span>
                <span className="text-xs min-[500px]:text-sm max-[700px]:text-sm">
                  {" "}
                  Due next month
                </span>
              </div>
              <div className="flex pt-4 min-[280px]:block min-[280px]:w-full max-[500px]:block max-[500px]:w-full min-[700px]:flex">
                <a href="#">
                  <Button
                    className="text-off-white bg-black mr-2.5 border-none rounded-lg max-[500px]:mr-0 max-[500px]:mb-5 max-[500px]:w-full max-[500px]:text-sm py-3 px-8 font-normal min-[500px]:text-xs max-[500px]:py-3.5 max-[500px]:px-5 max-[768px]:text-xs min-[500px]:py-3.5 min-[500px]:px-5 "
                    text={"Send invoice"}
                  />
                </a>
                <a href="#">
                  <Button
                    className="bg-white text-black border-2 border-solid border-[#82878c6e] mr-2.5 rounded-lg max-[500px]:mr-0 max-[500px]:mb-5 max-[500px]:w-full max-[500px]:text-sm py-3 px-8 font-normal min-[500px]:text-xs max-[500px]:py-3.5 max-[500px]:px-5 max-[768px]:text-xs min-[500px]:py-3.5 min-[500px]:px-5 "
                    text={"Edit invoice"}
                  />
                </a>
                <a href="#">
                  <Button
                    className="bg-white text-black border-2 border-solid border-[#82878c6e] mr-2.5 rounded-lg max-[500px]:mr-0 max-[500px]:mb-5 max-[500px]:w-full max-[500px]:text-sm py-3 px-8 font-normal min-[500px]:text-xs max-[500px]:py-3.5 max-[500px]:px-5 max-[768px]:text-xs min-[500px]:py-3.5 min-[500px]:px-5 "
                    text={"Add note"}
                  />
                </a>
              </div>
            </div>
            <div className="py-7 px-7 bg-white rounded-xl mt-6 border border-solid border-[#0000000a] max-[500px]:px-5">
              <Text
                className="text-xl font-semibold max-[500px]:text-xl max-[768px]:text-lg"
                type={"h3"}
              >
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
            <div className="py-7 px-7 bg-white rounded-xl border border-solid border-[#0000000a] max-[768px]:text-xs max-[500px]:py-7 max-[500px]:px-5 mt-6">
              <div className="flex space-between align-centered my-7 mr-4">
                <Text
                  className="text-xl font-semibold max-[500px]:text-xl max-[768px]:text-lg"
                  type={"h3"}
                >
                  Items
                </Text>
                <div className="font-light">
                  <IconText
                    name="slider"
                    className="slider slider-icon-para txt-primary-color text-base"
                    text={"Customize columns"}
                  />
                </div>
              </div>
              <Table />
            </div>
          </div>
          <div className="right-section mr-4 max-[500px]:block min-[701px]:block max-[700px]:flex max-[700px]:mt-6 max-[700px]:justify-between max-[768px]:mr-0">
            <div className="px-7 py-7 mr-1 bg-white rounded-xl border border-solid border-[#0000000a] max-[500px]:w-full max-[500px]:text-base max-[700px]:text-sm max-[700px]:w-1/2 max-[700px]w-full">
              <div>
                <Text
                  className="right-section1-header text-xl font-semibold max-[500px]:text-xl max-[768px]:text-lg"
                  type={"h3"}
                >
                  Details
                </Text>
                <div className="right-section-texticon">
                  <AvatarText
                    src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
                    text="Cloud Newton"
                  />
                  <IconText
                    name="mail"
                    text="claudnew@gmail.com"
                    className="mt-3"
                  />
                  <IconText
                    name="calendar"
                    text="Aug 5, 3:16 AM"
                    className="mt-3"
                  />
                  <IconText
                    name="hashtag"
                    text="#42D42-0001"
                    className="mt-3"
                  />
                </div>
                <div className="btn-div">
                  <a href="#">
                    <Button className="invoice-btn py-3.5 px-0 bg-blue-grey text-sm border-none rounded-xl text-center mt-6 text-white w-full" text={"Invoice PDF"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-section2 mt-6 ml-1 px-7 py-7 bg-white rounded-xl border border-solid border-[#0000000a] max-[500px]:text-base max-[500px]:w-full max-[500px]:mt-6 max-[700px]:text-sm max-[700px]:w-1/2 max-[700px]:mt-0 max-[700px]w-full">
              <div>
                <div className="number">24</div>
                <div className="div-after-number"></div>
                <Text
                  type="h3"
                  className="right-section2-header mt-20 text-xl font-semibold test-sm max-[500px]:text-xl max-[768px]:text-lg"
                >
                  Ask us
                </Text>
                <Text className="mt-15" type={"p"}>
                  If you have a question or encounter a problem, we can help you
                  anytime.
                </Text>
                <div>
                  <a href="#">
                    <Button
                      className="invoice-btn py-3.5 px-0 bg-blue-grey text-sm border-none rounded-xl text-center mt-6 text-white w-full min-[504px]:relative min-[504px]:top-6  min-[651px]:relative min-[651px]:top-12 min-[700px]:relative min-[700px]:top-0 invoice-btn-right"
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
