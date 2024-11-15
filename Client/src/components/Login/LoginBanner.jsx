import React from "react";
import wink from "../../assets/images/wink.png";

export default function LoginBanner() {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div className="land-featurearea">
        <div className="land-meta">
          <h1>Winku</h1>
          <p>
            Winku is free to use for as long as you want with two active
            projects.
          </p>
          <div className="friend-logo">
            <span>
              <img src={wink} alt="" />
            </span>
          </div>
          <a href="#" title="" className="folow-me">
            Follow Us on
          </a>
        </div>
      </div>
    </div>
  );
}
