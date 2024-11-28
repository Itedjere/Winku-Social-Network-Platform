import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonProfileFriendList() {
  return (
    <>
      <li className="Skeleton">
        <SkeletonTheme baseColor="#cacaca">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="profilePhoto">
                <Skeleton width="70px" height="70px" circle={true} />
              </div>
              <div className="profileName">
                <Skeleton count={1.5} />
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="callAction">
                <Skeleton height="30px" />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </li>
      <li className="Skeleton">
        <SkeletonTheme baseColor="#cacaca">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="profilePhoto">
                <Skeleton width="70px" height="70px" circle={true} />
              </div>
              <div className="profileName">
                <Skeleton count={1.5} />
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="callAction">
                <Skeleton height="30px" />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </li>
      <li className="Skeleton">
        <SkeletonTheme baseColor="#cacaca">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="profilePhoto">
                <Skeleton width="70px" height="70px" circle={true} />
              </div>
              <div className="profileName">
                <Skeleton count={1.5} />
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="callAction">
                <Skeleton height="30px" />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </li>
      <li className="Skeleton">
        <SkeletonTheme baseColor="#cacaca">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="profilePhoto">
                <Skeleton width="70px" height="70px" circle={true} />
              </div>
              <div className="profileName">
                <Skeleton count={1.5} />
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="callAction">
                <Skeleton height="30px" />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </li>
    </>
  );
}
