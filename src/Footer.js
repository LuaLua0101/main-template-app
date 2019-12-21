import React from "react";
import { withRouter } from "react-router-dom";

const Footer = props => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-3 col-xl-3 px-0 align-self-center">
              <div class="logo ">
                <a href="#">
                  <img
                    src="./assets/images/mobile/logo-foot.png"
                    class="img-fluid d-block d-lg-none"
                    alt="pitech"
                  />
                  <img
                    src="./assets/images/laptop/logo_foot.png"
                    class="img-fluid d-none d-lg-block"
                    alt="pitech"
                  />
                </a>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3 col-xl-3  px-0 menu d-none d-lg-block">
              <h4 class="text-uppercase d-none d-lg-block font-weight-bold text-white">
                Menu
              </h4>
              <ul class="px-0">
                <li>
                  <a href="/" class="text-uppercase">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/teache-me-series" class="text-uppercase">
                    Teach me series
                  </a>
                </li>
                <li>
                  <a href="/building" class="text-uppercase">
                    Building the future
                  </a>
                </li>
                <li>
                  <a href="/iot-hub" class="text-uppercase">
                    IOT Hub
                  </a>
                </li>
                <li>
                  <a href="#top" class="text-uppercase">
                    Explorer
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-3 col-xl-3  pl-0 contact">
              <h4 class="text-uppercase d-none d-lg-block font-weight-bold text-white">
                Văn phòng công ty
              </h4>
              <ul class="pl-0">
                <li>
                  <div class="address d-flex align-items-center ">
                    <img
                      class="contact-icn"
                      src="./assets/images/mobile/icons/icn-map.png"
                      alt="address"
                    />
                    <p class="text-white mb-0">
                      <span>94 Nguyễn Du, Phường 7,</span>
                      <br />
                      <span>Quận Gò Vấp, TP.HCM</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="email d-flex align-items-center mb-15px">
                    <img
                      class="contact-icn"
                      src="./assets/images/mobile/icons/icn-mail.png"
                      alt="email"
                    />
                    <p class="text-white mb-0 d-md-none">
                      <span>contact@pitech.asia</span>
                    </p>
                    <p class="text-white mb-0 d-none d-lg-block">
                      <span>contact@pistore.asia</span>
                    </p>
                  </div>
                </li>
                <li class="d-lg-none">
                  <div class="phone  d-flex align-items-center  ">
                    <img
                      class="contact-icn"
                      src="./assets/images/mobile/icons/icn-phone.png"
                      alt="email"
                    />
                    <p class="text-white mb-0">
                      <span>1900 633 430</span>
                    </p>
                  </div>
                </li>
                <li class="d-none d-lg-block">
                  <p class="text-white">
                    MST <span>031416393</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-3 col-xl-3 pr-0 ">
              <div class="social-network">
                <h4 class="text-uppercase d-none d-lg-block font-weight-bold text-white">
                  Contact
                </h4>
                <ul class="px-0 d-block d-lg-none">
                  <li class="d-inline-block ">
                    <a
                      href="#"
                      target="_blank"
                      class="d-inline-block d-lg-none"
                    >
                      <img
                        src="./assets/images/mobile/icons/icn-fb.png"
                        alt="fb"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="#" target="_blank" class="d-lg-none">
                      <img
                        src="./assets/images/mobile/icons/icn-youtube.png"
                        alt="youtube"
                      />
                    </a>
                  </li>
                </ul>
                <ul class="px-0 d-none d-lg-block">
                  <li class="d-inline-block">
                    <a href="#" target="_blank">
                      <img
                        src="./assets/images/laptop/icn/icn-fb.png"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="#" target="_blank">
                      <img
                        src="./assets/images/laptop/icn/icn-youtube.png"
                        alt="youtube"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
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
      <div class="copyright">
        <div class="container">
          <p class="text-center">Copyright 2019 by Pitech.asia</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Footer);
