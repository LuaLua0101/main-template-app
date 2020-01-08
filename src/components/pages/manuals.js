import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { SERVER } from "../../utils/constants";
import languages from "../../utils/languages";
const lang = languages("index");

const ManualPage = props => {
  const [manuals, setManuals] = useState([]);
  const [banner, setBanner] = useState();
  const [current, setCurrent] = useState(0);
  const [subCurrent, setSubCurrent] = useState(0);
  const [loadButton, setLoadButton] = useState(true);

  const getData = () => {
    setLoadButton(true);
    axios
      .get("manuals")
      .then(res => {
        console.log(res.data);
        setManuals(res.data.manuals);
        setBanner(res.data.banner);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const prev = () => {
    subCurrent > 0 && setSubCurrent(subCurrent - 1);
  };

  const next = max => {
    subCurrent + 1 < max && setSubCurrent(subCurrent + 1);
  };

  return (
    <>
      <div>
        <section className="breadcum building-page-breadcum manual-breadcum">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <h2 className="breadcum-title">Manuals</h2>
                <p>{banner && banner.title}</p>
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
      </div>
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
                  <span className="text-uppercase">{lang.product}</span>
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
                    {manuals &&
                      manuals.map((item, index) => {
                        return (
                          <li key={index}>
                            <div
                              onClick={() => {
                                setCurrent(index);
                                setSubCurrent(0);
                              }}
                            >
                              <a
                                href="#"
                                data-toggle="collapse"
                                data-target={"#menu" + index}
                                aria-expanded={
                                  index === current ? "true" : "false"
                                }
                                aria-controls={"menu" + index}
                                className="collapse-sub-menu d-block d-lg-none"
                              >
                                {item.name}
                              </a>
                              <a
                                href="#"
                                data-toggle="collapse"
                                data-target={"#menu" + index}
                                aria-expanded={
                                  index === current ? "true" : "false"
                                }
                                aria-controls={"menu" + index}
                                className="collapse-sub-menu d-none d-lg-block"
                              >
                                {item.name}
                              </a>
                            </div>
                            <div className="d-block d-lg-none">
                              <div
                                className={
                                  index === current
                                    ? "collapse multi-collapse-menu-1 show"
                                    : "collapse multi-collapse-menu-1"
                                }
                                id={"menu" + index}
                              >
                                {item.list[subCurrent] && (
                                  <img
                                    src={
                                      SERVER +
                                      "public/img/Manual/" +
                                      item.list[subCurrent].cover
                                    }
                                    alt="manual"
                                    className="img-fluid"
                                  />
                                )}
                                <div className="press-list">
                                  <div className="pagination mobile-pagination ">
                                    <div className="d-flex justify-content-center w-100 align-items-center">
                                      <span>
                                        {lang.page}
                                        <span className="active-page">
                                          {subCurrent + 1}
                                        </span>
                                        of {item.list.length}
                                      </span>
                                      <nav>
                                        <ul className="mb-0 px-0 d-flex">
                                          <li className="btn-paginate">
                                            <div
                                              style={{ cursor: "pointer" }}
                                              onClick={prev}
                                            >
                                              <img
                                                src="./assets/images/laptop/icn/prev.png"
                                                alt="prev"
                                              />
                                            </div>
                                          </li>
                                          <li className="btn-paginate">
                                            <div
                                              style={{ cursor: "pointer" }}
                                              onClick={() =>
                                                next(item.list.length)
                                              }
                                            >
                                              <img
                                                src="./assets/images/laptop/icn/next.png"
                                                alt="next"
                                              />
                                            </div>
                                          </li>
                                        </ul>
                                      </nav>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 d-none d-lg-block">
              {manuals && manuals[current] && (
                <div
                  className="collapse show check-active default-active"
                  data-parent="#accordion"
                  id="menu1"
                >
                  {manuals[current].list[subCurrent] && (
                    <img
                      src={
                        SERVER +
                        "public/img/Manual/" +
                        manuals[current].list[subCurrent].cover
                      }
                      alt="manual"
                      className="img-fluid"
                    />
                  )}
                  <div className="press-list">
                    <div className="pagination mobile-pagination ">
                      <div className="d-flex justify-content-center w-100 align-items-center">
                        <span>
                          {lang.page}
                          <span className="active-page">{subCurrent + 1}</span>
                          of {manuals[current].list.length}
                        </span>
                        <nav>
                          <ul className="mb-0 px-0 d-flex">
                            <li className="btn-paginate">
                              <div style={{ cursor: "pointer" }} onClick={prev}>
                                <img
                                  src="./assets/images/laptop/icn/prev.png"
                                  alt="prev"
                                />
                              </div>
                            </li>
                            <li className="btn-paginate">
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  next(manuals[current].list.length)
                                }
                              >
                                <img
                                  src="./assets/images/laptop/icn/next.png"
                                  alt="next"
                                />
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManualPage;
