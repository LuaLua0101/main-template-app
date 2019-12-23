import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Menu = props => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const isActive = menu => {
    return localStorage.getItem("@menu") === menu
      ? "nav-item dash-link active"
      : "nav-item dash-link";
  };

  return (
    <>
      <header className="header bg-white grey-shadow">
        <div className="nav-head">
          <div className="container ">
            <nav className="navbar px-0 navbar-expand-md ">
              <a className="navbar-brand" href="/">
                <h1>
                  <img src="./assets/images/mobile/logo_head.png" alt="logo" />
                </h1>
              </a>
              <button
                className="navbar-toggler d-md-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavMobile"
                aria-controls="collapsibleNavMobile"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <img
                    src="./assets/images/mobile/icons/icn-bar.png"
                    className="img-fluid"
                    alt="menu"
                  />
                </span>
              </button>
              <div className="d-none d-md-none d-lg-block w-100 navbar-laptop">
                <div className="d-flex">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className={isActive(1)}>
                      <a className="nav-link px-0" href="/">
                        Home
                      </a>
                    </li>
                    <li className={isActive(2)}>
                      <a className="nav-link px-0" href="/teach-me-series">
                        Teach me series
                      </a>
                    </li>
                    <li className={isActive(3)}>
                      <a className="nav-link px-0" href="/building">
                        Building the future
                      </a>
                    </li>
                    <li className={isActive(4)}>
                      <a className="nav-link px-0" href="/iot-hub">
                        IOT Hub
                      </a>
                    </li>
                    <li className="nav-item dropdown d-flex align-items-center">
                      <a
                        className="nav-link dropdown-toggle d-flex"
                        href="#"
                        id="exploreLaptop"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="exploreLaptop"
                      >
                        <a className="dropdown-item" href="/related-products">
                          Related product
                        </a>
                        <a className="dropdown-item" href="/application">
                          Application
                        </a>
                        <a className="dropdown-item" href="/press-resources">
                          Press resources
                        </a>
                        <a className="dropdown-item" href="/career">
                          Career
                        </a>
                        <a className="dropdown-item" href="/manuals">
                          Manuals
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container navbar py-0">
          <nav className="collapse navbar-collapse" id="collapsibleNavMobile">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teach-me-series">
                  Teach me series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/building">
                  Building the future
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/iot-hub">
                  IOT Hub
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-center"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <div
                  className="dropdown-menu border-0 text-center"
                  aria-labelledby="dropdownId"
                >
                  <a className="dropdown-item" href="/related-products">
                    Related product
                  </a>
                  <a className="dropdown-item" href="/application">
                    Application
                  </a>
                  <a className="dropdown-item" href="/press-resources">
                    Press resources
                  </a>
                  <a className="dropdown-item" href="/career">
                    Career
                  </a>
                  <a className="dropdown-item" href="/manuals">
                    Manuals
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default withRouter(Menu);
