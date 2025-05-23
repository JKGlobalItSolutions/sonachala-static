import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/footer/logo1.png";
// import explore from "../assets/footer/exploreimg.png";

import componislogo from "../assets/footer/footerimg.png";

import smedia1 from "../assets/footer/smedia1.png";
import smedia2 from "../assets/footer/smedia2.png";
import smedia3 from "../assets/footer/smedia3.png";
import smedia4 from "../assets/footer/smedia4.png";
import smedia5 from "../assets/footer/smedia5.png";

const Footer = () => {
  return (
   

    <footer className="bg-dark text-white pt-4 pb-0">
      <div className="container-fluid">
        <div className="row text-center text-md-start align-items-start">
          {/* Logo */}
          <div className="col-lg-6 mt-0 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start mb-0">

              <img
                src={logo}
                alt="Logo"
                width="500"
                height="300"
                className="rounded-5"
              />

               {/* <img
                src={explore}
                alt="Logo"
                width="150"
                height="200"
                className="rounded-5"
              /> */}
              
            </div>
          </div>

          {/* Explore, Company, Help + Social/Logos */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
                <p className="mb-1 small">India Services</p>
                <p className="mb-1 small">IRCTC Agent</p>
                <p className="mb-1 small">No. 1 B2B</p>
              </div>
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Company</h6>
                <p className="mb-1 small">About Us</p>
                <p className="mb-1 small">GST/ MSME Certified</p>
                <p className="mb-1 small">Career</p>
              </div>
              <div className="col-4">
                <h6 className="text-uppercase fw-bold mb-3">Help</h6>
                <p className="mb-1 small">Privacy Policy</p>
                <p className="mb-1 small">Terms & Conditions</p>
                <p className="mb-1 small">Support</p>
              </div>
            </div>

            {/* Combined Social Media & Company Logos in one row */}
            <div className="mt-3 d-flex flex-wrap justify-content-center justify-content-md-between align-items-center ">
              {/* Social Media Icons */}
              <div className="d-flex ">
                <Link to="/linkedin">
                  <img
                    src={smedia1}
                    alt="LinkedIn"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/instagram">
                  <img
                    src={smedia2}
                    alt="Instagram"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/twitter">
                  <img
                    src={smedia3}
                    alt="Twitter"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/facebook">
                  <img
                    src={smedia4}
                    alt="Facebook"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link to="/youtube">
                  <img
                    src={smedia5}
                    alt="YouTube"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              </div>

              {/* Payment/Company Logos */}
              <div className="d-flex gap-3 flex-wrap justify-content-center">
                <img src={componislogo} alt="Paytm" height="45" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-3 small text-muted">
          © 2025 SONACHALA Developers Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;