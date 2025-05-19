import React from "react";

import banner from '../assets/banners/chennalmanage.jpg'
const ChannelManager = () => {
  return (
    <div className="container-fluid px-0">


  {/* Banner */}
        <div className="text-center">
          <img
            src={banner}
            alt="Hotel Booking Banner"
            className="img-fluid mb-4"
            style={{ width: "100%" }}
          />
        </div>




      {/* Top Section */}
      <div className="container py-5 fs-5">
      
        {/* Feature List */}
        <ul className="mt-5">
          <li>Real-time inventory and rate updates across all channels</li>
          <li>Prevention of overbookings through automated synchronization</li>
          <li>Centralized reservation management from multiple platforms</li>
          <li>Improved visibility and reach across various OTAs</li>
          <li>Simplified rate parity control</li>
          <li>Realtime Inventory and Rate updates on all the connected OTAs</li>
          <li>Maintaining Rate Parity</li>
          <li>
            Fetching bookings from the OTAs in the hotel software (if available)
          </li>
          <li>
            We provide basic billing features on a cloud-based CMS at no
            additional cost
          </li>
          <li>
            Even though the channel manager has fewer features, its lower cost
            and singular focus on OTA management – which is the biggest source
            of revenue for medium, small and micro hotels – justifies the barter
            of features.
          </li>
        </ul>

        <p className="mt-3 fw-semibold">
          We are partnered with India’s No. 1 ranked, user-friendly and
          cost-effective Channel Manager with double back-end support.
        </p>
      </div>
    </div>
  );
};

export default ChannelManager;
