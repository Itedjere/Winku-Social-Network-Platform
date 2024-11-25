import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  handleApolloErrors,
} from "../utilities/utilities";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../utilities/graphql_mutations";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ProfileChangePassword() {
  const [changePassword] = useMutation(UPDATE_PASSWORD);
  const { logoutUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { profileId } = useParams();

  useEffect(() => {
    if (auth && auth.user?._id !== profileId) {
      navigate(`profile/${auth.user?._id}/change-password`);
    }
  }, [profileId, auth, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const handlePasswordChange = async (formData) => {
    try {
      const { data } = await changePassword({
        variables: {
          passwordInfo: {
            ...formData,
          },
        },
      });

      if (data) {
        toast.success(data.changePassword.message);
        // logout the user. let him login again with new password
        logoutUser();
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };

  return (
    <div class="central-meta">
      <div class="editing-info">
        <h5 class="f-title">
          <i class="ti-lock"></i>Change Password
        </h5>

        <form onSubmit={handleSubmit(handlePasswordChange)}>
          <div class="form-group">
            <div className="position-relative">
              <input type="password" id="input" {...register("new_password")} />
              <label class="control-label" htmlFor="input">
                New password
              </label>
              <i
                class={`mtrl-select ${errors.new_password && "is-invalid"}`}
              ></i>
            </div>
            {errors.new_password && (
              <div className="invalid-feedback d-block">
                {errors.new_password.message}
              </div>
            )}
          </div>
          <div class="form-group">
            <div className="position-relative">
              <input type="password" {...register("confirm_password")} />
              <label class="control-label" htmlFor="input">
                Confirm password
              </label>
              <i
                class={`mtrl-select ${errors.confirm_password && "is-invalid"}`}
              ></i>
            </div>
            {errors.confirm_password && (
              <div className="invalid-feedback d-block">
                {errors.confirm_password.message}
              </div>
            )}
          </div>
          <div class="form-group">
            <div className="position-relative">
              <input type="password" {...register("current_password")} />
              <label class="control-label" htmlFor="input">
                Current password
              </label>
              <i
                class={`mtrl-select ${errors.current_password && "is-invalid"}`}
              ></i>
            </div>
            {errors.current_password && (
              <div className="invalid-feedback d-block">
                {errors.current_password.message}
              </div>
            )}
          </div>
          <a class="forgot-pwd underline" title="" href="#">
            Forgot Password?
          </a>
          <div class="submit-btns">
            <button type="button" class="mtr-btn">
              <span>Cancel</span>
            </button>{" "}
            <button type="submit" class="mtr-btn">
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
