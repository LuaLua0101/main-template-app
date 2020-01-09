import React from "react";
import { withRouter } from "react-router-dom";
import languages from "./utils/languages";
const lang = languages("index");

const Footer = props => {
  return (
    <>
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-3 col-xl-3 px-0 align-self-center">
                <div className="logo ">
                  <a href="#">
                    <img
                      src="./assets/images/mobile/logo-foot.png"
                      className="img-fluid d-block d-lg-none"
                      alt="pitech"
                    />
                    <img
                      src="./assets/images/laptop/logo_foot.png"
                      className="img-fluid d-none d-lg-block"
                      alt="pitech"
                    />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-3 col-xl-3  px-0 menu d-none d-lg-block">
                <h4 className="text-uppercase d-none d-lg-block font-weight-bold text-white">
                  Menu
                </h4>
                <ul className="px-0">
                  <li>
                    <a href="/" className="text-uppercase">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/teache-me-series" className="text-uppercase">
                      Teach me series
                    </a>
                  </li>
                  <li>
                    <a href="/building" className="text-uppercase">
                      Building the future
                    </a>
                  </li>
                  <li>
                    <a href="/iot-hubs" className="text-uppercase">
                      IOT Hub
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="text-uppercase">
                      Explorer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-3 col-xl-3  pl-0 contact">
                <h4 className="text-uppercase d-none d-lg-block font-weight-bold text-white">
                  {lang.office}
                </h4>
                <ul className="pl-0">
                  <li>
                    <div className="address d-flex align-items-center ">
                      <img
                        className="contact-icn"
                        src="./assets/images/mobile/icons/icn-map.png"
                        alt="address"
                      />
                      <p className="text-white mb-0">
                        <span>94 Nguyễn Du, Phường 7,</span>
                        <br />
                        <span>Quận Gò Vấp, TP.HCM</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="email d-flex align-items-center mb-15px">
                      <img
                        className="contact-icn"
                        src="./assets/images/mobile/icons/icn-mail.png"
                        alt="email"
                      />
                      <p className="text-white mb-0 d-md-none">
                        <span>contact@pitech.asia</span>
                      </p>
                      <p className="text-white mb-0 d-none d-lg-block">
                        <span>contact@pistore.asia</span>
                      </p>
                    </div>
                  </li>
                  <li className="d-lg-none">
                    <div className="phone  d-flex align-items-center  ">
                      <img
                        className="contact-icn"
                        src="./assets/images/mobile/icons/icn-phone.png"
                        alt="email"
                      />
                      <p className="text-white mb-0">
                        <span>1900 633 430</span>
                      </p>
                    </div>
                  </li>
                  <li className="d-none d-lg-block">
                    <p className="text-white">
                      MST <span>031416393</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 col-lg-3 col-xl-3 pr-0 ">
                <div className="social-network">
                  <h4 className="text-uppercase d-none d-lg-block font-weight-bold text-white">
                    {lang.contact}
                  </h4>
                  <ul className="px-0 d-block d-lg-none">
                    <li className="d-inline-block ">
                      <a
                        href="https://www.facebook.com/pitech/"
                        target="_blank"
                        className="d-inline-block d-lg-none"
                      >
                        <img
                          src="./assets/images/mobile/icons/icn-fb.png"
                          alt="fb"
                        />
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        href="https://www.youtube.com/channel/UC7fCBx5nsJQrbu5mU3G1E6Q"
                        target="_blank"
                        className="d-lg-none"
                      >
                        <img
                          src="./assets/images/mobile/icons/icn-youtube.png"
                          alt="youtube"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="px-0 d-none d-lg-block">
                    <li className="d-inline-block">
                      <a
                        href="https://www.facebook.com/pitech/"
                        target="_blank"
                      >
                        <img
                          src="./assets/images/laptop/icn/icn-fb.png"
                          alt="facebook"
                        />
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a
                        href="https://www.youtube.com/channel/UC7fCBx5nsJQrbu5mU3G1E6Q"
                        target="_blank"
                      >
                        <img
                          src="./assets/images/laptop/icn/icn-youtube.png"
                          alt="youtube"
                        />
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="mailto: contact@pitech.asia" target="_blank">
                        <img
                          src="./assets/images/laptop/icn/icn-gmail.png"
                          alt="gmail"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <div className="container">
            <p className="text-center">Copyright 2019 by Pitech.asia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Footer);
