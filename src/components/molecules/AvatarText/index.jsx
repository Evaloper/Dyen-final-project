import React from "react";
import { Avatar, Text } from "../../atoms";

export const AvatarText = ({ src, text, className }) => {
  return (
    <div className="flex items-center profile-img-div">
      <Avatar src={src} className="w-7 h-7 rounded-full border-none" />
      <span
        className={className}
        style={{ fontWeight: 400, marginLeft: "10px" }}
      >
        {text}
      </span>
    </div>
  );
};
