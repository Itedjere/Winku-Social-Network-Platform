import React, { useEffect } from "react";
import friendAvatar9 from "../assets/images/resources/friend-avatar9.jpg";
import nearly1 from "../assets/images/resources/nearly1.jpg";
import nearly2 from "../assets/images/resources/nearly2.jpg";
import nearly3 from "../assets/images/resources/nearly3.jpg";
import nearly4 from "../assets/images/resources/nearly4.jpg";
import nearly5 from "../assets/images/resources/nearly5.jpg";
import nearly6 from "../assets/images/resources/nearly6.jpg";
import SkeletonProfileFriendList from "../components/Skeletons/SkeletonProfileFriendList";
import { useQuery } from "@apollo/client";
import { GET_USER_FRIENDS } from "../utilities/graphql_queries";
import FriendItem from "../components/Profile/FriendItem";
import { useParams } from "react-router-dom";

export default function ProfileFriends() {
  const { profileId } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_USER_FRIENDS, {
    variables: {
      profileId,
    },
  });

  useEffect(() => {
    // Refetch Profile Id
    if (profileId) {
      refetch();
    }
  }, [profileId, refetch]);

  return (
    <div className="central-meta">
      <div className="frnds">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="active" href="#frends" data-toggle="tab">
              My Friends
            </a>{" "}
            <span>{loading || error ? 0 : data.friends.length}</span>
          </li>
          <li className="nav-item">
            <a className="" href="#frends-req" data-toggle="tab">
              Friend Requests
            </a>
            <span>60</span>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active fade show " id="frends">
            <ul className="nearby-contct">
              {loading && <SkeletonProfileFriendList />}
              {error && (
                <li>
                  <div className="nearly-pepls">
                    <p>An error occurred: {error.message}</p>
                  </div>
                </li>
              )}
              {data &&
                data.friends.map((friendship) => (
                  <FriendItem key={friendship._id} friend={friendship} />
                ))}
            </ul>
            <div className="lodmore">
              <button className="btn-view btn-load-more"></button>
            </div>
          </div>
          <div className="tab-pane fade" id="frends-req">
            <ul className="nearby-contct">
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly5} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        Amy watson
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly1} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        sophia Gate
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly6} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        caty lasbo
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={friendAvatar9} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        jhon kates
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly2} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        sara grey
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly4} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        Sara grey
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={nearly3} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        Sexy cat
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="nearly-pepls">
                  <figure>
                    <a href="time-line.html" title="">
                      <img src={friendAvatar9} alt="" />
                    </a>
                  </figure>
                  <div className="pepl-info">
                    <h4>
                      <a href="time-line.html" title="">
                        jhon kates
                      </a>
                    </h4>
                    <span>ftv model</span>
                    <a
                      href="#"
                      title=""
                      className="add-butn more-action"
                      data-ripple=""
                    >
                      delete Request
                    </a>
                    <a href="#" title="" className="add-butn" data-ripple="">
                      Confirm
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <button className="btn-view btn-load-more"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
