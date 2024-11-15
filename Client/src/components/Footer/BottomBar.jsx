import React from "react";
import creditCards from "../../assets/images/credit-cards.png";

export default function BottomBar() {
  return (
    <div className="bottombar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="copyright">
              <a target="_blank" href="https://www.templateshub.net">
                Templates Hub
              </a>
            </span>
            <i>
              <img src={creditCards} alt="" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
