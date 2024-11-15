import bookIcon from "../assets/images/book-icon.png";

import { FaEllipsisH } from "react-icons/fa";

export default function Advertisement() {
  return (
    <div className="widget">
      <div className="banner medium-opacity bluesh">
        <div className="bg-image"></div>
        <div className="baner-top">
          <span>
            <img alt="" src={bookIcon} />
          </span>
          <FaEllipsisH />
        </div>
        <div className="banermeta">
          <p>create your own favourit page.</p>
          <span>like them all</span>
          <a data-ripple="" title="" href="#">
            start now!
          </a>
        </div>
      </div>
    </div>
  );
}
