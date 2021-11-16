import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const alert = useAlert();

  const showLoading = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  useEffect(() => {
    showLoading();
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "http://localhost:5000/user/login",

      data: {
        email: email,
        password: password,
      },
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then(function (response) {
        console.log(response);
        alert.success("You Have Successfully Logged In!");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        alert.error("There is some Problem here! Try Again.");
        navigate("/login");
      });
  };

  return (
    <div className="container">
      {loading ? (
        <Loader
          type="Bars"
          color="#000"
          secondaryColor="#ff4242"
          height={80}
          width={80}
          className="loader"
          timeout={2000} //3 secs
        />
      ) : (
        <section class="vh-50">
          <div class="container py-5 h-50">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-strong loginCard">
                  <div class="card-body p-5 text-center">
                    <h2 class="mb-5">Log in</h2>
                    <form onSubmit={loginUser}>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="email">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter your Email"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="password">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Enter your Password"
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div class="d-grid gap-3">
                        <button
                          type="submit"
                          class="btn btn-block btn-lg btn-primary"
                        >
                          Login
                        </button>

                        <h6 className="loginLink">
                          If you have not Register.
                          <pre />
                          <a className="registerLink" href="/register">
                            Register Here
                          </a>
                        </h6>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
