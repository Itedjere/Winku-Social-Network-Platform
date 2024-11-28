import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import photo1 from "../assets/images/resources/photo1.jpg";
import photo2 from "../assets/images/resources/photo2.jpg";
import photo3 from "../assets/images/resources/photo3.jpg";
import photo4 from "../assets/images/resources/photo4.jpg";
import photo5 from "../assets/images/resources/photo5.jpg";
import photo6 from "../assets/images/resources/photo6.jpg";
import photo7 from "../assets/images/resources/photo7.jpg";
import photo8 from "../assets/images/resources/photo8.jpg";
import photo9 from "../assets/images/resources/photo9.jpg";
import photo10 from "../assets/images/resources/photo10.jpg";
import photo11 from "../assets/images/resources/photo11.jpg";
import photo12 from "../assets/images/resources/photo12.jpg";
import photo13 from "../assets/images/resources/photo13.jpg";

export default function ProfilePhotos() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="central-meta">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <ul className="photos">
          <li>
            <a className="strip" href={photo2}>
              <img src={photo2} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo3}>
              <img src={photo3} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo4}>
              <img src={photo4} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo5}>
              <img src={photo5} alt="Just another day" />
            </a>
          </li>

          <li>
            <a className="strip" href={photo6}>
              <img src={photo6} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo7}>
              <img src={photo7} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo8}>
              <img src={photo8} alt="Just another day" />
            </a>
          </li>

          <li>
            <a className="strip" href={photo12}>
              <img src={photo12} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo10}>
              <img src={photo10} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo11}>
              <img src={photo11} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo1}>
              <img src={photo1} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo9}>
              <img src={photo9} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo12}>
              <img src={photo12} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo6}>
              <img src={photo6} alt="Just another day" />
            </a>
          </li>
          <li>
            <a className="strip" href={photo13}>
              <img src={photo13} alt="Just another day" />
            </a>
          </li>
        </ul>
      </LightGallery>
      <div className="lodmore">
        <button className="btn-view btn-load-more"></button>
      </div>
    </div>
  );
}
