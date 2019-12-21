import React from "react";

const ApplicationPage = props => {
  return (
    <>
      <div>
        {/* Application  */}
        <section className="application application-intro">
          <div className="container">
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
                    <div className="card-body pb-0">
                      <h4 className="card-title">NEW UPDATE PACH V4.3</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End application  */}
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line w-100" />
        </div>
        {/* Latest update  */}
        <section className="application-latest-updates">
          <div className="container">
            <h2 className="font-weight-bold text-center center-sp-heading mobile-sub-heading">
              Latest update
            </h2>
            <p className="d-none d-lg-block text-center sub-title">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, facere?
            </p>
            {/* 1 ITEM / ROW  */}
            <div className="row update-block">
              <div className="col-12 col-xl-9">
                <div className="d-none d-lg-block">
                  <h3 className="font-weight-bold">
                    Lorem ipsum dolor sit esuotua ame
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit voluptatum, suscipit dignissimos repudiandae possimus
                    temporibus iusto hic. Cupiditate accusantium molestiae
                    architecto inventore aut expedita impedit quis corrupti
                    veniam veritatis nisi, deleniti officiis rerum aliquid et ab
                    eum animi placeat porro ex autem libero aperiam quas!
                    Quaerat deserunt, fuga assumenda accusamus illo totam quia
                    distinctio a iusto sed quos excepturi!
                  </p>
                  <a href="#" className="learn-more">
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
                {/* Note. Paragraph intro laptop was longer  so this will be display in mobile */}
                <p className="d-block d-lg-none">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euis
                </p>
              </div>
              <div className="col-12 col-xl-3">
                <img
                  className="icn-summarize"
                  src="./assets/images/laptop/icn/updates-green.png"
                  alt="refresh"
                />
                <div className="d-lg-none sub-text">
                  <h3>Lorem ipsum dolor sit esuotua ame</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </p>
                  <a href="#" className="learn-more">
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
            {/* 1 ITEM / ROW  */}
            <div className="row update-block">
              <div className="col-12 col-xl-9">
                <div className="d-none d-lg-block">
                  <h3 className="font-weight-bold">
                    Lorem ipsum dolor sit esuotua ame
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit voluptatum, suscipit dignissimos repudiandae possimus
                    temporibus iusto hic. Cupiditate accusantium molestiae
                    architecto inventore aut expedita impedit quis corrupti
                    veniam veritatis nisi, deleniti officiis rerum aliquid et ab
                    eum animi placeat porro ex autem libero aperiam quas!
                    Quaerat deserunt, fuga assumenda accusamus illo totam quia
                    distinctio a iusto sed quos excepturi!
                  </p>
                  <a href="#" className="learn-more">
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
                {/* Note. Paragraph intro laptop was longer  so this will be display in mobile */}
                <p className="d-block d-lg-none">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euis
                </p>
              </div>
              <div className="col-12 col-xl-3">
                <img
                  className="icn-summarize"
                  src="./assets/images/laptop/icn/icn-plugin.png"
                  alt="refresh"
                />
                <div className="d-lg-none sub-text">
                  <h3>Lorem ipsum dolor sit esuotua ame</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </p>
                  <a href="#" className="learn-more">
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
            {/* 1 ITEM / ROW  */}
            <div className="row update-block">
              <div className="col-12 col-xl-9">
                <div className="d-none d-lg-block">
                  <h3 className="font-weight-bold">
                    Lorem ipsum dolor sit esuotua ame
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit voluptatum, suscipit dignissimos repudiandae possimus
                    temporibus iusto hic. Cupiditate accusantium molestiae
                    architecto inventore aut expedita impedit quis corrupti
                    veniam veritatis nisi, deleniti officiis rerum aliquid et ab
                    eum animi placeat porro ex autem libero aperiam quas!
                    Quaerat deserunt, fuga assumenda accusamus illo totam quia
                    distinctio a iusto sed quos excepturi!
                  </p>
                  <a href="#" className="learn-more">
                    <span>Learn more</span>
                    <span>
                      <img
                        src="./assets/images/mobile/icons/icn-arrow-down-blue.png"
                        alt="learn more"
                      />
                    </span>
                  </a>
                </div>
                {/* Note. Paragraph intro laptop was longer  so this will be display in mobile */}
                <p className="d-block d-lg-none">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euis
                </p>
              </div>
              <div className="col-12 col-xl-3">
                <img
                  className="icn-summarize"
                  src="./assets/images/laptop/icn/icn-apple-watch.png"
                  alt="refresh"
                />
                <div className="d-lg-none sub-text">
                  <h3>Lorem ipsum dolor sit esuotua ame</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </p>
                  <a href="#" className="learn-more">
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
          </div>
        </section>
        {/* End latest update  */}
        <div className="container d-none d-lg-block">
          <hr className="breadcum-line w-100" />
        </div>
        {/* Recent updates  */}
        <section className="recent-updates">
          <div className="container">
            <h2 className="font-weight-bold text-center center-sp-heading mobile-sub-heading">
              Recent update
            </h2>
            <p className="text-center sub-title">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, facere?
            </p>
            {/* Box version  */}
            <div className="d-flex version-container justify-content-between align-items-center ">
              <div className="box-version active d-flex align-items-center justify-content-center">
                v3
              </div>
              <div className="box-version d-flex align-items-center justify-content-center ">
                v2
              </div>
              <div className="box-version d-flex align-items-center justify-content-center ">
                v1
              </div>
            </div>
            {/* Caption  */}
            <div className="caption text-left">
              <h5>Lorem ipsum dolor sit amet, consec</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApplicationPage;
