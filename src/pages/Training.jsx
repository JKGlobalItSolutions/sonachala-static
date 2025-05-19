import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

import trinbanner from "../assets/banners/training.jpg";

const Training = () => {
  return (
    <div>
        
      {/* Training Banner */}
      

  <div className="w-100 mb-2">
        <img
          src={trinbanner}
          alt="Team Banner"
          className="img-fluid w-100"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>


      {/* Training Content */}
      <div className="container text-center my-5 px-3 px-md-5">
        <p className="fs-5 fw-medium">
          We offer bespoke training packages tailored to the specific needs of
          your team, along with open courses that cover essential areas in the
          hotel industry, web development, digital marketing, and SEO.
        </p>
        <p className="fs-5 fw-medium">
          For key personnel within your organization, we also provide inspiring,
          personalized one-on-one coaching to help them excel in their roles.
        </p>

        <div className="text-start mt-5">
          <h5 className="fw-bold">
            Our Hotel – Hotel Operations Management program exposes you to
            current and best practices in the following areas:
          </h5>

          <ul className="mt-3">
            <li className="mb-2 d-flex align-items-center">
              <BsArrowRightCircleFill className="text-success me-2" size={20} />
              <span className="text-success fw-semibold">Front office</span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsArrowRightCircleFill className="text-success me-2" size={20} />
              <span className="text-success fw-semibold">
                Food and beverage
              </span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsArrowRightCircleFill className="text-success me-2" size={20} />
              <span className="text-success fw-semibold">
                Marketing and sales
              </span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsArrowRightCircleFill className="text-success me-2" size={20} />
              <span className="text-success fw-semibold">
                Conferences and catering
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Training;
