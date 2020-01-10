import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { SERVER } from "../../utils/constants";
import { Spin, Icon } from "antd";
import renderHTML from "react-render-html";
import languages from "../../utils/languages";
const lang = languages("index");

const CLASSNAME_ACTIVE =
  "box-version active d-flex align-items-center justify-content-center";
const CLASSNAME =
  "box-version d-flex align-items-center justify-content-center";

const ApplicationPage = props => {
  const [application, setApplication] = useState();
  const [appRelated, setAppRelated] = useState([]);
  const [bannerNewUpdate, setBannerNewUpdate] = useState();
  const [bannerApp, setBannerApp] = useState();
  const [loadButton, setLoadButton] = useState(true);
  const [more, setMore] = useState(false);
  const [current, setCurrent] = useState(1);

  const getData = () => {
    setLoadButton(true);
    axios
      .get("applications")
      .then(res => {
        console.log(res.data);
        setApplication(res.data.application);
        setAppRelated(res.data.related);
        setBannerNewUpdate(res.data.banner_new);
        setBannerApp(res.data.banner_app);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {/* Application  */}
        <section className="application application-intro">
          <div className="container">
            <div className="application-content">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                  <img
                    className="img-fluid"
                    src="./assets/images/laptop/feature-img/img-app.png"
                    alt=""
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                  <div className="card">
                    <div className="card-body pb-0">
                      <h4
                        className="card-title"
                        style={{ fontFamily: "Geomanist Regular" }}
                      >
                        {bannerNewUpdate && bannerNewUpdate.title}
                      </h4>
                      <p
                        className="card-text"
                        style={{ fontFamily: "Geomanist Regular" }}
                      >
                        {bannerNewUpdate && bannerNewUpdate.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End application  */}
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line w-100" />
        </div>
        {/* Latest update  */}
        <section className="application-latest-updates">
          <div className="container">
            <h2
              className="font-weight-bold text-center center-sp-heading mobile-sub-heading"
              style={{ fontFamily: "Geomanist Regular" }}
            >
              {lang.latest}
            </h2>
            <p
              className="d-none d-lg-block text-center sub-title"
              style={{ fontFamily: "Geomanist Regular" }}
            >
              {bannerApp && bannerApp.title}
            </p>
            {/* 1 ITEM / ROW  */}

            {application &&
              application.feature1_title &&
              application.feature1_desc && (
                <>
                  <div className="row update-block">
                    <div className="col-12 col-xl-9">
                      <div className="d-none d-lg-block">
                        <h3
                          className="font-weight-bold"
                          style={{ fontFamily: "Geomanist Book" }}
                        >
                          {application.feature1_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application.feature1_desc}
                        </p>
                      </div>
                      {/* Note. Paragraph intro laptop was longer  so this will be display in mobile */}
                      <p
                        className="d-block d-lg-none"
                        style={{ fontFamily: "Geomanist Regular" }}
                      >
                        {bannerApp && bannerApp.title}
                      </p>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src={
                          SERVER +
                          "public/img/applications/" +
                          application.feature1_cover
                        }
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3 style={{ fontFamily: "Geomanist Book" }}>
                          {application.feature1_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application.feature1_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            {/* 1 ITEM / ROW  */}
            {application &&
              application.feature2_title &&
              application.feature2_desc && (
                <>
                  <div className="row update-block">
                    <div className="col-12 col-xl-9">
                      <div className="d-none d-lg-block">
                        <h3
                          className="font-weight-bold"
                          style={{ fontFamily: "Geomanist Book" }}
                        >
                          {application && application.feature2_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application && application.feature2_desc}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src={
                          SERVER +
                          "public/img/applications/" +
                          application.feature2_cover
                        }
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3 style={{ fontFamily: "Geomanist Book" }}>
                          {application && application.feature2_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application && application.feature2_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            {/* 1 ITEM / ROW  */}
            {application &&
              application.feature3_title &&
              application.feature3_desc && (
                <>
                  <div className="row update-block">
                    <div className="col-12 col-xl-9">
                      <div className="d-none d-lg-block">
                        <h3
                          className="font-weight-bold"
                          style={{ fontFamily: "Geomanist Book" }}
                        >
                          {application && application.feature3_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application && application.feature3_desc}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src={
                          SERVER +
                          "public/img/applications/" +
                          application.feature3_cover
                        }
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3 style={{ fontFamily: "Geomanist Book" }}>
                          {application && application.feature2_title}
                        </h3>
                        <p style={{ fontFamily: "Geomanist Regular" }}>
                          {application && application.feature3_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            <div
              className="text-uppercase mx-auto justify-content-center d-flex align-items-center view-more-articles"
              style={{ cursor: "pointer" }}
              onClick={() => setMore(!more)}
            >
              <span>{lang.viewmore}</span>
              <Icon type={more ? "up" : "down"} />
            </div>
            <br />
            {more && (
              <div className="row update-block">
                <div className="col-12 col-xl-9">
                  <div className="d-none d-lg-block">
                    <p style={{ fontFamily: "Geomanist Regular" }}>
                      {application && renderHTML(application.detail)}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-3">
                  <div className="d-lg-none sub-text">
                    <p style={{ fontFamily: "Geomanist Regular" }}>
                      {application && renderHTML(application.detail)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* End latest update  */}
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line w-100" />
        </div>
        {/* Recent updates  */}
        <section className="recent-updates">
          <div className="container">
            <h2
              className="font-weight-bold text-center center-sp-heading mobile-sub-heading"
              style={{ fontFamily: "Geomanist Regular" }}
            >
              {lang.recent}
            </h2>
            <p
              className="text-center sub-title"
              style={{ fontFamily: "Geomanist Regular" }}
            >
              {bannerApp && bannerApp.content}
            </p>
            {appRelated && appRelated[current] && (
              <>
                <div className="d-flex version-container justify-content-between align-items-center ">
                  <div
                    className={current === 1 ? CLASSNAME_ACTIVE : CLASSNAME}
                    onClick={() => setCurrent(1)}
                  >
                    {appRelated[1].version}
                  </div>
                  <div
                    className={current === 2 ? CLASSNAME_ACTIVE : CLASSNAME}
                    onClick={() => setCurrent(2)}
                  >
                    {appRelated[2].version}
                  </div>
                  <div
                    className={current === 3 ? CLASSNAME_ACTIVE : CLASSNAME}
                    onClick={() => setCurrent(3)}
                  >
                    {appRelated[3].version}
                  </div>
                </div>
                <div className="caption text-left">
                  <h5 style={{ fontFamily: "Geomanist Book" }}>
                    {appRelated[current].title}
                  </h5>
                  <p style={{ fontFamily: "Geomanist Regular" }}>
                    {appRelated[current].desc}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ApplicationPage;
