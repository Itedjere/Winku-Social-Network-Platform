import friendAvatar9 from "../../assets/images/resources/friend-avatar9.jpg";
import friendAvatar2 from "../../assets/images/resources/friend-avatar2.jpg";
import friendAvatar3 from "../../assets/images/resources/friend-avatar3.jpg";
import friendAvatar4 from "../../assets/images/resources/friend-avatar4.jpg";
import friendAvatar5 from "../../assets/images/resources/friend-avatar5.jpg";
import friendAvatar6 from "../../assets/images/resources/friend-avatar6.jpg";
import friendAvatar7 from "../../assets/images/resources/friend-avatar7.jpg";
import friendAvatar from "../../assets/images/resources/friend-avatar.jpg";
import chatList1 from "../../assets/images/resources/chatlist1.jpg";
import chatList2 from "../../assets/images/resources/chatlist1.jpg";
import { TfiClose, TfiMoreAlt } from "react-icons/tfi";

export default function ProfileFriends() {
  return (
    <div className="widget friend-list stick-widget">
      <h4 className="widget-title">Friends</h4>
      <div id="searchDir"></div>
      <ul id="people-list" className="friendz-list">
        <li>
          <figure>
            <img src={friendAvatar} alt="" />
            <span className="status f-online"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">bucky barnes</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="a0d7c9ced4c5d2d3cfccc4c5d2e0c7cdc1c9cc8ec3cfcd"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar2} alt="" />
            <span className="status f-away"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">Sarah Loren</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="b4d6d5c6dad1c7f4d3d9d5ddd89ad7dbd9"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar3} alt="" />
            <span className="status f-off"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">jason borne</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="1d777c6e72737f5d7a707c7471337e7270"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar4} alt="" />
            <span className="status f-off"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">Cameron diaz</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="bed4dfcdd1d0dcfed9d3dfd7d290ddd1d3"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar5} alt="" />
            <span className="status f-online"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">daniel warber</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="553f34263a3b37153238343c397b363a38"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar6} alt="" />
            <span className="status f-away"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">andrew</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="5933382a36373b193e34383035773a3634"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar7} alt="" />
            <span className="status f-off"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">amy watson</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="5933382a36373b193e34383035773a3634"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar5} alt="" />
            <span className="status f-online"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">daniel warber</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="dbb1baa8b4b5b99bbcb6bab2b7f5b8b4b6"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
        <li>
          <figure>
            <img src={friendAvatar2} alt="" />
            <span className="status f-away"></span>
          </figure>
          <div className="friendz-meta">
            <a href="time-line.html">Sarah Loren</a>
            <i>
              <a
                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="2644475448435566414b474f4a0845494b"
              >
                [email&#160;protected]
              </a>
            </i>
          </div>
        </li>
      </ul>
      <div className="chat-box">
        <div className="chat-head">
          <span className="status f-online"></span>
          <h6>Bucky Barnes</h6>
          <div className="more">
            <TfiMoreAlt />
            <span className="close-mesage">
              <TfiClose />
            </span>
          </div>
        </div>
        <div className="chat-list">
          <ul>
            <li className="me">
              <div className="chat-thumb">
                <img src={chatList1} alt="" />
              </div>
              <div className="notification-event">
                <span className="chat-message-item">
                  Hi James! Please remember to buy the food for tomorrow! I’m
                  gonna be handling the gifts and Jake’s gonna get the drinks
                </span>
                <span className="notification-date">
                  <time
                    datetime="2004-07-24T18:18"
                    className="entry-date updated"
                  >
                    Yesterday at 8:10pm
                  </time>
                </span>
              </div>
            </li>
            <li className="you">
              <div className="chat-thumb">
                <img src={chatList2} alt="" />
              </div>
              <div className="notification-event">
                <span className="chat-message-item">
                  Hi James! Please remember to buy the food for tomorrow! I’m
                  gonna be handling the gifts and Jake’s gonna get the drinks
                </span>
                <span className="notification-date">
                  <time
                    datetime="2004-07-24T18:18"
                    className="entry-date updated"
                  >
                    Yesterday at 8:10pm
                  </time>
                </span>
              </div>
            </li>
            <li className="me">
              <div className="chat-thumb">
                <img src={chatList1} alt="" />
              </div>
              <div className="notification-event">
                <span className="chat-message-item">
                  Hi James! Please remember to buy the food for tomorrow! I’m
                  gonna be handling the gifts and Jake’s gonna get the drinks
                </span>
                <span className="notification-date">
                  <time
                    datetime="2004-07-24T18:18"
                    className="entry-date updated"
                  >
                    Yesterday at 8:10pm
                  </time>
                </span>
              </div>
            </li>
          </ul>
          <form className="text-box">
            <textarea placeholder="Post enter to post..."></textarea>
            <div className="add-smiles">
              <span title="add icon" className="em em-expressionless"></span>
            </div>
            <div className="smiles-bunch">
              <i className="em em---1"></i>
              <i className="em em-smiley"></i>
              <i className="em em-anguished"></i>
              <i className="em em-laughing"></i>
              <i className="em em-angry"></i>
              <i className="em em-astonished"></i>
              <i className="em em-blush"></i>
              <i className="em em-disappointed"></i>
              <i className="em em-worried"></i>
              <i className="em em-kissing_heart"></i>
              <i className="em em-rage"></i>
              <i className="em em-stuck_out_tongue"></i>
            </div>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  );
}
