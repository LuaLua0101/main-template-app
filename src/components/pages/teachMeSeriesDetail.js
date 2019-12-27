import React, { useEffect } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";

const TeachMeSeriesDetailPage = props => {
  useEffect(() => {
    let search = new URLSearchParams(props.location.search);
    let name = search.get("id");
    console.log(name);
  }, []);

  return (
    <>
      <div>
        {/* Breadcum  */}
        <div className="article-breadcum breadcum">
          <div className="overlay-bg" />
          <div className="article-breadcum-text">
            <div className="container text-center ">
              <div className="row">
                <div className="col-12 col-lg-12 col-xl-12">
                  {/* As number of words in laptop & mobile is different so 2 tags of h2 here  */}
                  <h2 className="breadcum-title d-lg-none">
                    Lorem ipsum dolor sit amet consectetur.
                  </h2>
                  <h2 className="breadcum-title d-none d-lg-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    odit aut velit illo, repellendus magni reprehenderit
                    consequatur, molestiae, assumenda quia culpa quidem enim
                    nesciunt delectus!
                  </h2>
                  <p className="article-desc d-lg-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, nostrum perspiciatis. Totam saepe asperiores
                    necessitatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main article  */}
        <section className="main-article">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 feature-iot-hub">
                <article className="article-box border-bottom-0">
                  {/* Views, date, comments VISIBLE ON MOBILE */}
                  <div className="article-brief-info d-flex align-items-center">
                    <time>December 25, 2019</time>
                    <div className="view d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-eye.png"
                        alt="views"
                        className="img-fluid"
                      />
                      <span className="text-uppercase">1.2k</span>
                    </div>
                    <div className="comments d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-chat.png"
                        alt="comment"
                        className="img-fluid"
                      />
                      <span>12</span>
                    </div>
                    <div className="share d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-share.png"
                        alt="share"
                        className="img-fluid"
                      />
                      <span>302</span>
                    </div>
                  </div>
                  {/* Feature img, title, description */}
                  <div className="article-detail">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div className="img-box">
                        <img
                          className="img-fluid thumbnail"
                          src="./assets/images/laptop/article/tech.png"
                          alt="article"
                        />
                        <img
                          className="play-btn"
                          src="./assets/images/mobile/icons/icn-play.png"
                          alt="play"
                        />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="img-box">
                        <img
                          className="img-fluid thumbnail"
                          src="./assets/images/laptop/article/world-control-clipping.png"
                          alt="article"
                        />
                        <img
                          className="play-btn"
                          src="./assets/images/mobile/icons/icn-play.png"
                          alt="play"
                        />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, cons ectetuer adipisc ing
                        elit, sed dia nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex veea commodo
                        consequat.
                      </p>
                    </a>
                  </div>
                </article>
                {/* Sharing  */}
                <div className="sharing">
                  {/* Backend implement here  */}
                  <div className="sharing-box">
                    <div className="d-none d-lg-block caption">
                      Share this...
                    </div>
                    <FacebookShareButton
                      url={"goole.com"}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={44} round />
                    </FacebookShareButton>
                    <EmailShareButton
                      url={"goole.com"}
                      body="body"
                      className="Demo__some-network__share-button"
                    >
                      <EmailIcon size={44} round />
                    </EmailShareButton>
                  </div>
                </div>
                {/* // Sharing  */}
              </div>
            </div>
          </div>
        </section>
        <section className="comment-box">
          <div className="container">
            <div className="caption">Leave a reply</div>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" custom-input form-control"
                  placeholder="Name"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className=" custom-input form-control"
                  placeholder="Email"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control custom-input "
                  placeholder="Message"
                  name="message"
                  id="msg"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn submit-btn text-capitalize">
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeachMeSeriesDetailPage;
