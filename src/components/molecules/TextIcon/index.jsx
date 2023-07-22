import React from "react";
import { Icon } from "../../atoms";
import "./index.scss";

export const TextIcon = (props) => {
  if (props.type === "mail-txt") {
    return (
      <div className=" flex align-centered mt-20">
        <div className=" flex align-centered justify-centered text-icon">
          <Icon name="fill-white-mail" />
        </div>
        <div className="ml-20 txt-icon-para_date">
          <p className="txt-icon-para">
            Invoice was sent to cloudnew@gmail.com
          </p>
          <p className="txt-icon-date">Jul 2, 2023, 2:56 PM</p>
        </div>
      </div>
    );
  }

  if (props.type === "invoice-txt") {
    return (
      <div className="flex align-centered mt-20">
        <div className="flex align-centered justify-centered text-icon">
          <Icon name="invoice" />
        </div>
        <div className="ml-20 txt-icon-para_date">
          <p className="txt-icon-para">Invoice was finalized</p>
          <p className="txt-icon-date">Jul 2, 2023, 2:54 PM</p>
        </div>
      </div>
    );
  }

  if (props.type === "invoice-txt2") {
    return (
      <div className="flex align-centered mt-20">
        <div className="flex align-centered justify-centered text-icon">
          <Icon name="invoice" />
        </div>
        <div className="ml-20 txt-icon-para_date">
          <p className="txt-icon-para">
            Invoice was <span className="txt-primary-color">#42D42-0001</span>{" "}
            was created
          </p>
          <p className="txt-icon-date">Jul 2, 2023, 1:32 PM</p>
        </div>
      </div>
    );
  }

  if (props.type === "slider-txt") {
    return (
      <div className="flex align-centered">
        <div className="flex align-centered justify-centered slider-icon mr-5">
          <Icon name="slider" className="slider" />
        </div>
        <div className="slider-icon-div">
          <p className="slider-icon-para txt-primary-color">
            Customize columns
          </p>
        </div>
      </div>
    );
  }

  if (props.type === "profileImage-txt") {
    return (
      <div className="flex align-centered">
        <div className="flex align-centered justify-centered profile-img-div">
          <img
            className="profile-image"
            src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <p className="profile-img-para ml-10">Cloud Newton</p>
        </div>
      </div>
    );
  }

  if (props.type === "envelope-txt") {
    return (
      <div className="flex align-centered">
        <div className="flex align-centered justify-centered envelope-div mt-25">
          <Icon name="mail" />
          <p className="envelope-para ml-10">claudnew@gmail.com</p>
        </div>
      </div>
    );
  }

  if (props.type === "calendar-txt") {
    return (
      <div className="flex align-centered">
        <div className="flex align-centered justify-centered calendar-div mt-25">
          <Icon name="calendar" />
          <p className="calendar-para ml-10">Aug 5, 3:16 AM</p>
        </div>
      </div>
    );
  }

  if (props.type === "hashtag-txt") {
    return (
      <div className="flex align-centered">
        <div className="flex align-centered justify-centered hashtag-div mt-25">
          <Icon name="hashtag" />
          <p className="hashtag-para ml-10">#42D42-0001</p>
        </div>
      </div>
    );
  }

  return <div>null</div>;
};
