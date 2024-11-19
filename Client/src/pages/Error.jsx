import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const { error } = useRouteError();
  console.error(error);

  return (
    <div className="theme-layout">
      <div className="container-fluid pdng0">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-page">
              <div className="bg-image error"></div>
              <div className="error-meta">
                <h1>whoops!</h1>
                <span>{error.statusText || error.message} </span>
                <a href="/" title="" data-ripple="">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
