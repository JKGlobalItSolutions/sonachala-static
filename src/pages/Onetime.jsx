import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import ontimeimg from '../assets/banners/onetime.jpg'; // Update path if needed

const Onetime = () => {
  const oneTimeServices = [
    "Content Clean-up on the existing OTA’s",
    "Adding new OTA’s to increase the visibility on online",
    "Optionally integrate with a Channel Manager (based on the feasibility)"
  ];

  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={ontimeimg}
          alt="One Time OTA Support"
          className="img-fluid"
          style={{ maxHeight: '100%' }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Intro Heading and Description */}
        <p className="fw-bold fs-4">
          We Sonachala.com – support for the hoteliers only to integrate with the reputed and most wanted online travel agents (OTA’s) for their properties for one time basis. This includes:
        </p>

        {/* Bullet List */}
        <ul className="list-unstyled">
          {oneTimeServices.map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <BsArrowRightCircleFill className="text-success me-2 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Onetime;
