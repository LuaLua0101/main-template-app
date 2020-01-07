import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { SERVER } from "../../utils/constants";
import { Spin } from "antd";

const TeachMeSeriesPage = props => {
  const [teachMeSeries, setTeachMeSeries] = useState([]);
  const [loadButton, setLoadButton] = useState(true);
  const [teachMePinned, setTeachMePinned] = useState(null);
  const [banner, setBanner] = useState();

  const getData = () => {
    setLoadButton(true);
    axios
      .post("teach-me-series", { page: teachMeSeries.length })
      .then(res => {
        console.log(res.data);
        const { teachmepinned, teachme, banner } = res.data;
        setTeachMeSeries([...teachMeSeries, ...teachme]);
        !teachMePinned && setTeachMePinned(teachmepinned);
        setBanner(banner);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderTeachmeList = () => {
    return teachMeSeries.map((item, index) => (
      <div className="col-12 col-md-4 col-lg-6 col-xl-4" key={index}>
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
            <div className="row align-items-center">
              <div className="col-12 col-xl-12 left-block">
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
              <div className="col-12 col-xl-12 right-block">
                <a
                  href={"/teach-me-serie?id=" + item.id}
                  rel="noopener noreferrer"
                >
                  <h3 className="text-black">{item.title}</h3>
                  <p>{item.short_desc}</p>
                </a>
                {/* Views, date visible on laptop*/}
                <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                  <time>{moment(item.created_at).format("MMMM D, YYYY")}</time>
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
    ));
  };

  return (
    <>
      <div>
        {/* Bread cum  */}
        <section className="breadcum">
          <div className="container text-center">
            <h2 className="breadcum-title">Teach me series</h2>
            <h3 className="breadcum-subtitle">{banner && banner.title}</h3>
            <p>{banner && banner.content}</p>
          </div>
        </section>
        {/* // Bread cum  */}
        {/* Feature article */}
        <section className="teach-series-articles">
          <div className="container">
            <article className="article-box ">
              <div className="row article-detail">
                <div className="col-12 col-xl-6 align-self-center">
                  <h3 className="d-none d-lg-block text-white text-left">
                    {teachMePinned && teachMePinned.title}
                  </h3>
                  <p className="text-white">
                    {teachMePinned && teachMePinned.short_desc}
                  </p>
                </div>
                <div className="col-12 col-xl-6 ">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="img-box">
                      {teachMePinned && (
                        <img
                          className="img-fluid"
                          src={
                            SERVER + "public/img/post/" + teachMePinned.cover
                          }
                          alt="feature article"
                        />
                      )}
                      {/* <img
                        className="play-btn"
                        src="./assets/images/mobile/icons/icn-play.png"
                        alt="play"
                      /> */}
                    </div>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Sub articles: 5 on mobiles and view more, 12 on laptop (3 articles/row)  */}
        <section className="teach-series-sub-articles">
          <div className="container">
            <div className="row">{renderTeachmeList()}</div>
            {/* View more button */}
            {loadButton ? (
              <div
                className="text-uppercase mx-auto justify-content-center d-flex align-items-center view-more-articles"
                style={{ cursor: "pointer" }}
              >
                <Spin size="large" />
              </div>
            ) : (
              <div
                onClick={getData}
                className="text-uppercase mx-auto justify-content-center d-flex align-items-center view-more-articles"
                style={{ cursor: "pointer" }}
              >
                <span>View more</span>
                <span>
                  <img
                    src="./assets/images/mobile/icons/icn-arrow-down-techseries.png"
                    alt="next"
                  />
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default TeachMeSeriesPage;
