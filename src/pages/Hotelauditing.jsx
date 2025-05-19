
import React from 'react';
import hotelauditImg from '../assets/banners/hotelaudite.jpg'; // Corrected path (ensure it's a .jpg or correct extension)
import { FaCheckCircle } from 'react-icons/fa'; // React icon for green check

const Hotelauditing = () => {
  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={hotelauditImg}
          alt="Hotel Auditing"
          className="img-fluid"
          style={{ maxHeight: '100%' }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Intro Text */}
        <p className="fs-4 fw-medium" >
          A Revenue Management Audit offers insights into underutilized areas of the
          business, enabling hoteliers to better understand current performance and
          unlock new avenues for growth.
        </p>

        <p className="fs-4">
          Sonachala team has a vast experience in conducting Revenue Auditfor the
          hoteliers. This audit is a 2-Day onsite audit to highlight opportunities
          and gaps in your business and suggest correct measures.
        </p>

        {/* Audit Areas */}
        <div className="mt-4 fs-5">
          <ul className="list-unstyled">
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Hotel Presence in Online</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Channel Distribution and Management</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Inventory Management</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Pricing</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Forecasting</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Yield Management</strong>
            </li>
            <li className="mb-2">
              <FaCheckCircle className="me-2 text-success" />
              <strong>Team Knowledge Update</strong>
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <p className="fs-5 mt-4">
          A detailed report will be <span style={{ color: '#007F5F' }}>submitted to the hotel</span>.
        </p>
      </div>
    </div>
  );
};

export default Hotelauditing;
