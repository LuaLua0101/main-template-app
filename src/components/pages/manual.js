import React from "react";

const ManualPage = props => {
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
                      <li>
                        {/* Accordion on mobile  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu1SP"
                          aria-expanded="true"
                          aria-controls="menu1SP"
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                          Tìm xe
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu1"
                          aria-expanded="true"
                          aria-controls="menu1"
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                          Tìm xe
                        </a>
                        {/* Toggle content mobile  */}
                        <div className="d-block d-lg-none">
                          <div
                            className="collapse multi-collapse-menu-1 show "
                            id="menu1SP"
                          >
                            <img
                              src="./assets/images/laptop/manual-content.png"
                              alt="manual"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        {/* Accordion on mobile  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu2SP"
                          aria-expanded="false"
                          aria-controls="menu2SP"
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                          {" "}
                          Sử dụng điện thoại
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu2"
                          aria-expanded="false"
                          aria-controls="menu2"
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                          {" "}
                          Sử dụng điện thoại
                        </a>
                        <div className="d-block d-lg-none">
                          <div
                            className="collapse multi-collapse-menu-2 "
                            id="menu2SP"
                          >
                            <img
                              src="./assets/images/laptop/manual-content.png"
                              alt="manual"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu3SP"
                          aria-expanded="false"
                          aria-controls="menu3SP"
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                          Tự động nhận dạng
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu3"
                          aria-expanded="false"
                          aria-controls="menu3"
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                          Tự động nhận dạng
                        </a>
                        <div className="d-block d-lg-none">
                          <div
                            className="collapse multi-collapse-menu-3 "
                            id="menu3SP"
                          >
                            <img
                              src="./assets/images/laptop/manual-content.png"
                              alt="manual"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu4SP"
                          aria-expanded="false"
                          aria-controls="menu4SP"
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                          Chống dắt
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu4"
                          aria-expanded="false"
                          aria-controls="menu4"
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                          Chống dắt
                        </a>
                        <div className="d-block d-lg-none">
                          <div
                            className="collapse multi-collapse-menu-4 "
                            id="menu4SP"
                          >
                            <img
                              src="./assets/images/laptop/manual-content.png"
                              alt="manual"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu4SP"
                          aria-expanded="false"
                          aria-controls="menu4SP"
                          className="collapse-sub-menu d-block d-lg-none"
                        >
                          Chống cướp
                        </a>
                        {/* Accordion on laptop  */}
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#menu5"
                          aria-expanded="false"
                          aria-controls="menu5"
                          className="collapse-sub-menu d-none d-lg-block"
                        >
                          Chống cướp
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
                    </ul>
                  </div>
                </div>
              </div>
              {/* collapse on laptop, not visible on mobile */}
              <div className="col-12 col-lg-6 col-xl-6 d-none d-lg-block">
                <div
                  className="collapse show check-active default-active"
                  data-parent="#accordion"
                  id="menu1"
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
                <div
                  className="collapse check-active"
                  id="menu2"
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
                <div
                  className="collapse check-active"
                  id="menu3"
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
                <div
                  className="collapse check-active"
                  id="menu4"
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
                <div
                  className="collapse check-active"
                  id="menu5"
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManualPage;
