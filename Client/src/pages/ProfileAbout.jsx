import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { GET_USER_INFO } from "../utilities/graphql_queries";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ProfileAbout() {
  const { profileId } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_USER_INFO, {
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
        <div className="row mt-2">
          <div className="col-12">
            {error && <p>Sorry an error occured: {error.message}</p>}
          </div>
        </div>
        {loading && (
          <div className="row mt-2">
            <div className="col-4">
              <SkeletonTheme height="25px">
                <Skeleton count={5} />
              </SkeletonTheme>
            </div>
            <div className="col-8">
              <Skeleton width="100%" height="140px" />
            </div>
          </div>
        )}
        {data && (
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
                    {data.user?.firstname} {data.user?.lastname}
                  </li>
                  <li>
                    <TfiMapAlt />
                    {data.user?.city && data.user?.state && data.user?.country
                      ? `live in ${data.user?.city} ${data.user?.state} ${data.user?.country}`
                      : "Not set yet"}
                  </li>
                  <li>
                    <TfiMobile />
                    {data.user?.phone || "Not set yet"}
                  </li>
                  <li>
                    <TfiEmail />
                    {data.user?.email || "Not set yet"}
                  </li>
                  <li>
                    <TfiWorld />
                    {data.user?.website || "Not set yet"}
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="location" role="tabpanel">
                <div className="location-map">
                  <div id="map-canvas"></div>
                </div>
              </div>
              <div className="tab-pane fade" id="interest" role="tabpanel">
                {data.user?.interests.length === 0 ? (
                  <p>Not yet set</p>
                ) : (
                  <ul className="basics">
                    {data.user?.interests.map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="tab-pane fade" id="lang" role="tabpanel">
                {data.user?.languages.length === 0 ? (
                  <p>Not yet set</p>
                ) : (
                  <ul className="basics">
                    {data.user?.languages.map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
