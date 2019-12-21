import React, { useState } from "react";

const IotHubPage = props => {
  const [iotHub, setIotHub] = useState([1]);

  return (
    <>
      <div>
        <section className="breadcum iot-page-breadcum">
          <div className="container text-center">
            <h2 className="breadcum-title">IOT Hub</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              illo assumenda fuga, fugiat animi atque laborum dicta error iste
              soluta!
            </p>
          </div>
        </section>
        {/* Intro  */}
        <section className="teach-series-articles d-none d-lg-block pb-0">
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
        <section className="teach-series-sub-articles iot-hubs-sub-articles">
          <div className="container">
            <div className="row">
              {/* Item  Feature */}
              <div className="col-12 col-md-12 col-lg-12 col-xl-5 feature-iot-hub d-block d-lg-none">
                <article className="article-box">
                  {/* Views, date, comments VISIBLE ON MOBILE */}
                  <div className="article-brief-info d-flex align-items-center d-sm-flex d-md-none">
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
                  <div className="article-detail">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div className="img-box">
                        <img
                          className="img-fluid thumbnail"
                          src="./assets/images/laptop/article/tech.png"
                          alt="article"
                        />
                        <img
                          className="play-btn"
                          src="./assets/images/mobile/icons/icn-play.png"
                          alt="play"
                        />
                      </div>
                      <h3 className="text-black">
                        Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên,
                        Devialet thiết kế, âm thanh.
                      </h3>
                      <p>
                        Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang
                        tên Sound X, được phát triển và thiết kế bởi thương hiệu
                        âm thanh High-End Devialet đến từ Pháp.
                      </p>
                    </a>
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
                </article>
              </div>
              {/* End item  */}
              {iotHub.map((item, index) => (
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">
                        Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên,
                        Devialet thiết kế, âm thanh Surround
                      </h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-5 col-lg-12 col-xl-12 pl-0 img-box">
                          <div className="img-box">
                            <img
                              src="./assets/images/laptop/article/fox-article.png"
                              className="img-fluid w-100"
                              alt="article"
                            />
                            {/* <img
                              className="play-btn"
                              src="./assets/images/mobile/icons/icn-play.png"
                              alt="play"
                            /> */}
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-7 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block">
                            Huawei Sound X - Loa thông minh Hi-Res Audio đầu
                            tiên, Devialet thiết kế, âm thanh Surround
                          </h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp
                            mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img
                                height={16}
                                src="./assets/images/mobile/icons/icn-eye-15.png"
                                alt="views"
                                className="img-fluid"
                              />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
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

export default IotHubPage;
