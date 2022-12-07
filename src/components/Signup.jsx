import React from "react";
// import { FaUserEdit } from "react-icons/fa";

const Signup = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-secondary ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {/* <FaUserEdit className="me-2" /> */}
        <i className="fa fa-sign-in me-1"></i>
        Register
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Register Here
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
                <span className="fa fa-google me-2 "> Sign up with Google</span>
              </button>
              <button className="w-100 btn btn-primary mb-2">
                <span className="fa fa-facebook me-2 ">
                  {" "}
                  Sign up with Facebook
                </span>
              </button>
              <form>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    Full Name
                  </label>
                  <input type="text" class="form-control" id="exampleInput" />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    UserName
                  </label>
                  <input type="text" class="form-control" id="exampleInput" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
