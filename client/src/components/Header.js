import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Task Management
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/">
                Home
              </a>
              <a class="nav-link" href="/login">
                Login
              </a>
              <a class="nav-link" href="/register">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
