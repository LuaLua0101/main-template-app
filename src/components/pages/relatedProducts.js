import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "../../utils/axios";
import languages from "../../utils/languages";
const lang = languages("index");

const RelatedProductsPage = props => {
  const [products, setProducts] = useState([]);
  const [currentSlide1, setCurrentSlide1] = useState(1);
  const [currentSlide2, setCurrentSlide2] = useState(5);
  const [loadButton, setLoadButton] = useState(true);
  const settings1 = {
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
    afterChange: current => setCurrentSlide1(current)
  };

  const settings2 = {
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
    afterChange: current => setCurrentSlide2(current + 4)
  };

  const getData = () => {
    setLoadButton(true);
    const lang = localStorage.getItem("@lang")
      ? localStorage.getItem("@lang")
      : "vi";
    axios
      .get("related-products/" + lang)
      .then(res => {
        setProducts(res.data.products);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const getImageName = name => {
    switch (name) {
      case "Fox":
        return "carousel-fox.png";
      case "Rhino":
        return "carousel-rhino.png";
      case "Bull":
        return "carousel-ox.png";
      case "Red Owl":
        return "carousel-bird-2.png";
      case "Bear":
        return "carousel-bear.png";
      case "Deer":
        return "DEER-12.png";
      case "Peacock":
        return "carousel-peacock.png";
      case "Parrot":
        return "carousel-bird.png";
      default:
        return "carousel-fox.png";
    }
  };

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
              <Slider {...settings1}>
                {products &&
                  products.slice(0, 4).map((item, index) => {
                    return (
                      <div className="text-center slider-nav-item-mobile">
                        <img
                          className="mx-auto"
                          src={
                            "./assets/images/laptop/carousel/" +
                            getImageName(item.name)
                          }
                          alt="fox"
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            {products && products[currentSlide1] && (
              <div className="slider-for">
                <div className="item-caption text-center">
                  <h3 className="font-weight-bold">
                    {products[currentSlide1].name}
                  </h3>
                  <p>{products[currentSlide1].desc}</p>
                  {products[currentSlide1].name === "Fox" ||
                  products[currentSlide1].name === "Rhino" ? (
                    <a
                      href={products[currentSlide1].url}
                      className="learn-more d-flex align-items-center justify-content-center"
                    >
                      <span>{lang.learnmore}</span>
                      <span>
                        <img
                          src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                          alt="{lang.learnmore}"
                        />
                      </span>
                    </a>
                  ) : (
                    <span className="learn-more d-flex align-items-center justify-content-center">
                      {lang.coming_soon}
                    </span>
                  )}
                </div>
              </div>
            )}
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
              <Slider {...settings2}>
                {products &&
                  products.slice(4, 8).map((item, index) => {
                    return (
                      <div className="text-center slider-nav-item-mobile">
                        <img
                          className="mx-auto"
                          src={
                            "./assets/images/laptop/carousel/" +
                            getImageName(item.name)
                          }
                          alt="fox"
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            {products && products[currentSlide2] && (
              <div className="slider-for">
                <div className="item-caption text-center">
                  <h3 className="font-weight-bold">
                    {products[currentSlide2].name}
                  </h3>
                  <p>{products[currentSlide2].desc}</p>
                  {products[currentSlide2].name === "Fox" ||
                  products[currentSlide2].name === "Rhino" ? (
                    <a
                      href={products[currentSlide2].url}
                      className="learn-more d-flex align-items-center justify-content-center"
                    >
                      <span>{lang.learnmore}</span>
                      <span>
                        <img
                          src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                          alt={lang.learnmore}
                        />
                      </span>
                    </a>
                  ) : (
                    <span className="learn-more d-flex align-items-center justify-content-center">
                      {lang.coming_soon}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Features laptop  */}
        <section className="d-none d-lg-block features">
          <div className="container">
            <div className="row">
              {products &&
                products.map((item, index) => {
                  return (
                    <div
                      className="col-xl-3 text-center block-feature"
                      key={index}
                    >
                      <figure>
                        <img
                          src={
                            "./assets/images/laptop/carousel/" +
                            getImageName(item.name)
                          }
                          alt=""
                        />
                      </figure>
                      <div className="caption">
                        <h3 className="font-weight-bold">{item.name}</h3>
                        <p>{item.desc}</p>
                        {item.name === "Fox" || item.name === "Rhino" ? (
                          <a
                            href={item.url}
                            className="learn-more d-flex align-items-center justify-content-center"
                          >
                            <span>{lang.learnmore}</span>
                            <span>
                              <img
                                src="./assets/images/mobile/icons/icn-arrow-next-blue.png"
                                alt={lang.learnmore}
                              />
                            </span>
                          </a>
                        ) : (
                          <span className="learn-more d-flex align-items-center justify-content-center">
                            {lang.coming_soon}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RelatedProductsPage;
