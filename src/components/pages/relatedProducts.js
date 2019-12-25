import React from "react";
import Slider from "react-slick";

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "1px",
  slidesToShow: 3,
  speed: 500
};

const RelatedProductsPage = props => {
  return (
    <>
      <div>
        <section className="breadcum building-page-breadcum related-products-breadcum">
          <div className="container text-center">
            <h2 className="breadcum-title">Related products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.
            </p>
          </div>
        </section>
        {/* Carousel  MOBILE */}
        <section className="d-block d-md-none d-lg-none features-mobile">
          <div className="container">
            <div className="slider-nav slider-nav-1 slick-initialized slick-slider">
              <Slider {...settings}>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-rhino.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-fox.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird-2.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird-2-black.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bear.png"
                    alt="fox"
                  />
                </div>
              </Slider>
            </div>
            <div className="slider-for">
              <div className="item-caption text-center">
                <h3 className="font-weight-bold">Rhino.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  explicabo ducimus maxime asperiores unde! Omnis.
                </p>
                <a
                  href="#"
                  className="learn-more d-flex align-items-center justify-content-center"
                >
                  <span>Learn more</span>
                  <span>
                    <img
                      src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                      alt="learn more"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End section  */}
        <div className="container">
          <hr className="breadcum-line w-100" />
        </div>
        {/* Carousel mobile 2  */}
        <section className="d-block d-md-none d-lg-none features-mobile">
          <div className="container">
            <div className="slider-nav">
              <Slider {...settings}>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird-2-black.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-ox.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-1.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird-2.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bird-2-black.png"
                    alt="fox"
                  />
                </div>
                <div className="text-center slider-nav-item-mobile">
                  <img
                    className="mx-auto"
                    src="./assets/images/laptop/carousel/carousel-bear.png"
                    alt="fox"
                  />
                </div>
              </Slider>
            </div>
            <div className="slider-for">
              <div className="item-caption text-center">
                <h3 className="font-weight-bold">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  explicabo ducimus maxime asperiores unde! Omnis.
                </p>
                <a
                  href="#"
                  className="learn-more d-flex align-items-center justify-content-center"
                >
                  <span>Learn more</span>
                  <span>
                    <img
                      src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                      alt="learn more"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Features laptop  */}
        <section className="d-none d-lg-block features">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-fox.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-rhino.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-ox.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-bird-2.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-bear.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-bird-2-black.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-peacock.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 text-center block-feature">
                <figure>
                  <img
                    src="./assets/images/laptop/carousel/carousel-bird.png"
                    alt=""
                  />
                </figure>
                <div className="caption">
                  <h3 className="font-weight-bold">Rhino.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi explicabo ducimus maxime asperiores unde! Omnis.
                  </p>
                  <a
                    href="#"
                    className="learn-more d-flex align-items-center justify-content-center"
                  >
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RelatedProductsPage;
