import React from "react";
import {
  TfiEmail,
  TfiFacebook,
  TfiInfoAlt,
  TfiMapAlt,
  TfiMobile,
  TfiTwitter,
  TfiUser,
  TfiWorld,
} from "react-icons/tfi";

export default function ProfileAbout() {
  return (
    <div className="central-meta">
      <div className="about">
        <div className="personal">
          <h5 className="f-title">
            <TfiInfoAlt /> Personal Info
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="d-flex flex-row mt-2">
          <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
            <li className="nav-item">
              <a href="#basic" className="nav-link active" data-toggle="tab">
                Basic info
              </a>
            </li>
            <li className="nav-item">
              <a href="#location" className="nav-link" data-toggle="tab">
                location
              </a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link" data-toggle="tab">
                work and education
              </a>
            </li>
            <li className="nav-item">
              <a href="#interest" className="nav-link" data-toggle="tab">
                interests
              </a>
            </li>
            <li className="nav-item">
              <a href="#lang" className="nav-link" data-toggle="tab">
                languages
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="basic">
              <ul className="basics">
                <li>
                  <TfiUser />
                  sarah grey
                </li>
                <li>
                  <TfiMapAlt />
                  live in Dubai
                </li>
                <li>
                  <TfiMobile />
                  +1-234-345675
                </li>
                <li>
                  <TfiEmail />
                  <a
                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="3c4553494e515d55507c59515d5550125f5351"
                  >
                    [email&#160;protected]
                  </a>
                </li>
                <li>
                  <TfiWorld />
                  www.yoursite.com
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="location" role="tabpanel">
              <div className="location-map">
                <div id="map-canvas"></div>
              </div>
            </div>
            <div className="tab-pane fade" id="work" role="tabpanel">
              <div>
                <a href="#" title="">
                  Envato
                </a>
                <p>work as autohr in envato themeforest from 2013</p>
                <ul className="education">
                  <li>
                    <TfiFacebook /> BSCS from Oxford University
                  </li>
                  <li>
                    <TfiTwitter /> MSCS from Harvard Unversity
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="interest" role="tabpanel">
              <ul className="basics">
                <li>Footbal</li>
                <li>internet</li>
                <li>photography</li>
              </ul>
            </div>
            <div className="tab-pane fade" id="lang" role="tabpanel">
              <ul className="basics">
                <li>english</li>
                <li>french</li>
                <li>spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
