import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { SERVER } from "../../utils/constants";
import languages from "../../utils/languages";
const lang = languages("index");

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export default function MainPage(props) {
  const [teachMeSeries, setTeachMeSeries] = useState([]);
  const [iotHub, setIotHub] = useState([]);
  const [banner, setBanner] = useState();
  const [teachMePinned, setTeachMePinned] = useState({
    id: 0
  });
  const [iotPinned, setIotPinned] = useState({
    id: 0
  });
  const [appPinned, setAppPinned] = useState();

  useEffect(() => {
    axios.get("home").then(res => {
      console.log(res.data);
      const { banner, teachmepinned, teachme, iothub, iotpinned } = res.data;
      setBanner(banner);
      setTeachMeSeries(teachme);
      setTeachMePinned(teachmepinned);
      setIotHub(iothub);
      setIotPinned(iotpinned);
      setAppPinned(res.data.app_pinned);
    });
  }, []);

  const renderTeachMeList = () => {
    const list = detectmob() ? teachMeSeries.slice(0, 2) : teachMeSeries;
    return list.map((item, index) => {
      return (
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
          <article className="article-box">
            {/* Views, date, comments*/}
            <div className="article-brief-info d-flex align-items-center d-block d-md-none">
              <time>{moment(item.created_at).format("MMMM D, YYYY")}</time>
              <div className="view d-flex align-items-center">
                <img
                  src="./assets/images/mobile/icons/icn-eye.png"
                  alt="views"
                  className="img-fluid"
                />
                <span className="text-uppercase">{item.view_count}</span>
              </div>
              <div className="comments d-flex align-items-center">
                <img
                  src="./assets/images/mobile/icons/icn-chat.png"
                  alt="comment"
                  className="img-fluid"
                />
                <span>{item.chat_count}</span>
              </div>
              <div className="share d-flex align-items-center">
                <img
                  src="./assets/images/mobile/icons/icn-share.png"
                  alt="share"
                  className="img-fluid"
                />
                <span>{item.share_count}</span>
              </div>
            </div>
            {/* Feature img, title, description */}
            <div className="article-detail secondary-article secondary-article--left">
              <div className="row">
                <div className="col-12 col-xl-7 left-block">
                  <div className="img-box">
                    <img
                      className="img-fluid thumbnail"
                      src={SERVER + "public/img/post/" + item.cover}
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
                <div className="col-12 col-xl-5 right-block">
                  <a
                    href={"/teach-me-serie?id=" + item.id}
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-black">{item.title}</h3>
                    <p>{item.short_desc}</p>
                  </a>
                  {/* Views, date visible on laptop*/}
                  <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                    <time style={{ fontFamily: "Geomanist Regular" }}>
                      {moment(item.created_at).format("MMMM D, YYYY")}
                    </time>
                    <div className="view d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-eye.png"
                        alt="views"
                        className="img-fluid"
                      />
                      <span className="text-uppercase">{item.view_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  };

  const renderIotHub = () => {
    return iotHub.map((item, index) => {
      return (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 ">
          <article className="article-box-2 article-box mb-0 pt-0">
            <a href={"/iot-hub?id=" + item.id} rel="noopener noreferrer">
              {/* Title visible on mobile  */}
              <h3 className="d-block d-md-none">{item.title}</h3>
              {/* Details  */}
              <div className="article-detail row mx-0 ">
                <div className="feature-img col-5 col-md-4 col-lg-4 col-xl-4 pl-0 img-box">
                  <div className="img-box">
                    <img
                      src={SERVER + "public/img/iothub/" + item.cover}
                      className="img-fluid w-100"
                      alt="article"
                    />
                    <img
                      className="play-btn"
                      src="./assets/images/mobile/icons/icn-play.png"
                      alt="play"
                    />
                  </div>
                </div>
                <div className="article-info col-7 col-md-8 col-lg-8 col-xl-8 px-0">
                  {/* Title visible on laptop  */}
                  <h3 className="d-none d-lg-block">{item.title}</h3>
                  <p className="mb-0">{item.short_desc}</p>
                  <div className="d-flex time-and-view align-items-center">
                    <time style={{ fontFamily: "Geomanist Regular" }}>
                      {moment(item.created_at).format("MMMM D, YYYY")}
                    </time>
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
      );
    });
  };
  return (
    <>
      <div>
        {/* Intro  */}
        <section className="intro gradient-bg text-white">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <h2
                  className="text-uppercase font-weight-bold"
                  style={{ color: "white" }}
                >
                  {banner && banner.title}
                </h2>
                <p>{banner && banner.content}</p>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 px-0">
                <img
                  className="img-fluid d-none d-sm-block  "
                  src="./assets/images/laptop/feature-img/intro-img-2.png"
                  alt="image"
                />
                <img
                  className="img-fluid d-block d-sm-none w-100"
                  src="./assets/images/mobile/feature-img/home-intro-bg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End intro  */}
        {/* Application  */}
        <section className="application">
          <div className="container">
            <h2 className="font-weight-bold text-uppercase mobile-sub-heading">
              Application
            </h2>
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
                    <div className="card-body">
                      <h4 className="card-title">
                        {appPinned && appPinned.title}
                      </h4>
                      <p className="card-text">{appPinned && appPinned.desc}</p>
                      <a
                        href="/application"
                        className="text-capitalize d-none d-sm-block learn-more"
                        style={{ fontFamily: "Geomanist Regular" }}
                      >
                        {lang.learnmore}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End application  */}
        {/* Teach me series  */}
        <section className="teach-me bg-pale-grey">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2 className="font-weight-bold text-uppercase mobile-sub-heading">
                  Teach me series
                </h2>
              </div>
              <div className="col-6 d-none d-lg-block text-right">
                <a
                  href="/teach-me-series"
                  className="text-center view-more-articles"
                >
                  <span>{lang.viewall}</span>
                  <span>
                    <img
                      src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                      alt="next"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* Item feature laptop - won't display on mobile  */}
              <div className="col-12 col-lg-12 col-xl-12 d-none d-md-block feature-article-laptop">
                <article className="article-box">
                  <div className="row mx-0 article-detail align-items-center ">
                    <div className="col-md-6 col-xl-6 left-block pl-0">
                      <a
                        href={"/teach-me-serie?id=" + teachMePinned.id}
                        rel="noopener noreferrer"
                      >
                        <div className="img-box">
                          <img
                            src={
                              SERVER + "public/img/post/" + teachMePinned.cover
                            }
                            alt="feature article"
                          />
                          {!teachMePinned.is_image && (
                            <img
                              className="play-btn"
                              src="./assets/images/mobile/icons/icn-play.png"
                              alt="play"
                            />
                          )}
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6 col-xl-6 right-block">
                      {/* Views, title, link */}
                      <div className="article-brief-info d-flex align-items-center">
                        <time style={{ fontFamily: "Geomanist Regular" }}>
                          {moment(
                            teachMePinned && teachMePinned.created_at
                          ).format("MMMM D, YYYY")}
                        </time>
                        <div className="view d-flex align-items-center">
                          <img
                            src="./assets/images/mobile/icons/icn-eye.png"
                            alt="views"
                            className="img-fluid"
                          />
                          <span className="text-uppercase">
                            {teachMePinned && teachMePinned.view_count}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-black">
                        {teachMePinned && teachMePinned.title}
                      </h3>
                      <p>{teachMePinned && teachMePinned.short_desc}</p>
                      <a
                        href={"/teach-me-serie?id=" + teachMePinned.id}
                        className="text-capitalize d-none d-sm-block learn-more"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "Geomanist Regular" }}
                      >
                        {lang.learnmore}
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              {/* End item feature laptop  */}
              {/*============= ITEMS ARTICLES - 2 FOR MOBILE, 6 FOR LAPTOP * NOTE (Item display on left and right
          side is slightly different) -=============*/}
              {/* Item mobile */}
              {renderTeachMeList()}
              {/* End item  */}
              <a
                href="/teach-me-series"
                className="text-uppercase text-center d-block d-lg-none view-more-articles"
              >
                <span>{lang.viewall}</span>
                <span>
                  <img
                    src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                    alt="next"
                  />
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* // Teach me series  */}
        {/* IOT HUB  */}
        <section className="iot-hub">
          <div className="container ">
            <div className="row">
              <div className="col-6">
                <h2 className="font-weight-bold text-uppercase mobile-sub-heading">
                  IOT HUB
                </h2>
              </div>
              <div className="col-6 d-none d-lg-block text-right">
                <a href="/iot-hubs" className="text-center view-more-articles">
                  <span>{lang.viewall}</span>
                  <span>
                    <img
                      src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                      alt="next"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="row justify-content-center laptop-row">
              {/* Item  Feature */}
              <div className="col-12 col-md-12 col-lg-12 col-xl-5 feature-iot-hub">
                <article className="article-box">
                  {/* Views, date, comments VISIBLE ON MOBILE */}
                  <div className="article-brief-info d-flex align-items-center d-sm-flex d-md-none">
                    <time style={{ fontFamily: "Geomanist Regular" }}>
                      {moment(iotPinned.created_at).format("MMMM D, YYYY")}
                    </time>
                    <div className="view d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-eye.png"
                        alt="views"
                        className="img-fluid"
                      />
                      <span className="text-uppercase">
                        {iotPinned.view_count}
                      </span>
                    </div>
                    <div className="comments d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-chat.png"
                        alt="comment"
                        className="img-fluid"
                      />
                      <span>{iotPinned.chat_count}</span>
                    </div>
                    <div className="share d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-share.png"
                        alt="share"
                        className="img-fluid"
                      />
                      <span>{iotPinned.share_count}</span>
                    </div>
                  </div>
                  {/* Feature img, title, description */}
                  <div className="article-detail">
                    <a
                      href={"/iot-hub?id=" + iotPinned.id}
                      rel="noopener noreferrer"
                    >
                      <div className="img-box">
                        <img
                          className="img-fluid thumbnail"
                          src={SERVER + "public/img/iothub/" + iotPinned.cover}
                          alt="article"
                        />
                        {!iotPinned.is_image && (
                          <img
                            className="play-btn"
                            src="./assets/images/mobile/icons/icn-play.png"
                            alt="play"
                          />
                        )}
                      </div>
                      <h3 className="text-black">{iotPinned.title}</h3>
                      <p>{iotPinned.short_desc}</p>
                    </a>
                    <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                      <time style={{ fontFamily: "Geomanist Regular" }}>
                        {moment(iotPinned.created_at).format("MMMM D, YYYY")}
                      </time>
                      <div className="view d-flex align-items-center">
                        <img
                          src="./assets/images/mobile/icons/icn-eye.png"
                          alt="views"
                          className="img-fluid"
                        />
                        <span className="text-uppercase">
                          {iotPinned.view_count}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* End item  */}
              <div className="col-12  col-md-12 col-lg-12 col-xl-7 px-0">
                {renderIotHub()}
              </div>
              <a
                href="/iot-hubs"
                className="text-uppercase text-center d-lg-none view-more-articles"
                style={{ fontFamily: "Geomanist Regular" }}
              >
                <span>{lang.viewall}</span>
                <span>
                  <img
                    src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                    alt="next"
                  />
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* // IOT HUB  */}
      </div>
    </>
  );
}
