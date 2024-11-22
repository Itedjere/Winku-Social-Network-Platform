import React from "react";

import friendAvatar10 from "../../assets/images/resources/friend-avatar10.jpg";
import userPost from "../../assets/images/resources/user-post.jpg";
import Commet1 from "../../assets/images/resources/comet-1.jpg";
import Commet2 from "../../assets/images/resources/comet-2.jpg";
import Commet3 from "../../assets/images/resources/comet-3.jpg";
import Nearly1 from "../../assets/images/resources/nearly1.jpg";
import Nearly6 from "../../assets/images/resources/nearly6.jpg";
import Page1 from "../../assets/images/resources/page1.jpg";
import {
  FaComments,
  FaCss3,
  FaDribbble,
  FaEye,
  FaFacebook,
  FaGooglePlus,
  FaHtml5,
  FaInstagram,
  FaPinterest,
  FaReply,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { TfiHeart, TfiHeartBroken } from "react-icons/tfi";
import PostForm from "../Post/PostForm";

export default function Post() {
  return (
    <>
      <PostForm />
      <div className="loadMore">
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img src={friendAvatar10} alt="" />
              </figure>
              <div className="friend-name">
                <ins>
                  <a href="time-line.html" title="">
                    Janice Griffith
                  </a>
                </ins>
                <span>published: june,2 2018 19:PM</span>
              </div>
              <div className="post-meta">
                <img src={userPost} alt="" />
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <FaEye />
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <FaComments />
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <TfiHeart />
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <TfiHeartBroken />
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <FaShareAlt className="fa" />
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaHtml5 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaFacebook />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaGooglePlus />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaTwitter />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaCss3 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaDribbble />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaPinterest />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <p>
                    World's most beautiful car in Curabitur{" "}
                    <a href="#" title="">
                      #test drive booking !
                    </a>{" "}
                    the most beatuiful car available in america and the saudia
                    arabia, you can book your test drive by our official website
                  </p>
                </div>
              </div>
            </div>
            <div className="coment-area">
              <ul className="we-comet">
                <li>
                  <div className="comet-avatar">
                    <img src={Commet1} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <span>1 year ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this car is
                      very awesome for the youngster. please vote this car and
                      like our post
                    </p>
                  </div>
                  <ul>
                    <li>
                      <div className="comet-avatar">
                        <img src={Commet2} alt="" />
                      </div>
                      <div className="we-comment">
                        <div className="coment-head">
                          <h5>
                            <a href="time-line.html" title="">
                              alexendra dadrio
                            </a>
                          </h5>
                          <span>1 month ago</span>
                          <a className="we-reply" href="#" title="Reply">
                            <FaReply />
                          </a>
                        </div>
                        <p>
                          yes, really very awesome car i see the features of
                          this car in the official website of{" "}
                          <a href="#" title="">
                            #Mercedes-Benz
                          </a>{" "}
                          and really impressed :-)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="comet-avatar">
                        <img src={Commet3} alt="" />
                      </div>
                      <div className="we-comment">
                        <div className="coment-head">
                          <h5>
                            <a href="time-line.html" title="">
                              Olivia
                            </a>
                          </h5>
                          <span>16 days ago</span>
                          <a className="we-reply" href="#" title="Reply">
                            <FaReply />
                          </a>
                        </div>
                        <p>
                          i like lexus cars, lexus cars are most beautiful with
                          the awesome features, but this car is really
                          outstanding than lexus
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comet-avatar">
                    <img src={Commet1} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Donald Trump
                        </a>
                      </h5>
                      <span>1 week ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster. please vote this video and
                      like our channel
                      <i className="em em-smiley"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#" title="" className="showmore underline">
                    more comments
                  </a>
                </li>
                <li className="post-comment">
                  <div className="comet-avatar">
                    <img src={Commet1} alt="" />
                  </div>
                  <div className="post-comt-box">
                    <form method="post">
                      <textarea placeholder="Post your comment"></textarea>
                      <div className="add-smiles">
                        <span
                          className="em em-expressionless"
                          title="add icon"
                        ></span>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img src={Nearly1} alt="" />
              </figure>
              <div className="friend-name">
                <ins>
                  <a href="time-line.html" title="">
                    Sara Grey
                  </a>
                </ins>
                <span>published: june,2 2018 19:PM</span>
              </div>
              <div className="post-meta">
                <iframe
                  src="https://player.vimeo.com/video/15232052"
                  height="315"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <FaEye />
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <FaComments />
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <TfiHeart />
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <TfiHeartBroken />
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <FaShareAlt className="fa" />
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaHtml5 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaFacebook />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaGooglePlus />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaTwitter />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaCss3 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaDribbble />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaPinterest />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <p>
                    Lonely Cat Enjoying in Summer Curabitur{" "}
                    <a href="#" title="">
                      #mypage
                    </a>{" "}
                    ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                    quam nunc,
                  </p>
                </div>
              </div>
            </div>
            <div className="coment-area">
              <ul className="we-comet">
                <li>
                  <div className="comet-avatar">
                    <img src={Commet1} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <span>1 year ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster. please vote this video and
                      like our channel
                    </p>
                  </div>
                </li>
                <li>
                  <div className="comet-avatar">
                    <img src={Commet2} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Sophia
                        </a>
                      </h5>
                      <span>1 week ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster.
                      <i className="em em-smiley"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#" title="" className="showmore underline">
                    more comments
                  </a>
                </li>
                <li className="post-comment">
                  <div className="comet-avatar">
                    <img src={Commet2} alt="" />
                  </div>
                  <div className="post-comt-box">
                    <form method="post">
                      <textarea placeholder="Post your comment"></textarea>
                      <div className="add-smiles">
                        <span
                          className="em em-expressionless"
                          title="add icon"
                        ></span>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img src={Nearly6} alt="" />
              </figure>
              <div className="friend-name">
                <ins>
                  <a href="time-line.html" title="">
                    Sophia
                  </a>
                </ins>
                <span>published: january,5 2018 19:PM</span>
              </div>
              <div className="post-meta">
                <div className="post-map">
                  <div className="nearby-map">
                    <div id="map-canvas"></div>
                  </div>
                </div>
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <FaEye />
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <FaComments />
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <TfiHeart />
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <TfiHeartBroken />
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <FaShareAlt className="fa" />
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaHtml5 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaFacebook />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaGooglePlus />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaTwitter />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaCss3 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaDribbble />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaPinterest />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <p>
                    Curabitur Lonely Cat Enjoying in Summer{" "}
                    <a href="#" title="">
                      #mypage
                    </a>{" "}
                    ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                    quam nunc,
                  </p>
                </div>
              </div>
            </div>
            <div className="coment-area">
              <ul className="we-comet">
                <li>
                  <div className="comet-avatar">
                    <img src={Commet1} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <span>1 year ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster. please vote this video and
                      like our channel
                    </p>
                  </div>
                </li>
                <li>
                  <div className="comet-avatar">
                    <img src={Commet2} alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Sophia
                        </a>
                      </h5>
                      <span>1 week ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <FaReply />
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster.
                      <i className="em em-smiley"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#" title="" className="showmore underline">
                    more comments
                  </a>
                </li>
                <li className="post-comment">
                  <div className="comet-avatar">
                    <img src={Commet2} alt="" />
                  </div>
                  <div className="post-comt-box">
                    <form method="post">
                      <textarea placeholder="Post your comment"></textarea>
                      <div className="add-smiles">
                        <span
                          className="em em-expressionless"
                          title="add icon"
                        ></span>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img alt="" src={friendAvatar10} />
              </figure>
              <div className="friend-name">
                <ins>
                  <a title="" href="time-line.html">
                    Janice Griffith
                  </a>
                </ins>
                <span>published: june,2 2018 19:PM</span>
              </div>
              <div className="description">
                <p>
                  Curabitur World's most beautiful car in{" "}
                  <a title="" href="#">
                    #test drive booking !
                  </a>{" "}
                  the most beatuiful car available in america and the saudia
                  arabia, you can book your test drive by our official website
                </p>
              </div>
              <div className="post-meta">
                <div className="linked-image align-left">
                  <a title="" href="#">
                    <img alt="" src={Page1} />
                  </a>
                </div>
                <div className="detail">
                  <span>Love Maid - ChillGroves</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...{" "}
                  </p>
                  <a title="" href="#">
                    www.sample.com
                  </a>
                </div>
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <FaEye />
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <FaComments />
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <TfiHeart />
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <TfiHeartBroken />
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <FaShareAlt className="fa" />
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaHtml5 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaFacebook />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaGooglePlus />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaTwitter />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaCss3 />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaDribbble />
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <FaPinterest />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
