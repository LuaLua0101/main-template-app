import React, { useState } from "react";

export default function MainPage(props) {
  const [teachMeSeries, setTeachMeSeries] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      <div>
        {/* Intro  */}
        <section className="intro gradient-bg text-white">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <h2 className="text-uppercase font-weight-bold">
                  Lorem ipsum dolor, sit amet coM sit
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, cononummy nibh euismod tincidunt
                  ectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt
                </p>
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
                      <h4 className="card-title">NEW UPDATE PACH V4.3</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <a
                        href="#"
                        target="_blank"
                        className="text-capitalize d-none d-sm-block learn-more"
                      >
                        LEARN MORE
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
              <h2 className="font-weight-bold text-uppercase mobile-sub-heading">Teach me series</h2>
            </div>
            <div className="col-6 d-none d-lg-block text-right">
              <a href="#" className="text-center view-more-articles">
                <span>
                  View all post
                </span>
                <span>
                  <img src="./assets/images/mobile/icons/icn-arrow-next-blue.png" alt="next" />
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
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div className="img-box">
                        <img src="./assets/images/laptop/article/feature-article-laptop.png" alt="feature article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-xl-6 right-block">
                    {/* Views, title, link */}
                    <div className="article-brief-info d-flex align-items-center">
                      <time>December 25, 2019</time>
                      <div className="view d-flex align-items-center">
                        <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                        <span className="text-uppercase">1.2k</span>
                      </div>
                    </div>
                    <h3 className="text-black">LOREM IPSUM DOLOR DOLOR SIT AMET</h3>
                    <p>
                      Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được phát triển và thiết kế bởi
                      thương hiệu âm thanh High-End Devialet đến từ Pháp.
                    </p>
                    <a href="#" className="text-capitalize d-none d-sm-block learn-more" target="_blank" rel="noopener noreferrer">Learn more</a>
                  </div>
                </div>
              </article>
            </div>
            {/* End item feature laptop  */}
            {/*============= ITEMS ARTICLES - 2 FOR MOBILE, 6 FOR LAPTOP * NOTE (Item display on left and right
          side is slightly different) -=============*/}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--left">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/fox-article.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--right">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/fox-article.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/*================= HIDE REST ITEMS ON MOBILE================= */}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-lg-block">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--left">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/beaver-clipping.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-lg-block">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--right">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/beaver-clipping.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-lg-block">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--left">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/deer.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/* Item mobile */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-lg-block">
              <article className="article-box">
                {/* Views, date, comments*/}
                <div className="article-brief-info d-flex align-items-center d-block d-md-none">
                  <time>December 25, 2019</time>
                  <div className="view d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                    <span className="text-uppercase">1.2k</span>
                  </div>
                  <div className="comments d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-chat.png" alt="comment" className="img-fluid" />
                    <span>12</span>
                  </div>
                  <div className="share d-flex align-items-center">
                    <img src="./assets/images/mobile/icons/icn-share.png" alt="share" className="img-fluid" />
                    <span>302</span>
                  </div>
                </div>
                {/* Feature img, title, description */}
                <div className="article-detail secondary-article secondary-article--right">
                  <div className="row">
                    <div className="col-12 col-xl-7 left-block">
                      <div className="img-box">
                        <img className="img-fluid thumbnail" src="./assets/images/laptop/article/deer.png" alt="article" />
                        <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 right-block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-black">Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên, Devialet thiết kế, âm
                          thanh.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore.
                          Lorem ipsum dolor sit amet.
                        </p>
                      </a>
                      {/* Views, date visible on laptop*/}
                      <div className="article-brief-info align-items-center d-none d-sm-none d-md-flex">
                        <time>December 25, 2019</time>
                        <div className="view d-flex align-items-center">
                          <img src="./assets/images/mobile/icons/icn-eye.png" alt="views" className="img-fluid" />
                          <span className="text-uppercase">1.2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* End item  */}
            {/* View more - VISIBLE ON MOBILE ALSO */}
            <a href="#" className="text-uppercase text-center d-block d-lg-none view-more-articles">
              <span>
                View all post
              </span>
              <span>
                <img src="./assets/images/mobile/icons/icn-arrow-next-blue.png" alt="next" />
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
                <a href="#" className="text-center view-more-articles">
                  <span>View all post</span>
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
              <div className="col-12  col-md-12 col-lg-12 col-xl-7 px-0">
                {/* Item style 2  */}
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 ">
                  <article className="article-box-2 article-box mb-0 pt-0">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">
                        Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên,
                        Devialet thiết kế, âm thanh Surround
                      </h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-4 col-lg-4 col-xl-4 pl-0 img-box">
                          <div className="img-box">
                            <img
                              src="./assets/images/laptop/article/fox-article.png"
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
                          <h3 className="d-none d-lg-block">
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
                {/* End item style 2  */}
                {/* Item style 2 ---- NOTE: ITEMS 2,3 has class pt-0 */}
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 ">
                  <article className="article-box-2 article-box mb-0 pt-0 ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">
                        Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên,
                        Devialet thiết kế, âm thanh Surround
                      </h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0">
                        <div className="feature-img col-5 col-md-4 col-lg-4 col-xl-4 pl-0">
                          <div className="img-box">
                            <img
                              src="./assets/images/laptop/article/deer.png"
                              className="img-fluid w-100"
                              alt="article"
                            />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-8 col-lg-8 col-xl-8 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-lg-block">
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
                {/* End item style 2  */}
                {/* Item style 2  */}
                <div className="col-12 col-md-12 col-lg-12 col-xl-12  ">
                  <article className="article-box-2 article-box mb-0 pt-0 pb-0">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">
                        Huawei Sound X - Loa thông minh Hi-Res Audio đầu tiên,
                        Devialet thiết kế, âm thanh Surround
                      </h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0">
                        <div className="feature-img col-5 col-md-4 col-lg-4 col-xl-4 pl-0">
                          <div className="img-box">
                            <img
                              src="./assets/images/laptop/article/beaver.png"
                              className="img-fluid w-100"
                              alt="article"
                            />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-8 col-lg-8 col-xl-8 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-lg-block">
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
                {/* End item style 2  */}
              </div>
              {/* View more on mobile */}
              <a
                href="#"
                className="text-uppercase text-center d-lg-none view-more-articles"
              >
                <span>View all post</span>
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
