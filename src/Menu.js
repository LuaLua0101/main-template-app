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
      <header class="header bg-white grey-shadow">
        <div class="nav-head">
          <div class="container ">
            <nav class="navbar px-0 navbar-expand-md ">
              <a class="navbar-brand" href="/">
                <h1>
                  <img src="./assets/images/mobile/logo_head.png" alt="logo" />
                </h1>
              </a>
              <button
                class="navbar-toggler d-md-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavMobile"
                aria-controls="collapsibleNavMobile"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <img
                    src="./assets/images/mobile/icons/icn-bar.png"
                    class="img-fluid"
                    alt="menu"
                  />
                </span>
              </button>
              <div class="d-none d-md-none d-lg-block w-100 navbar-laptop">
                <div class="d-flex">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class={isActive(1)}>
                      <a
                        class="nav-link px-0"
                        href=""
                        onClick={() => {
                          localStorage.setItem("@menu", 1);
                          props.history.push("/");
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li class={isActive(2)}>
                      <a
                        class="nav-link px-0"
                        href=""
                        onClick={() => {
                          localStorage.setItem("@menu", 2);
                          props.history.push("/teach-me-series");
                        }}
                      >
                        Teach me series
                      </a>
                    </li>
                    <li class={isActive(3)}>
                      <a
                        class="nav-link px-0"
                        href=""
                        onClick={() => {
                          setSelectedMenu(3);
                          props.history.push("/building");
                        }}
                      >
                        Building the future
                      </a>
                    </li>
                    <li class={isActive(4)}>
                      <a
                        class="nav-link px-0"
                        href=""
                        onClick={() => {
                          setSelectedMenu(4);
                          props.history.push("/iot-hub");
                        }}
                      >
                        IOT Hub
                      </a>
                    </li>
                    <li class="nav-item dropdown d-flex align-items-center">
                      <a
                        class="nav-link dropdown-toggle d-flex"
                        href="#"
                        id="exploreLaptop"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="exploreLaptop"
                      >
                        <a class="dropdown-item" href="/related-products">
                          Related product
                        </a>
                        <a class="dropdown-item" href="/application">
                          Application
                        </a>
                        <a class="dropdown-item" href="/press-resources">
                          Press resources
                        </a>
                        <a class="dropdown-item" href="/career">
                          Career
                        </a>
                        <a class="dropdown-item" href="/manuals">
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
        <div class="container navbar py-0">
          <nav class="collapse navbar-collapse" id="collapsibleNavMobile">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/teach-me-series">
                  Teach me series
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/building">
                  Building the future
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/iot-hub">
                  IOT Hub
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center justify-content-center"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <div
                  class="dropdown-menu border-0 text-center"
                  aria-labelledby="dropdownId"
                >
                  <a class="dropdown-item" href="/related-products">
                    Related product
                  </a>
                  <a class="dropdown-item" href="/application">
                    Application
                  </a>
                  <a class="dropdown-item" href="/press-resources">
                    Press resources
                  </a>
                  <a class="dropdown-item" href="/career">
                    Career
                  </a>
                  <a class="dropdown-item" href="/manuals">
                    Manuals
                  </a>
                </div>
              </li>
            </ul>
            {/* <form class="mt-2 mb-4 my-lg-0 search-mobile">
              <input class="form-control mr-sm-2" type="text" />
              <button class="btn my-2 my-sm-0" type="submit">
                <img
                  src="./assets/images/mobile/icons/icn-search.png"
                  alt="search"
                />
              </button>
            </form> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default withRouter(Menu);
