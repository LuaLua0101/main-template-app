import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { SERVER } from "../../utils/constants";
import { Spin } from "antd";
import languages from "../../utils/languages";
const lang = languages("index");

const PressResourcesPage = props => {
  const [pressResources, setPressResources] = useState([]);
  const [loadButton, setLoadButton] = useState(true);

  const getData = () => {
    setLoadButton(true);
    axios
      .post("press-resources", { page: pressResources.length })
      .then(res => {
        const { press_resources } = res.data;
        setPressResources([...pressResources, ...press_resources]);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderPressResources = () => {
    return pressResources.map((item, index) => (
      <div className="col-12 col-md-12 col-lg-3 col-xl-3 ">
        <article className="article-box-2 article-box mb-15px ">
          <a href={item.url} rel="noopener noreferrer" target="_blank">
            {/* Title visible on mobile  */}
            <h3 className="d-block d-md-none">{item.title}</h3>
            {/* Details  */}
            <div className="article-detail row mx-0 ">
              <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                <div className="img-box">
                  <img
                    className="img-fluid thumbnail"
                    src={SERVER + "public/img/press-resource/" + item.cover}
                    alt="article"
                  />
                  {!item.is_image && (
                    <img
                      className="play-btn"
                      src="./assets/images/mobile/icons/icn-play.png"
                      alt="play"
                    />
                  )}
                </div>
              </div>
              <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                {/* Title visible on laptop  */}
                <h3 className="d-none d-md-block d-lg-block">{item.title}</h3>
                <p className="mb-0">{item.short_desc}</p>
                <div className="d-flex time-and-view align-items-center">
                  <time>{moment(item.created_at).format("MMMM D, YYYY")}</time>
                  <div className="view d-flex align-items-center">
                    <img
                      height={16}
                      src="./assets/images/mobile/icons/icn-eye-15.png"
                      alt="views"
                      className="img-fluid"
                    />
                    <span className="text-uppercase">{item.view_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    ));
  };

  return (
    <>
      <div>
        <section className="breadcum press-list-breadcum">
          <div className="container text-center">
            <h2 className="breadcum-title">Press resources</h2>
            <p className="d-block d-lg-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              illo assumenda fuga, fugiat animi atque laborum dicta error iste
              soluta!
            </p>
          </div>
        </section>
        {/* Press resources  */}
        <section className="press-resources">
          <div className="container">
            <div className="row align-items-center brands">
              <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/Logo-TechTimes-Vietnam.png"
                  alt="tinh te"
                />
              </div>
              <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/Logo_VTC.png"
                  alt="tinh te"
                />
              </div>
              <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/vnexpress.png"
                  alt="tinh te"
                />
              </div>
              <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/báo-giá-quảng-cáo-báo-tinhte.vn_.png"
                  alt="tinh te"
                />
              </div>
              <div className="col ">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/logo-chan-trang-24h.png"
                  alt="tinh te"
                />
              </div>
              <div className="col ">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/Zing-news.png"
                  alt="tinh te"
                />
              </div>
              <div className="col ">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/LOGO-DAN-TRI.png"
                  alt="tinh te"
                />
              </div>
              <div className="col ">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/GenK-1.png"
                  alt="tinh te"
                />
              </div>
              <div className="col ">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/Links/htv9-logo.png"
                  alt="tinh te"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr className="breadcum-line w-100 press-resource-line" />
        </div>
        <section className="press-list">
          <div className="container">
            <div className="row">
              {renderPressResources()}
              {loadButton ? (
                <div
                  className="text-uppercase mx-auto justify-content-center d-flex align-items-center view-more-articles"
                  style={{ cursor: "pointer" }}
                >
                  <Spin size="large" />
                </div>
              ) : (
                <div className="w-100">
                  <div
                    onClick={getData}
                    className="text-uppercase mx-auto justify-content-center d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="view-more-articles">
                      <span>{lang.viewmore}</span>
                      <span>
                        <img
                          src="./assets/images/mobile/icons/icn-arrow-down-techseries.png"
                          alt="next"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* End List articles  */}
          </div>
        </section>
      </div>
    </>
  );
};

export default PressResourcesPage;
