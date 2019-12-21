import React, { useState } from "react";

const TeachMeSeriesPage = props => {
  const [teachMeSeries, setTeachMeSeries] = useState([1]);

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
                    LOREM IPSUM DOLOR
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci
                  </p>
                </div>
                <div className="col-12 col-xl-6 ">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="img-box">
                      <img
                        className="img-fluid"
                        src="./assets/images/laptop/article/teach-series-article-1.png"
                        alt="feature article"
                      />
                      <img
                        className="play-btn"
                        src="./assets/images/mobile/icons/icn-play.png"
                        alt="play"
                      />
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
            <div className="row">
              {teachMeSeries.map((item, index) => (
                <div className="col-12 col-md-4 col-lg-6 col-xl-4">
                  <article className="article-box">
                    {/* Views, date, comments*/}
                    <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                      <time>December 25, 2019</time>
                      <div className="view d-flex align-items-center">
                        <img
                          src="./assets/images/mobile/icons/icn-eye.png"
                          alt="views"
                          className="img-fluid"
                        />
                        <span className="text-uppercase">1.2k</span>
                      </div>
                      <div className="comments d-flex align-items-center">
                        <img
                          src="./assets/images/mobile/icons/icn-chat.png"
                          alt="comment"
                          className="img-fluid"
                        />
                        <span>12</span>
                      </div>
                      <div className="share d-flex align-items-center">
                        <img
                          src="./assets/images/mobile/icons/icn-share.png"
                          alt="share"
                          className="img-fluid"
                        />
                        <span>302</span>
                      </div>
                    </div>
                    {/* Feature img, title, description */}
                    <div className="article-detail secondary-article secondary-article--left">
                      <div className="row align-items-center">
                        <div className="col-12 col-xl-12 left-block">
                          <div className="img-box">
                            <img
                              className="img-fluid thumbnail"
                              src="./assets/images/laptop/article/world-control-clipping.png"
                              alt="article"
                            />
                            <img
                              className="play-btn"
                              src="./assets/images/mobile/icons/icn-play.png"
                              alt="play"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 right-block">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-black">
                              Huawei Sound X - Loa thông minh Hi-Res Audio đầu
                              tiên, Devialet thiết kế, âm thanh.
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Facere, labore. Lorem ipsum dolor sit amet.
                            </p>
                          </a>
                          {/* Views, date visible on laptop*/}
                          <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img
                                src="./assets/images/mobile/icons/icn-eye.png"
                                alt="views"
                                className="img-fluid"
                              />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
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
