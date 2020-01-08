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
  const [appPinned, setAppPinned] = useState();
  const [appRelated, setAppRelated] = useState([]);
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
        setAppPinned(res.data.app_pinned);
        setAppRelated(res.data.related);
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
                      <h4 className="card-title">
                        {appPinned && appPinned.title}
                      </h4>
                      <p className="card-text">{appPinned && appPinned.desc}</p>
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
            <h2 className="font-weight-bold text-center center-sp-heading mobile-sub-heading">
              {lang.latest}
            </h2>
            <p className="d-none d-lg-block text-center sub-title">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, facere?
            </p>
            {/* 1 ITEM / ROW  */}

            {application &&
              application.feature1_title &&
              application.feature1_desc && (
                <>
                  <div className="row update-block">
                    <div className="col-12 col-xl-9">
                      <div className="d-none d-lg-block">
                        <h3 className="font-weight-bold">
                          {application.feature1_title}
                        </h3>
                        <p>{application.feature1_desc}</p>
                      </div>
                      {/* Note. Paragraph intro laptop was longer  so this will be display in mobile */}
                      <p className="d-block d-lg-none">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Reprehenderit, facere?
                      </p>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src="./assets/images/laptop/icn/updates-green.png"
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3>{application.feature1_title}</h3>
                        <p>{application.feature1_desc}</p>
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
                        <h3 className="font-weight-bold">
                          {application && application.feature2_title}
                        </h3>
                        <p>{application && application.feature2_desc}</p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src="./assets/images/laptop/icn/icn-plugin.png"
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3>{application && application.feature2_title}</h3>
                        <p>{application && application.feature2_desc}</p>
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
                        <h3 className="font-weight-bold">
                          {application && application.feature3_title}
                        </h3>
                        <p>{application && application.feature3_desc}</p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3">
                      <img
                        className="icn-summarize"
                        src="./assets/images/laptop/icn/icn-apple-watch.png"
                        alt="refresh"
                      />
                      <div className="d-lg-none sub-text">
                        <h3>{application && application.feature2_title}</h3>
                        <p>{application && application.feature3_desc}</p>
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
                    <p>{application && renderHTML(application.detail)}</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3">
                  <div className="d-lg-none sub-text">
                    <p>{application && renderHTML(application.detail)}</p>
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
            <h2 className="font-weight-bold text-center center-sp-heading mobile-sub-heading">
              {lang.recent}
            </h2>
            <p className="text-center sub-title">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, facere?
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
                  <h5>{appRelated[current].title}</h5>
                  <p>{appRelated[current].desc}</p>
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
