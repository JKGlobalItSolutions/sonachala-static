import React from "react";
import bannerImage from "../assets/banners/clients.jpg"; // Update with your actual banner image

import uj from "../assets/Portfolio/uj.png";
import kavi from "../assets/Portfolio/kavi.png";
import jmv from "../assets/Portfolio/jmv.png";
import gabriel from "../assets/Portfolio/gabriel.png";
import rks from "../assets/Portfolio/rks.png";
import moonlight from "../assets/Portfolio/moonlight.png";
import saraswathi from "../assets/Portfolio/saraswathi.png";
import swathisri from "../assets/Portfolio/swathisri.png";

const Portfolio = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="position-relative">
        <img
          src={bannerImage}
          alt="Portfolio Banner"
          className="img-fluid w-100"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        
      </div>

      {/* Intro Content */}
      <div className="container my-5 px-3 px-md-5">
     

        <h5 className="text-center fw-bold mt-5">
          Explore our recent success stories across the{" "}
          <span className="text-success">
            Hotel Industry - Past and Present
          </span>
        </h5>

        {/* Portfolio Grid */}
        <div className="row text-center mt-5 g-4">

          <div className="col-6 col-md-4 col-lg-3">
            <img
              src={uj}
              alt="UJ Pallazzio"
              className="img-fluid mb-2"
              style={{ maxHeight: "100px" }}
            />
            <h6>UJ Pallazzio</h6>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img
              src={kavi}
              alt="Kavi"
              className="img-fluid mb-2"
              style={{ maxHeight: "100px" }}
            />
         
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img
              src={jmv}
              alt="JMV Residency"
              className="img-fluid mb-2"
              style={{ maxHeight: "100px" }}
            />
           
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img
              src={gabriel}
              alt="Gabriel Marriage Hall"
              className="img-fluid mb-2"
              style={{ maxHeight: "100px" }}
            />
          
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img
              src={rks}
              alt="RKS Residency"
              className="img-fluid mb-2"
              style={{ maxHeight: "100px" }}
            />
           
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img
              src={moonlight}
              alt="Moonlight Residency"
              className="img-fluid rounded shadow"
            />
            <h5 className="fw-bold mt-2">Moonlight Residency</h5>
          </div>

          <div className="col-6 col-md-6 col-lg-6">
            <img
              src={saraswathi}
              alt="Saraswathi Mahal"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-6 col-md-6 col-lg-6">
            <img
              src={swathisri}
              alt="Swathisri Residency"
              className="img-fluid rounded shadow"
            />
            <h5 className="fw-bold mt-2">Swathisri Residency</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
