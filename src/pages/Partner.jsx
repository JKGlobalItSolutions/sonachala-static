import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import partner from '../assets/banners/Partner.jpg';

const Partner = () => {
  return (
    <div className="container-fluid px-0">
      {/* Partner Banner */}
      <div
        className="position-relative"
        style={{ zIndex: 1 }}
      >
        <img
          src={partner}
          alt="Partner Banner"
          className="img-fluid w-100"
          style={{
            height: '350px',
            objectFit: 'cover',
            filter: 'brightness(75%)',
          }}
        />
      </div>

      {/* Partner Categories Section */}
      <section className="container py-5">
        <h3 className="fw-bold mb-4">
          Who can be <span className="text-success">Partner with US</span>
        </h3>
        <ul className="list-unstyled fs-5">
          {[
            'Computer Hardware Suppliers',
            'System Integrators',
            'IT Solutions Providers for Hotels',
            'Hotel PMS Providers',
            'Hotel Consultants, Hotel GM or Any Staff',
            'Hotel Web Designers and Marketers',
            'Hotel Photographers',
            'Tour Operators and Hotel Booking Agents',
          ].map((item, index) => (
            <li key={index} className="mb-3 d-flex align-items-start">
              <BsArrowRightCircleFill className="me-2 text-success mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Partner;
