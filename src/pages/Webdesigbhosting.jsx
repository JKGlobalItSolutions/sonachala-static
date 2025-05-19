import React from "react";
import Marketingana from "../assets/banners/webdesign.jpg";

const Webdesigbhosting = () => {
  return (
    <div>
      <div className="container-fluid px-0">
        {/* Banner Image */}
        <div className="text-center mb-5">
          <img
            src={Marketingana}
            alt="Reputation Management"
            className="img-fluid"
            style={{ maxHeight: "100%" }}
          />
        </div>

        <div className="container py-5">
          {/* Highlighted Info */}
          <div className="mb-5">
            <p className="fw-semibold fs-5" style={{ color: "#038A5E" }}>
              There are many reasons your hotel should have its own website:
            </p>

            <ul
              className="mt-3 ps-3 fs-5"
              style={{ listStyleType: "none", paddingLeft: 0 }}
            >
              <li className="mb-2">All relevant information can be shown</li>
              <li className="mb-2">
                Improve your visibility online by SEO & SMO
              </li>
              <li className="mb-2">
                You can integrate a Booking Engine & Payment Gateway for direct
                guest booking & payment
              </li>
            </ul>

            <p className="mt-4 fs-4">
              At Sonachala we have tied up with one of the top MNCs to provide
              you with a feature-rich & stylish website at an extremely
              affordable price. Each of our websites is responsive – which means
              it can adapt automatically to any device the user may use and get
              the best possible user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdesigbhosting;
