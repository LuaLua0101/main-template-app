import React from "react";

const PressResourcesPage = props => {
  return <>
        <div>
          <section className="breadcum press-list-breadcum">
            <div className="container text-center">
              <h2 className="breadcum-title">Press resources</h2>
              <p className="d-block d-lg-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo assumenda fuga, fugiat animi atque
                laborum dicta error iste soluta!
              </p>
            </div>
          </section>
          {/* Press resources  */}
          <section className="press-resources">
            <div className="container">
              <div className="row align-items-center brands">
                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                  <img className="img-fluid w-100" src="./assets/images/Links/Logo-TechTimes-Vietnam.png" alt="tinh te" />
                </div>
                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                  <img className="img-fluid w-100" src="./assets/images/Links/Logo_VTC.png" alt="tinh te" />
                </div>
                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                  <img className="img-fluid w-100" src="./assets/images/Links/vnexpress.png" alt="tinh te" />
                </div>
                <div className="col-4 col-md-3 col-lg-3 col-xl-3">
                  <img className="img-fluid w-100" src="./assets/images/Links/báo-giá-quảng-cáo-báo-tinhte.vn_.png" alt="tinh te" />
                </div>
                <div className="col ">
                  <img className="img-fluid w-100" src="./assets/images/Links/logo-chan-trang-24h.png" alt="tinh te" />
                </div>
                <div className="col ">
                  <img className="img-fluid w-100" src="./assets/images/Links/Zing-news.png" alt="tinh te" />
                </div>
                <div className="col ">
                  <img className="img-fluid w-100" src="./assets/images/Links/LOGO-DAN-TRI.png" alt="tinh te" />
                </div>
                <div className="col ">
                  <img className="img-fluid w-100" src="./assets/images/Links/GenK-1.png" alt="tinh te" />
                </div>
                <div className="col ">
                  <img className="img-fluid w-100" src="./assets/images/Links/htv9-logo.png" alt="tinh te" />
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <hr className="breadcum-line w-100 press-resource-line" />
          </div>
          {/* List articles with pagination  */}
          <section className="press-list">
            <div className="container">
              {/* List articles  */}
              <div className="row">
                {/* 4 ITEMS/PAGE MOBILE (Last item won't have border bottom), 16/ LAPTOP  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-3.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-2.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-4.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3  ">
                  <article className="article-box-2 article-box mb-15px border-bottom-0">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-1.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Hide rest on mobile */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-3.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-2.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-4.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-1.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-3.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-2.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-4.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-1.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-3.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-2.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-4.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* Item article  */}
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block ">
                  <article className="article-box-2 article-box mb-15px ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* Title visible on mobile  */}
                      <h3 className="d-block d-md-none">Huawei Sound X - Loa thông minh Hi-Res Audio
                        đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                      {/* Details  */}
                      <div className="article-detail row mx-0 ">
                        <div className="feature-img col-5 col-md-12 col-lg-12 col-xl-12 pl-0">
                          <div className="img-box">
                            <img src="./assets/images/laptop/article/thumbnail-1.png" className="img-fluid w-100" alt="article" />
                            <img className="play-btn" src="./assets/images/mobile/icons/icn-play.png" alt="play" />
                          </div>
                        </div>
                        <div className="article-info col-7 col-md-12 col-lg-12 col-xl-12 px-0">
                          {/* Title visible on laptop  */}
                          <h3 className="d-none d-md-block d-lg-block">Huawei Sound X - Loa thông minh Hi-Res Audio
                            đầu tiên, Devialet thiết kế, âm thanh Surround</h3>
                          <p className="mb-0">
                            Huawei vừa giới thiệu mẫu loa thông minh cao cấp mang tên Sound X, được...
                          </p>
                          <div className="d-flex time-and-view align-items-center">
                            <time>December 25, 2019</time>
                            <div className="view d-flex align-items-center">
                              <img height={16} src="./assets/images/mobile/icons/icn-eye-15.png" alt="views" className="img-fluid" />
                              <span className="text-uppercase">1.2k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
                {/* // Item article  */}
                {/* VIEW MORE BUTTON */} 
                <div className="w-100">
                  <a href="#" className="text-uppercase mx-auto justify-content-center d-flex align-items-center">
                    <div className="view-more-articles">
                      <span>
                        View more
                      </span>
                      <span>
                        <img src="./assets/images/mobile/icons/icn-arrow-down-techseries.png" alt="next" />
                      </span>
                    </div>   
                  </a>
                </div>
              </div>
              {/* End List articles  */}
            </div>
          </section>
        </div></>;
};

export default PressResourcesPage;
