import React from "react";
function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <p className="navbar-brand">Applekart</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">About</p>
              </li>
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <p className="dropdown-item">All Products</p>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            <form className="cart d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {props.count}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
