import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

function Header( {onSearch} ) {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
    navigate("/results");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white shadow">
        <div className="container-fluid align-items-center">
          <a className="navbar-brand ms-5 logo" href="/home">
            <img
              src="img/Logo.png"
              className="s-0"
              alt="logo du service Trouve ton artisan de la région Auvergne-Rhône Alpes"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-around nav-list">
              <li
                className={`nav-item fs-4 ${
                  activeLink === "/category/Bâtiment" ? "active" : ""
                }`}
              >
                <Link
                  to={"/category/Bâtiment"}
                  className="nav-link"
                  aria-current="page"
                  onClick={() => handleLinkClick("/category/Bâtiment")}
                >
                  Bâtiment
                </Link>
              </li>
              <li
                className={`nav-item fs-4 ${
                  activeLink === "/category/Services" ? "active" : ""
                }`}
              >
                <Link
                  to={"/category/Services"}
                  className="nav-link"
                  aria-current="page"
                  onClick={() => handleLinkClick("/category/Services")}
                >
                  Services
                </Link>
              </li>
              <li
                className={`nav-item fs-4 ${
                  activeLink === "/category/Fabrication" ? "active" : ""
                }`}
              >
                <Link
                  to={"/category/Fabrication"}
                  className="nav-link"
                  aria-current="page"
                  onClick={() => handleLinkClick("/category/Fabrication")}
                >
                  Fabrication
                </Link>
              </li>
              <li
                className={`nav-item fs-4 ${
                  activeLink === "/category/Alimentation" ? "active" : ""
                }`}
              >
                <Link
                  to={"/category/Alimentation"}
                  className="nav-link"
                  aria-current="page"
                  onClick={() => handleLinkClick("/category/Alimentation")}
                >
                  Alimentation
                </Link>
              </li>
            </ul>
            <form
              className="d-flex border-bottom border-end"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2 border-0 fs-4"
                type="search"
                placeholder="Recherche"
                aria-label="Search"
                onChange={handleSearchChange}
              ></input>
              <button className="btn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
