import React, { useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { handleApolloErrors, registerSchema } from "../../utilities/utilities";
import { REGISTER_USER } from "../../utilities/graphql_mutations";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { handleAuthentication } = useContext(AuthContext);

  const [
    registerUser,
    {
      data: registrationData,
      loading: registrationLoading,
      error: registrationError,
    },
  ] = useMutation(REGISTER_USER);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (registrationError) {
      handleApolloErrors(registrationError);
    }

    if (registrationData) {
      toast.success("You registered successfully!");
      handleAuthentication(registrationData.signup);
    }
  }, [registrationError, registrationData]);

  const onSubmit = (data) => {
    // call the registerUser Method
    registerUser({
      variables: {
        signupInfo: {
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          gender: data.gender,
          username: data.username,
          password: data.password,
        },
      },
    });
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div className="login-reg-bg">
        <div className="log-reg-area reg">
          <h2 className="log-title">Register</h2>
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
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <div className="position-relative">
                    <input
                      type="text"
                      id="firstname"
                      {...register("firstname")}
                    />
                    <label className="control-label" htmlFor="firstname">
                      First Name
                    </label>
                    <i
                      className={`mtrl-select ${
                        errors.firstname && "is-invalid"
                      }`}
                    ></i>
                  </div>
                  {errors.firstname && (
                    <div className="invalid-feedback d-block">
                      {errors.firstname.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <div className="position-relative">
                    <input
                      type="text"
                      id="lastname"
                      {...register("lastname")}
                    />
                    <label className="control-label" htmlFor="lastname">
                      Last Name
                    </label>
                    <i
                      className={`mtrl-select ${
                        errors.lastname && "is-invalid"
                      }`}
                    ></i>
                  </div>
                  {errors.lastname && (
                    <div className="invalid-feedback d-block">
                      {errors.lastname.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="position-relative">
                <input type="text" id="username" {...register("username")} />
                <label className="control-label" htmlFor="username">
                  User Name
                </label>
                <i
                  className={`mtrl-select ${errors.username && "is-invalid"}`}
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
                  className={`mtrl-select ${errors.password && "is-invalid"}`}
                ></i>
              </div>
              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-radio">
              <div className="radio">
                <label>
                  <input type="radio" {...register("gender")} value="MALE" />
                  <i className="check-box"></i>Male
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" {...register("gender")} value="FEMALE" />
                  <i className="check-box"></i>Female
                </label>
              </div>
            </div>
            {errors.gender && (
              <div className="invalid-feedback d-block mb-1">
                {errors.gender.message}
              </div>
            )}
            <div className="form-group">
              <div className="position-relative">
                <input type="text" {...register("email")} id="email" />
                <label className="control-label" htmlFor="email">
                  Email Address
                </label>
                <i
                  className={`mtrl-select ${errors.email && "is-invalid"}`}
                ></i>
              </div>
              {errors.email && (
                <div className="invalid-feedback d-block">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" {...register("terms")} />
                <i className="check-box"></i>Accept Terms & Conditions ?
              </label>
              {errors.terms && (
                <div className="invalid-feedback d-block">
                  {errors.terms.message}
                </div>
              )}
            </div>
            <Link to="/login" title="" className="already-have">
              Already have an account
            </Link>
            <div className="submit-btns">
              <button className="mtr-btn signup" type="submit">
                <span>
                  {registrationLoading ? "Please wait..." : "Register"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
