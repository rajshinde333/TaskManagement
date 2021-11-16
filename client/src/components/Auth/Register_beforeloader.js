import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setLoading((loading) => !loading);
  };

  useEffect(() => {
    loadData();
  }, []);

  const registerUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "http://localhost:5000/user/register",
      data: {
        name: name,
        email: email,
        password: password,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
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
                <div class="card shadow-2-strong registerCard">
                  <div class="card-body p-5 text-center">
                    <h2 class="mb-5">Register Here</h2>
                    <form onSubmit={registerUser}>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="email">
                          Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Name"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-2">
                        <label class="form-label" for="email">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Email"
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
                          placeholder="Password"
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div class="d-grid gap-3">
                        <button
                          type="submit"
                          class="btn btn-block btn-lg btn-primary"
                        >
                          Register
                        </button>

                        <h6 className="registerLink">
                          If you are already Registerd.
                          <pre />
                          <a className="registerLink" href="/login">
                            Login Here
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
