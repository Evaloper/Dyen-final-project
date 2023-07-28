import React from "react";
import "./index.scss";
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

export const Table = ({}) => {
  return (
    <div className="overflow-x">
      <table className="table">
        <thead>
          <tr className="table-head align-left">
            {Object.keys(data[0]).map((val, key) => (
              <th key={key} className="table-head-data tbody-data-Price">
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key} className="table-body body-data1">
              <td className="table-body-data">{val.Description}</td>
              <td className="table-body-data text-centered qty">{val.Qty}</td>
              <td className="table-body-data tbody-data-Price">{val.Price}</td>
              <td className="table-body-data tbody-data-amount">{val.Total}</td>
              <td className="table-body-data align-right">
                <Icon name="more" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
