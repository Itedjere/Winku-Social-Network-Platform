import userList1 from "../../assets/images/resources/userlist-1.jpg";
import userList2 from "../../assets/images/resources/userlist-2.jpg";
import userList3 from "../../assets/images/resources/userlist-3.jpg";
import userList4 from "../../assets/images/resources/userlist-4.jpg";
import userList5 from "../../assets/images/resources/userlist-5.jpg";
import userList6 from "../../assets/images/resources/userlist-6.jpg";
import userList7 from "../../assets/images/resources/userlist-7.jpg";
import friendAvatar9 from "../../assets/images/resources/friend-avatar9.jpg";

import {
  TfiBell,
  TfiClose,
  TfiComment,
  TfiEye,
  TfiHeart,
  TfiMoreAlt,
} from "react-icons/tfi";

export default function ProfileYourPage() {
  return (
    <div className="widget">
      <h4 className="widget-title">Your page</h4>
      <div className="your-page">
        <figure>
          <a href="#" title="">
            <img src={friendAvatar9} alt="" />
          </a>
        </figure>
        <div className="page-meta">
          <a href="#" title="" className="underline">
            My page
          </a>
          <span>
            <TfiComment />
            <a href="insight.html" title="">
              Messages <em>9</em>
            </a>
          </span>
          <span>
            <TfiBell />
            <a href="insight.html" title="">
              Notifications <em>2</em>
            </a>
          </span>
        </div>
        <div className="page-likes">
          <ul className="nav nav-tabs likes-btn">
            <li className="nav-item">
              <a className="active" href="#link1" data-toggle="tab">
                likes
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="#link2" data-toggle="tab">
                views
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active fade show " id="link1">
              <span>
                <TfiHeart />
                884
              </span>
              <a href="#" title="weekly-likes">
                35 new likes this week
              </a>
              <div className="users-thumb-list">
                <a href="#" title="Anderw" data-toggle="tooltip">
                  <img src={userList1} alt="" />
                </a>
                <a href="#" title="frank" data-toggle="tooltip">
                  <img src={userList2} alt="" />
                </a>
                <a href="#" title="Sara" data-toggle="tooltip">
                  <img src={userList3} alt="" />
                </a>
                <a href="#" title="Amy" data-toggle="tooltip">
                  <img src={userList4} alt="" />
                </a>
                <a href="#" title="Ema" data-toggle="tooltip">
                  <img src={userList5} alt="" />
                </a>
                <a href="#" title="Sophie" data-toggle="tooltip">
                  <img src={userList6} alt="" />
                </a>
                <a href="#" title="Maria" data-toggle="tooltip">
                  <img src={userList7} alt="" />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="link2">
              <span>
                <TfiEye />
                440
              </span>
              <a href="#" title="weekly-likes">
                440 new views this week
              </a>
              <div className="users-thumb-list">
                <a href="#" title="Anderw" data-toggle="tooltip">
                  <img src={userList1} alt="" />
                </a>
                <a href="#" title="frank" data-toggle="tooltip">
                  <img src={userList2} alt="" />
                </a>
                <a href="#" title="Sara" data-toggle="tooltip">
                  <img src={userList3} alt="" />
                </a>
                <a href="#" title="Amy" data-toggle="tooltip">
                  <img src={userList4} alt="" />
                </a>
                <a href="#" title="Ema" data-toggle="tooltip">
                  <img src={userList5} alt="" />
                </a>
                <a href="#" title="Sophie" data-toggle="tooltip">
                  <img src={userList6} alt="" />
                </a>
                <a href="#" title="Maria" data-toggle="tooltip">
                  <img src={userList7} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
