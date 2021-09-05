import React, { useContext } from "react";

import { googleSignIn, EmailPasswordLogin } from "../Auth/Auth";
import stateContext from "../context/context";
import { useHistory } from "react-router-dom";
const Login = () => {
  //context
  const {
    handleuserName,
    handleuserId,
    handleEmail,
    handlePassword,
    Email,
    Password,
  } = useContext(stateContext);
  const history = useHistory();

  var setUserDetails = (user) => {
    handleuserId(user.uid);
    handleuserName(user.displayName ?? user.email);
    history.push("/Home");
  };
  //Handling Functions
  var handleEmailAndPasswordSubmit = async (e) => {
    e.preventDefault();
    if (
      Email === "" ||
      Password === "" ||
      Email === null ||
      Password === null
    ) {
      window.alert("Invalid Credentials");
      return;
    }
    const user = await EmailPasswordLogin(Email, Password);
    setUserDetails(user);
  };

  var handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const user = await googleSignIn();
    setUserDetails(user);
  };

  //rendering
  return (
    <section className="vh-100 vw-50" style={{ backgroundColor: "#508bfc" }}>
      <div className=" py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-3  ">
                <div className="text-center">
                  <h3 className="mb-3">Sign in</h3>
                </div>
                <form className="mb-2 ">
                  <div className="form-group mb-2">
                    <label htmlFor="InputEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={Email}
                      id="InputEmail"
                      onChange={(e) => handleEmail(e.target.value)}
                    />
                    <small className="form-text">
                      We'll never share your info.
                    </small>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      value={Password}
                      className="form-control"
                      id="Password"
                      onChange={(e) => handlePassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      onClick={(e) => handleEmailAndPasswordSubmit(e)}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-around">
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      onClick={(e) => handleGoogleSignIn(e)}
                    >
                      <i className="fab fa-google me-2"></i> Sign in with google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
