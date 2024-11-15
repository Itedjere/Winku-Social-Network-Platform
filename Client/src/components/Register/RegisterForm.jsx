import React from "react";

export default function RegisterForm() {
  return (
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div class="login-reg-bg">
        <div class="log-reg-area reg">
          <h2 class="log-title">Register</h2>
          <p>
            Don’t use Winku Yet?{" "}
            <a href="#" title="">
              Take the tour
            </a>{" "}
            or{" "}
            <a href="#" title="">
              Join now
            </a>
          </p>
          <form method="post">
            <div class="form-group">
              <input type="text" required="required" />
              <label class="control-label" htmlFor="input">
                First & Last Name
              </label>
              <i class="mtrl-select"></i>
            </div>
            <div class="form-group">
              <input type="text" required="required" />
              <label class="control-label" htmlFor="input">
                User Name
              </label>
              <i class="mtrl-select"></i>
            </div>
            <div class="form-group">
              <input type="password" required="required" />
              <label class="control-label" htmlFor="input">
                Password
              </label>
              <i class="mtrl-select"></i>
            </div>
            <div class="form-radio">
              <div class="radio">
                <label>
                  <input type="radio" name="radio" checked="checked" />
                  <i class="check-box"></i>Male
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="radio" />
                  <i class="check-box"></i>Female
                </label>
              </div>
            </div>
            <div class="form-group">
              <input type="text" required="required" />
              <label class="control-label" htmlFor="input">
                <a
                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                  class="__cf_email__"
                  data-cfemail="6c29010d05002c"
                >
                  [email&#160;protected]
                </a>
              </label>
              <i class="mtrl-select"></i>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" checked="checked" />
                <i class="check-box"></i>Accept Terms & Conditions ?
              </label>
            </div>
            <a href="#" title="" class="already-have">
              Already have an account
            </a>
            <div class="submit-btns">
              <button class="mtr-btn signup" type="button">
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
