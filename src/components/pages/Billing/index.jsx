import React from "react";
import { Header } from "../../organisms";
import { Icon, Image } from "../../atoms";
import "./index.scss";
import { TextIcon } from "../../molecules/TextIcon";

export const Billing = () => {
  return (
    <div>
      <Header />
      <div className="billing-main">
        <div className="flex align-centered btm-header pt-20 pb-90">
          <div className="arrow-left">
            <Icon name="arrow-left" />
          </div>
          <p className="arrow-left-para">Back to invoices</p>
        </div>
        <div className="main-section space-between">
          <div className="left-section">
            <div className="section1">
              <div className="flex space-between top-section ">
                <h3 className="section1-header">
                  Invoice <span className="blue-num">#42D42-0001 </span>
                  <span className="small-font">for</span> $2250.65
                </h3>
                <div className="flex align-centered copy-icon">
                  <Image name="copy-link" />
                  <p>Copy link</p>
                </div>
              </div>
              <div className="section1-para">
                <span className="span-open-para">Open</span>
                <span className="span-due-para"> Due next month</span>
              </div>
              <div className="section1-para2 flex">
                <button className="send-invoice-btn btn">Send invoice</button>
                <button className="edit-invoice-btn btn">Edit invoice</button>
                <button className="add-note-btn btn">Add note</button>
              </div>
            </div>
            <div className="section2">
              <h3 className="section2-header">History</h3>
              <div>
                <div>
                  <TextIcon type="mail-txt" />
                </div>
                <div>
                  <TextIcon type="invoice-txt" />
                </div>
                <div>
                  <TextIcon type="invoice-txt2" />
                </div>
              </div>
            </div>
            <div className="section3 mt-25">
              <div className="flex space-between align-centered section3-div">
                <h3 className="section3-div-header">Items</h3>
                <div className="customize">
                  <TextIcon type="slider-txt" />
                </div>
              </div>
              <div>
                <table className="width-100">
                  <thead>
                    <tr className=" table-head align-left">
                      <th className="table-head-data">Description</th>
                      <th className="table-head-data qty align-right">QTY</th>
                      <th className="table-head-data tbody-data-price">
                        Price
                      </th>
                      <th className="table-head-data align-right tbody-data-amount">
                        Total amount
                      </th>
                      <th className="table-head-data"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-body body-data1 ">
                      <td className="table-body-data">
                        UX/UI Design for mobile app
                      </td>
                      <td className="table-body-data align-right">1</td>
                      <td className="table-body-data align-right tbody-data-price">
                        1150.52$
                      </td>
                      <td className="table-body-data align-right  tbody-data-amount">
                        1150.52$
                      </td>
                      <td className="table-body-data align-right">
                        <Icon name="more" />
                      </td>
                    </tr>
                    <tr className="table-body body-data2">
                      <td className="table-body-data">
                        UX/UI Design for Landing page
                      </td>
                      <td className="table-body-data align-right">1</td>
                      <td className="table-body-data align-right  tbody-data-price">
                        550.53$
                      </td>
                      <td className="table-body-data align-right tbody-data-amount">
                        550.53$
                      </td>
                      <td className="table-body-data align-right">
                        <Icon name="more" />
                      </td>
                    </tr>
                    <tr className="table-body body-data1 ">
                      <td className="table-body-data">
                        Product Design for mobile app
                      </td>
                      <td className="table-body-data align-right">1</td>
                      <td className="table-body-data align-right tbody-data-price">
                        1150.52$
                      </td>
                      <td className="table-body-data align-right tbody-data-amount">
                        1150.52$
                      </td>
                      <td className="table-body-data align-right">
                        <Icon name="more" />
                      </td>
                    </tr>
                    <tr className="table-body body-data2">
                      <td className="table-body-data">
                        Branding for Landing page
                      </td>
                      <td className="table-body-data align-right">1</td>
                      <td className="table-body-data align-right tbody-data-price">
                        550.53$
                      </td>
                      <td className="table-body-data align-right tbody-data-amount">
                        550.53$
                      </td>
                      <td className="table-body-data align-right">
                        <Icon name="more" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="right-section1">
              <div>
                <h3 className="right-section1-header">Details</h3>
                <div className="right-section-texticon">
                  <div>
                    <TextIcon type="profileImage-txt" />
                  </div>
                  <div>
                    <TextIcon type="envelope-txt" />
                  </div>
                  <div>
                    <TextIcon type="calendar-txt" />
                  </div>
                  <div>
                    <TextIcon type="hashtag-txt" />
                  </div>
                </div>
                <div className="btn-div">
                  <button className="invoice-btn">Invoice PDF</button>
                </div>
              </div>
            </div>
            <div className="right-section2">
              <div>
                <div className="number">24</div>
                <div className="div-after-number"></div>
                <h3 className="right-section2-header mt-20">Ask us</h3>
                <p className="mt-15">
                  If you have a question or encounter a problem, we can help you
                  anytime.
                </p>
                <div>
                  <button className="invoice-btn invoice-btn-right">Ask a question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
