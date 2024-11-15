import React from "react";
import logo from "../../assets/images/logo.png";
import { TfiApple, TfiMapAlt, TfiMobile } from "react-icons/tfi";
import {
  FaAndroid,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaWindows,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="widget">
              <div className="foot-logo">
                <div className="logo">
                  <a href="index-2.html" title="">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <p>
                  The trio took this simple idea and built it into the world’s
                  leading carpooling platform.
                </p>
              </div>
              <ul className="location">
                <li>
                  <TfiMapAlt />
                  <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                </li>
                <li>
                  <TfiMobile />
                  <p>+1-56-346 345</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="widget">
              <div className="widget-title">
                <h4>follow</h4>
              </div>
              <ul className="list-style">
                <li>
                  <FaFacebookSquare />{" "}
                  <a href="https://web.facebook.com/shopcircut/" title="">
                    facebook
                  </a>
                </li>
                <li>
                  <FaTwitterSquare />
                  <a href="https://twitter.com/login?lang=en" title="">
                    twitter
                  </a>
                </li>
                <li>
                  <FaInstagram />
                  <a href="https://www.instagram.com/?hl=en" title="">
                    instagram
                  </a>
                </li>
                <li>
                  <FaGooglePlusSquare />{" "}
                  <a href="https://plus.google.com/discover" title="">
                    Google+
                  </a>
                </li>
                <li>
                  <FaPinterestSquare />{" "}
                  <a href="https://www.pinterest.com/" title="">
                    Pintrest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="widget">
              <div className="widget-title">
                <h4>Navigate</h4>
              </div>
              <ul className="list-style">
                <li>
                  <a href="about.html" title="">
                    about us
                  </a>
                </li>
                <li>
                  <a href="contact.html" title="">
                    contact us
                  </a>
                </li>
                <li>
                  <a href="terms.html" title="">
                    terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    RSS syndication
                  </a>
                </li>
                <li>
                  <a href="sitemap.html" title="">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="widget">
              <div className="widget-title">
                <h4>useful links</h4>
              </div>
              <ul className="list-style">
                <li>
                  <a href="#" title="">
                    leasing
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    submit route
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    how does it work?
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    agent listings
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    view All
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="widget">
              <div className="widget-title">
                <h4>download apps</h4>
              </div>
              <ul className="colla-apps">
                <li>
                  <a href="https://play.google.com/store?hl=en" title="">
                    <FaAndroid />
                    android
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/lae/ios/app-store/" title="">
                    <TfiApple />
                    iPhone
                  </a>
                </li>
                <li>
                  <a href="https://www.microsoft.com/store/apps" title="">
                    <FaWindows />
                    Windows
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
