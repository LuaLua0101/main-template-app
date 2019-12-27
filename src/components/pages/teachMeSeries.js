import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { SERVER } from "../../utils/constants";

const TeachMeSeriesPage = props => {
  const [teachMeSeries, setTeachMeSeries] = useState([]);
  const [teachMePinned, setTeachMePinned] = useState({
    id: 0
  });

  useEffect(() => {
    axios.get("teach-me-series").then(res => {
      const { teachmepinned, teachme } = res.data;
      setTeachMeSeries(teachme);
      setTeachMePinned(teachmepinned);
    });
  }, []);

  const renderTeachmeList = () => {
    return teachMeSeries.map((item, index) => (
      <div className="col-12 col-md-4 col-lg-6 col-xl-4">
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
                    src={
                      SERVER +
                      "public/images/teach-me-series/" +
                      item.id +
                      "/thumbnail.png"
                    }
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
            <h3 className="breadcum-subtitle">Loạt phim tài liệu gốc</h3>
            <p>
              Là những câu chuyện đằng sau lý do hình thành các giải pháp của
              Pitech, nhằm giải quyết các vấn đề của xã hội hoặc nhu cầu đến từ
              phía người dùng.
            </p>
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
                      <img
                        className="img-fluid"
                        src={
                          SERVER +
                          "public/images/teach-me-series/" +
                          teachMePinned.id +
                          "/thumbnail.png"
                        }
                        alt="feature article"
                      />
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
            <a
              href="#"
              className="text-uppercase mx-auto justify-content-center d-flex align-items-center view-more-articles"
            >
              <span>View more</span>
              <span>
                <img
                  src="./assets/images/mobile/icons/icn-arrow-down-techseries.png"
                  alt="next"
                />
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeachMeSeriesPage;
