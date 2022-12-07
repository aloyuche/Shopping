import React from "react";
import { FaSignInAlt, FaUserLock } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary mx-3 my-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="fa fa-sign-in me-2"></i> Log In
      </button>
      {/* 
<!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Sign in here
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button className="w-100 btn btn-primary mb-2">
                <span className="fa fa-google me-2 "> Sign in with Google</span>
              </button>
              <button className="w-100 btn btn-primary mb-2">
                <span className="fa fa-facebook me-2 ">
                  {" "}
                  Sign in with Facebook
                </span>
              </button>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label flex px-2"
                  >
                    <FaSignInAlt className="me-2" /> Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div clasNames="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label flex px-2 "
                  >
                    <FaUserLock className="me-2" /> Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
