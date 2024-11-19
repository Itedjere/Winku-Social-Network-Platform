import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { handleApolloErrors, loginSchema } from "../../utilities/utilities";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utilities/graphql_mutations";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginForm() {
  const { handleAuthentication } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [
    loginUser,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (loginError) {
      handleApolloErrors(loginError);
    }

    if (loginData) {
      toast.success("You logged in successfully!");
      handleAuthentication(loginData.login);
    }
  }, [loginError, loginData]);

  const onSubmit = (data) => {
    loginUser({
      variables: {
        loginInfo: { ...data },
      },
    });
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div className="login-reg-bg">
        <div className="log-reg-area sign">
          <h2 className="log-title">Login</h2>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="position-relative">
                <input type="text" id="username" {...register("username")} />
                <label className="control-label" htmlFor="username">
                  Username
                </label>
                <i
                  className={`mtrl-select ${
                    errors.username ? "is-invalid" : ""
                  }`}
                ></i>
              </div>
              {errors.username && (
                <div className="invalid-feedback d-block">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="position-relative">
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
                <label className="control-label" htmlFor="password">
                  Password
                </label>
                <i
                  className={`mtrl-select ${
                    errors.password ? "is-invalid" : ""
                  }`}
                ></i>
              </div>
              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" checked="checked" />
                <i className="check-box"></i>Always Remember Me.
              </label>
            </div>
            <a href="#" title="" className="forgot-pwd">
              Forgot Password?
            </a>
            <div className="submit-btns">
              <button className="mtr-btn signin" type="submit">
                <span>{loginLoading ? "Please wait..." : "Login"}</span>
              </button>{" "}
              <Link to="/register" className="mtr-btn signup">
                <span>Register</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
