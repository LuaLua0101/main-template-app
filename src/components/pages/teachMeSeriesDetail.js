import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";
import axios from "../../utils/axios";
import moment from "moment";
import renderHTML from "react-render-html";

const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, "g"), replace);
};

const TeachMeSeriesDetailPage = props => {
  const [loadButton, setLoadButton] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    let search = new URLSearchParams(props.location.search);
    let id = search.get("id");
    setLoadButton(true);
    axios
      .post("teach-me-series/detail", {
        id
      })
      .then(res => {
        setData(res.data);
      })
      .finally(setLoadButton(false));
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
                    {data && data.title}
                  </h2>
                  <h2 className="breadcum-title d-none d-lg-block">
                    {data && data.title}
                  </h2>
                  <p className="article-desc d-lg-none">
                    {data && data.short_desc}
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
                    <time>
                      {data && moment(data.created_at).format("MMMM D, YYYY")}
                    </time>
                    <div className="view d-flex align-items-center">
                      <img
                        src="./assets/images/mobile/icons/icn-eye.png"
                        alt="views"
                        className="img-fluid"
                      />
                      <span className="text-uppercase">
                        {data && data.view_count}
                      </span>
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
                      <span>{data && data.share_count}</span>
                    </div>
                  </div>
                  {/* Feature img, title, description */}
                  <div className="article-detail">
                    {data && data.content && renderHTML(data.content)}
                  </div>
                </article>
                {/* Sharing  */}
                <div className="sharing">
                  {/* Backend implement here  */}
                  <div className="sharing-box">
                    <div className="d-none d-lg-block caption">
                      Share this...
                    </div>
                    <ul>
                      <li style={{ display: "inline-block" }}>
                        <FacebookShareButton
                          url={"goole.com"}
                          className="Demo__some-network__share-button"
                        >
                          <FacebookIcon size={44} round />
                        </FacebookShareButton>
                      </li>
                      <li style={{ display: "inline-block" }}>
                        <EmailShareButton
                          url={"goole.com"}
                          className="Demo__some-network__share-button"
                        >
                          <EmailIcon size={44} round />
                        </EmailShareButton>
                      </li>
                    </ul>
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
