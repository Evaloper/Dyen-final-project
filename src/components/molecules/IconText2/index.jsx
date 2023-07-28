import React from "react";
import { Icon, Text } from "../../atoms";
import "./index.scss";

export const IconText2 = ({ name, text, className, text2 }) => {
  return (
    <div className={"flex align-centered mt-20"}>
      <div className="flex align-centered justify-centered text-icon">
        <Icon name={name} className={className} />
      </div>
      <div className="ml-20 txt-icon-para_date">
        <Text
          type={"p"}
          className={"txt-icon-para"}
          style={{ fontWeight: 400, marginLeft: "10px" }}
        >
          {text}
        </Text>
        <Text type={"p"} className={"txt-icon-date"}>
          {text2}
        </Text>
      </div>
    </div>
  );
};
