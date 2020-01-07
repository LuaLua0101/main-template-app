import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { SERVER } from "../../utils/constants";
import languages from "../../utils/languages";
const lang = languages("index");

const CareerPage = props => {
  const [careers, setCareers] = useState([]);
  const [loadButton, setLoadButton] = useState(true);

  const getData = () => {
    setLoadButton(true);
    const lang = localStorage.getItem("@lang")
      ? localStorage.getItem("@lang")
      : "vi";
    axios
      .get("careers/" + lang)
      .then(res => {
        console.log(res.data);
        setCareers(res.data.careers);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="banner"></div>
        {/* End banner  */}
        {/* Bread cum  */}
        <section className="breadcum building-page-breadcum career-breadcum">
          <div className="container text-center">
            <h2 className="breadcum-title">Career</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              dolores, eveniet eius quae maxime, aliquid, nisi voluptate
              repellat impedit cumque sapiente. Non ut nobis officiis!
            </p>
          </div>
        </section>
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line" />
        </div>
        {/* // Bread cum  */}
        {/* Careers opened  */}
        <section className="careers ">
          {/* Laptop style  */}
          <div className="container d-none d-lg-block laptop-main-content">
            {careers.map((item, index) => {
              return index % 2 ? (
                <div className="row align-items-center block-item" key={index}>
                  <div className="col-12 col-lg-6 col-xl-6">
                    <img
                      src={SERVER + "public/img/Career/" + item.cover}
                      className="img-fluid"
                      alt="career"
                    />
                  </div>
                  <div className="col-12 col-lg-6 col-xl-6 text-block-right">
                    <h3 className="font-weight-bold text-uppercase mobile-sub-heading">
                      {item.dep}
                    </h3>
                    <h4>{item.title}</h4>
                    <p className="d-none d-lg-block">{item.desc}</p>
                  </div>
                </div>
              ) : (
                <div className="row align-items-center block-item " key={index}>
                  <div className="col-12 col-lg-6 col-xl-6 text-block-left">
                    <h3 className="font-weight-bold text-uppercase mobile-sub-heading">
                      {item.dep}
                    </h3>
                    <h4>{item.title}</h4>
                    <p className="d-none d-lg-block">{item.desc}</p>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-6">
                    <img
                      src={SERVER + "public/img/Career/" + item.cover}
                      className="img-fluid"
                      alt="career"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Mobile style - toggle */}
          <div className="container d-block d-lg-none">
            {careers.map((item, index) => {
              return (
                <>
                  <button
                    className="btn btn-primary toggle-mobile"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#collapse" + index}
                    aria-expanded="false"
                    aria-controls={"collapse" + index}
                  >
                    <span className="title">{item.dep}</span>
                    <span className="pull-right">
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                        alt=""
                      />
                    </span>
                    <div className="clear-float" />
                  </button>
                  {/* Collapse content  */}
                  <div
                    className="collapse toggle-content"
                    id={"collapse" + index}
                  >
                    <div className="content text-center">
                      <div className="career-img">
                        <img
                          className="img-fluid"
                          src={SERVER + "public/img/Career/" + item.cover}
                          alt="career"
                        />
                      </div>
                      <div className="job-desc">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className="quote">
          <div className="container quote-content">
            <div className="quote-line mx-auto" />
            <div className="quote-contain text-center">
              {lang.quote}
              <br />
              <strong>sample@pitech.gmail.com</strong>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerPage;
