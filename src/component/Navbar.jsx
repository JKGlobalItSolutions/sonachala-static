import React from "react";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/navimg/navlogo.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1030,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Link>

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

          <div
            className="collapse navbar-collapse justify-content-center gap-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/training">
                  TRAINING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/Portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/Pricing">
                  PRICING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fw-bold" to="/Partner">
                  PARTNER WITH US
                </Link>
              </li>

              {/* Dropdown: PRODUCTS */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: "#007f4f", fontWeight: "bold" }}
                >
                  PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Booking"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Booking Engine
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ChannelManager"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Channel Manager
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/ReputationManagement"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Marketinganalyis"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Market Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="Webdesigbhosting"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Web Design & Hosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Propertymanage"
                      style={{ fontWeight: "bold", color: "#007f4f" }}
                    >
                      Property Management System
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dropdown: SERVICES */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-success fw-bold"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  SERVICES
                </a>

                <ul
                  className="dropdown-menu "
                  style={{
                    border: "none",
                    padding: "1",
                  }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Hotelauditing"
                      style={{ color: "#038A5E", fontWeight: "bold" }}
                    >
                      Hotel Auditing Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Hotelconsulting"
                      style={{ color: "#038A5E", fontWeight: "bold" }}
                    >
                      Hotel Consulting Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Onetime"
                      style={{ color: "#038A5E", fontWeight: "bold" }}
                    >
                      One Time OTA Live
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Revenue"
                      style={{ color: "#038A5E", fontWeight: "bold" }}
                    >
                      Revenue Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Digitalmark"
                      style={{ color: "#038A5E", fontWeight: "bold" }}
                    >
                      Digital Marketing Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center text-end  justify-content-end ms-lg-3">
              <FaHeadset size={35} color="#800000" className="p-1" />
              <div className="me-2 text-end">
                <small className="d-inline-block fw-semibold bg-success text-white rounded-circle px-2 py-1 shadow-sm">
                  Call Us
                </small>

                <span
                  className="d-block fw-bold text-nowrap"
                  style={{ fontSize: "0.9rem" }}
                >
                  8608600772
                </span>
                <span
                  className="d-block fw-bold text-nowrap"
                  style={{ fontSize: "0.9rem" }}
                >
                  8608600778
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
