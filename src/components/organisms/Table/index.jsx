import React from "react";
import { Icon } from "../../atoms";

const data = [
  {
    Description: "UX/UI Design for mobile app",
    Qty: 1,
    Price: "1150.52$",
    Total: "1150.52$",
    "": "",
  },
  {
    Description: "UX/UI Design for Landing page",
    Qty: 1,
    Price: "550.53$",
    Total: "550.53$",
    "": "",
  },
  {
    Description: "Product Design for Landing page",
    Qty: 1,
    Price: "1150.52$",
    Total: "1150.52$",
    "": "",
  },
  {
    Description: "Branding for Landing page",
    Qty: 1,
    Price: "1150.52$	",
    Total: "1150.52$",
    "": "",
  },
];

// const TableHeaderCell = styled.th``;

export const Table = ({ }) => {
  return (
    <div className="overflow-x">
      <table className="bg-white rounded-xl w-full text-sm max-[500px]:text-base max-[700px]:text-sm">
        <thead>
          <tr className="text-left text-[#82878c]">
            {Object.keys(data[0]).map((val, key) => (
              <th key={key} className="pb-5 font-light pr-3.5 max-[500px]:pr-5 tbody-data-Price">
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key} className="">
              <td className="pb-5 pr-4 max-[500px]:pr-5">{val.Description}</td>
              <td className="pb-5 pr-4 max-[500px]:pr-5 text-center">{val.Qty}</td>
              <td className="pb-5 pr-4 max-[500px]:pr-5 min-[280px]:pr-5 min-[500px]:pr-3.5 min-[500px]:text-left min-[768px]:pr-3.5 min-[768px]:text-left">{val.Price}</td>
              <td className="pb-5 pr-4 max-[500px]:pr-5">{val.Total}</td>
              <td className="pb-5 pr-4 max-[500px]:pr-5 text-right">
                <Icon name="more" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
