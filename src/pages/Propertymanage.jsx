import React from 'react';
import proprty from '../assets/banners/property.jpg';

const Propertymanage = () => {
  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={proprty}
          alt="Property Management System"
          className="img-fluid"
          style={{ maxHeight: '100%' }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Highlighted Info */}
        <p className="fw-semibold fs-4" style={{ color: '#038A5E' }}>
          A cloud-based PMS for daily hotel operations, automation, and business
          scalability. Manage a heavy <br /> load of Hotel tasks in a few clicks. Suitable
          for the hotel room inventory less than 20 rooms
        </p>

        {/* Features List */}
        <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '2rem', fontSize:"20px" }}>
          <li className="mb-2">Front Desk</li>
          <li className="mb-2">Reservation Management</li>
          <li className="mb-2">Rate Management</li>
          <li className="mb-2">Deal Management</li>
          <li className="mb-2">Room Management</li>
          <li className="mb-2">Guest Management</li>
          <li className="mb-2">Department Management</li>
          <li className="mb-2">Service Management</li>
          <li className="mb-2">Integrated Channel Manager</li>
          <li className="mb-2">Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default Propertymanage;
