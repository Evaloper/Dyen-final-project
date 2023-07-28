import React from "react";
import { Avatar, Text } from "../../atoms";
import "./index.scss";

export const AvatarText = ({ src, text, className }) => {
  return (
    <div className="flex align-centered profile-img-div">
      <Avatar src={src} className="profile-image" />
      <span
        className={className}
        style={{ fontWeight: 400, marginLeft: "10px" }}
      >
        {text}
      </span>
    </div>
  );
};
