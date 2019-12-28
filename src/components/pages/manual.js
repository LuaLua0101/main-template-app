import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { SERVER } from "../../utils/constants";
import { Spin } from "antd";
import { app } from "firebase";

const ManualPage = props => {
  const [manuals, setManuals] = useState([]);
  const [loadButton, setLoadButton] = useState(true);

  const getData = () => {
    setLoadButton(true);
    axios
      .get("manuals")
      .then(res => {
        console.log(res.data)
        setManuals(res.data.manuals);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <section className="breadcum building-page-breadcum manual-breadcum">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <h2 className="breadcum-title">Manuals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque dolores, eveniet eius quae maxime, aliquid, nisi
                  voluptate repellat impedit cumque sapiente. Non ut nobis
                  officiis!
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <img
                  src="./assets/images/laptop/banner-manual.png"
                  className="img-fluid"
                  alt="manual"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line" />
        </div>
        {/* // Bread cum  */}
        {/* Menu content  */}
        <section className="product-menu-collapse">
          <div className="container">
            <div className="row" id="accordion">
              <div className="col-12 col-lg-6 col-xl-6">
                <button
                  className="btn btn-primary d-block collapse-btn mx-auto"
                  type="button"
                  data-toggle="collapse"
                  id="collapse-main-manual"
                  data-target="#collapseExample"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <div>
                    <span className="text-uppercase">Product</span>
                    <span className="pull-right">
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-down.png"
                        alt="toggle"
                        className="hidden-on-toggle"
                      />
                      <img
                        src="./assets/images/mobile/icons/arrow-up.png"
                        alt="up"
                        className="visible-on-toggle"
                      />
                    </span>
                  </div>
                </button>
                <div className="collapse show" id="collapseExample">
                  <div className="menu-items">
                    <ul className="text-center">
                      {manuals.map((item,index) => {return <li>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target={"#menu" + index}
                          aria-expanded="false"
                          aria-controls={"menu" + index}
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                     {item.name}
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target={"#menu" + index}
                          aria-expanded="false"
                          aria-controls={"menu" + index}
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                           {item.name}
                        </a>
                        <div className="d-block d-lg-none">
                          <div
                            className="collapse multi-collapse-menu-5"
                            id="menu5SP"
                          >
                            <img
                              src="./assets/images/laptop/manual-content.png"
                              alt="manual"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* collapse on laptop, not visible on mobile */}
              <div className="col-12 col-lg-6 col-xl-6 d-none d-lg-block">
              {manuals.map((item,index) => {return <div
                  className="collapse check-active"
                  id={"menu" + index}
                  data-parent="#accordion"
                >
                  <img
                    src="./assets/images/laptop/manual-content.png"
                    alt="manual"
                    className="img-fluid"
                  />
                  {/* Pagination  */}
                  <div className="press-list">
                    <div className="pagination mobile-pagination ">
                      <div className="d-flex justify-content-center w-100 align-items-center">
                        <span>
                          Page
                          <span className="active-page">1</span>
                          of 5
                        </span>
                        <nav>
                          <ul className="mb-0 px-0 d-flex">
                            <li className="btn-paginate">
                              <a href="#">
                                <img
                                  src="./assets/images/laptop/icn/prev.png"
                                  alt="prev"
                                />
                              </a>
                            </li>
                            <li className="btn-paginate">
                              <a href="#">
                                <img
                                  src="./assets/images/laptop/icn/next.png"
                                  alt="next"
                                />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManualPage;
