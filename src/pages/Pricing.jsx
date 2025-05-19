import React from "react";
import pricingBanner from "../assets/banners/pricing.png"; // Update path if needed

const Pricing = () => {
  return (
    <div className="container my-5">
      {/* Banner */}
      <div className="text-center">
        <img
          src={pricingBanner}
          alt="Best Price"
          className="img-fluid mb-4"
          style={{ maxHeight: "250px" }}
        />
        <h2 className="fw-bold">Sonachala Pricing</h2>
        <p className="text-muted">A Hrifty Group Company</p>
        <p className="fs-5 fw-semibold text-success">
          Choose the plan that fits your living needs. Sonachala offers flexible pricing
          to ensure you get the best value—whether you're an individual, a family, or
          part of a growing community, we have a housing solution for you.
        </p>
      </div>


      

      {/* Pricing Cards */}
      <div className="row mt-5 gy-4 border-1">

        {/* BASIC */}
        <div className="col-md-6">
          <div className="p-4 border shadow-sm rounded">
            <h4 className="text-success fw-bold">BASIC</h4>
            <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
            <p className="fw-bold text-success">II. COMMISSION BASED PLAN</p>
            <ul>
              <li>Online OTA (Per Month)</li>
              <li>Booking Engine</li>
              <li>Mobile App – Booking Engine</li>
              <li>Channel Manager</li>
              <li>Revenue Management – 20% on OTA Management</li>
            </ul>
          </div>
        </div>

        {/* STANDARD */}
        <div className="col-md-6">
          <div className="p-4 border shadow-sm rounded">
            <h4 className="text-success fw-bold">STANDARD</h4>
            <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
            <p className="fw-bold text-success">II. COMMISSION BASED PLAN</p>
            <ul>
              <li>Online OTA (Per Month)</li>
              <li>Booking Engine</li>
              <li>Mobile App – Booking Engine</li>
              <li>Channel Manager</li>
              <li>Revenue Management – 20% on OTA Management</li>
              <li>One time Website Redesign</li>
              <li>DM Services – Selected 3 Services</li>
              <li>SEO – 25 Keywords</li>
            </ul>
          </div>
        </div>

        {/* PLATINUM */}
        <div className="col-md-6">
          <div className="p-4 border shadow-sm rounded">
            <h4 className="text-success fw-bold">PLATINUM</h4>
            <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
            <p className="fw-bold text-success">II. COMMISSION BASED PLAN</p>
            <ul>
              <li>Online OTA (Per Month)</li>
              <li>Booking Engine</li>
              <li>Mobile App – Booking Engine</li>
              <li>Channel Manager</li>
              <li>Revenue Management – 35% on OTA Management</li>
              <li>Sonachala – Cloud Lite PMS</li>
            </ul>
          </div>
        </div>

        {/* GOLD */}
        <div className="col-md-6">
          <div className="p-4 border shadow-sm rounded">
            <h4 className="text-success fw-bold">GOLD</h4>
            <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
            <p className="fw-bold text-success">II. COMMISSION BASED PLAN</p>
            <ul>
              <li>Online OTA (Per Month)</li>
              <li>Booking Engine</li>
              <li>Mobile App – Booking Engine</li>
              <li>Channel Manager</li>
              <li>Revenue Management – 20% on OTA Management</li>
              <li>One time Website Redesign</li>
              <li>DM Services – Selected 3 Services</li>
              <li>SEO – 25 Keywords</li>
            </ul>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="col-md-6">
          <div className="p-4 border shadow-sm rounded">
            <h4 className="text-success fw-bold">PREMIUM</h4>
            <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
            <p className="fw-bold text-success">II. COMMISSION BASED PLAN</p>
            <ul>
              <li>Online Transaction (Per Month)</li>
              <li>Booking Engine</li>
              <li>Mobile App – Booking Engine</li>
              <li>Channel Manager</li>
              <li>Revenue Management – 35% on OTA Management</li>
              <li>BookingsMaker – Cloud Lite PMS</li>
            </ul>
          </div>
        </div>

      </div>



    </div>
  );
};

export default Pricing;
