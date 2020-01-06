import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { SERVER } from "../../utils/constants";
import { Spin } from "antd";

const IotHubPage = props => {
  const [iotHub, setIotHub] = useState([]);
  const [loadButton, setLoadButton] = useState(true);
  const [iotHubPinned, setIotHubPinned] = useState(null);

  const getData = () => {
    setLoadButton(true);
    axios
      .post("iot-hub", { page: iotHub.length })
      .then(res => {
        const { iothubpinned, iothub } = res.data;
        setIotHub([...iotHub, ...iothub]);
        !iotHubPinned && setIotHubPinned(iothubpinned);
      })
      .finally(setLoadButton(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderIotHub = () => {
    return iotHub.map((item, index) => (
      <div className="col-12 col-md-12 col-lg-4 col-xl-4 ">
        <article className="article-box-2 article-box mb-15px ">
          <a href={"/iot-hub?id=" + item.id} rel="noopener noreferrer">
            {/* Title visible on mobile  */}
            <h3 className="d-block d-md-none">{item.title}</h3>
            {/* Details  */}
            <div className="article-detail row mx-0 ">
              <div className="feature-img col-5 col-md-5 col-lg-12 col-xl-12 pl-0 img-box">
                <div className="img-box">
                  <img
                    className="img-fluid thumbnail"
                    src={SERVER + "public/img/iothub/" + item.cover}
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
              <div className="article-info col-7 col-md-7 col-lg-12 col-xl-12 px-0">
                {/* Title visible on laptop  */}
                <h3 className="d-none d-md-block">{item.title}</h3>
                <p className="mb-0">{item.short_desc}</p>
                <div className="d-flex time-and-view align-items-center">
                  <time>{moment(item.created_at).format("MMMM D, YYYY")}</time>
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
    ));
  };

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
                    {iotHubPinned && iotHubPinned.title}
                  </h3>
                  <p className="text-white">
                    {iotHubPinned && iotHubPinned.short_desc}
                  </p>
                </div>
                <div className="col-12 col-xl-6 ">
                  <a
                    href={iotHubPinned ? "/iot-hub?id=" + iotHubPinned.id : "#"}
                    rel="noopener noreferrer"
                  >
                    <div className="img-box">
                      {iotHubPinned && (
                        <img
                          src={
                            SERVER + "public/img/iothub/" + iotHubPinned.cover
                          }
                          className="img-fluid w-100"
                          alt="article"
                        />
                      )}
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
        <section className="teach-series-sub-articles iot-hubs-sub-articles">
          <div className="container">
            <div className="row">{renderIotHub()}</div>
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

export default IotHubPage;
