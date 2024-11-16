import React from "react";

export default function ProfileChangePassword() {
  return (
    <div class="central-meta">
      <div class="editing-info">
        <h5 class="f-title">
          <i class="ti-lock"></i>Change Password
        </h5>

        <form method="post">
          <div class="form-group">
            <input type="password" id="input" required="required" />
            <label class="control-label" htmlFor="input">
              New password
            </label>
            <i class="mtrl-select"></i>
          </div>
          <div class="form-group">
            <input type="password" required="required" />
            <label class="control-label" htmlFor="input">
              Confirm password
            </label>
            <i class="mtrl-select"></i>
          </div>
          <div class="form-group">
            <input type="password" required="required" />
            <label class="control-label" htmlFor="input">
              Current password
            </label>
            <i class="mtrl-select"></i>
          </div>
          <a class="forgot-pwd underline" title="" href="#">
            Forgot Password?
          </a>
          <div class="submit-btns">
            <button type="button" class="mtr-btn">
              <span>Cancel</span>
            </button>
            <button type="button" class="mtr-btn">
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
