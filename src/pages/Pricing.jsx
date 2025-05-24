import React, { useState } from "react";
import pricingBanner from "../assets/banners/pricing.png";

const Pricing = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFormone, setShowFormone] = useState(false);

  const [showFormElite, setShowFormElite] = useState(false);
  const [showFormEliteform, setShowFormEliteform] = useState(false);

  const [showRevenueManagement, setShowRevenueManagement] = useState(false);
  const [showRevenueManagementform, setShowRevenueManagementform] =
    useState(false);

  const [showFormPlanB, setShowFormPlanB] = useState(false);
  const [showFormPlanBForm, setShowFormPlanBForm] = useState(false);

  const [showFormSoftware, setShowFormSoftware] = useState(false);

  const handleBookingClick = () => setShowForm(true);
  const handleBookingClickone = () => setShowFormone(true);

  const handleBookingClickElite = () => setShowFormElite(true);
  const handleBookingClickEliteform = () => setShowFormEliteform(true);

  const handleRevenueManagementClick = () => setShowRevenueManagement(true);
  const handleRevenueManagementClickform = () =>
    setShowRevenueManagementform(true);

  const handlePlanBClick = () => setShowFormPlanB(true);

  const handlePlanBExploreClick = () => {
    setShowFormPlanBForm(true);
    setShowFormPlanB(false);
  };

  const handleSoftwareClick = () => setShowFormSoftware(true);

  // close btn

  const handleCloseForm = () => {
    setShowForm(false);
    setShowFormone(false);

    setShowFormElite(false);
    setShowFormEliteform(false);

    setShowRevenueManagement(false);
    setShowRevenueManagementform(false);

    setShowFormPlanB(false);
    setShowFormPlanBForm(false);

    setShowFormSoftware(false);
  };

  const plans = [
    {
      title: "Basic",
      features: [
        "Online OTA (Per Month)",
        "Booking Engine",
        "Channel Manager",
        "Revenue Management - 20% on OTA",
      ],
    },
    {
      title: "Gold",
      features: [
        "Online OTA (Per Month)",
        "Booking Engine",
        "Channel Manager",
        "Revenue Management - 35% on OTA",
      ],
    },
    {
      title: "Standard",
      features: [
        "Online OTA (Per Month)",
        "Booking Engine",
        "Channel Manager",
        "Revenue Management - 20% on OTA",
      ],
    },
    {
      title: "Platinum",
      features: [
        "Online OTA (Per Month)",
        "Booking Engine",
        "Channel Manager",
        "Revenue Management - 20% on OTA",
      ],
    },
    {
      title: "Premium",
      features: [
        "Online OTA (Per Month)",
        "Booking Engine",
        "Channel Manager",
        "Revenue Management - 35% on OTA",
      ],
    },
  ];

  const PlanCard = ({ title, features, center }) => (
    <div className={`p-3 h-100 ${center ? "text-center" : ""}`}>
      <h6 className="fw-bold mb-2">{title}</h6>
      <ul className="list-unstyled small mb-3 ps-3 text-start">
        {features.map((feature, i) => (
          <li key={i} style={{ fontSize: "0.85rem", color: "#333" }}>
            <span style={{ color: "#822828", marginRight: "6px" }}>➤</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleRevenueManagementClickform}
        className="btn btn-sm w-100"
        style={{
          backgroundColor: "#5b2919",
          color: "white",
          borderRadius: "20px",
          border: "2px solid #13472f",
        }}
      >
        Explore
      </button>
    </div>
  );

  const Diamond = () => (
    <div
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "#14532d",
        transform: "rotate(45deg)",
      }}
    ></div>
  );

  const VerticalConnector = () => (
    <div className="col-2 d-flex flex-column align-items-center">
      <Diamond />
      <div
        style={{ width: "2px", height: "50px", backgroundColor: "#14532d" }}
      ></div>
      <Diamond />
    </div>
  );

  return (
    <div className="position-relative">
      {/* Overlay */}

      {(showForm ||
        showFormone ||
        showFormElite ||
        showFormEliteform ||
        showRevenueManagement ||
        showRevenueManagementform ||
        showFormPlanB ||
        showFormPlanBForm ||
        showFormSoftware) && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        ></div>
      )}

      <div
        className="container my-5"
        style={{ position: "relative", zIndex: 1 }}
      >
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
            Choose the plan that fits your living needs. Sonachala offers
            flexible pricing to ensure you get the best value—whether you're an
            individual, a family, or part of a growing community, we have a
            housing solution for you.
          </p>
        </div>

        {/* Desktop Version Only */}
        <div className="d-none d-md-block">
          <div className="services-container">
            <div className="service-row mb-3">
              <button className="service-btn me-3" onClick={handleBookingClick}>
                Booking Engine
              </button>
              <button className="service-btn" onClick={handleBookingClickone}>
                Total Property Management
              </button>
            </div>

            <div className="service-row mb-3">
              <button className="service-btn" onClick={handleBookingClickElite}>
                Elite 360 degree Plan
              </button>
              <button
                className="service-btn"
                onClick={handleRevenueManagementClick}
              >
                Revenue Management
              </button>
            </div>

            <div className="service-row mb-3">
              <button className="service-btn" onClick={handlePlanBClick}>
                Services
              </button>
              <button className="service-btn" onClick={handleSoftwareClick}>
                Software Services
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Version Only */}
        <div className="d-block d-md-none">
          <div className="container my-4">
            <div className="row g-3 justify-content-center">
              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handleBookingClick}
                >
                  Booking Engine
                </button>
              </div>
              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handleBookingClickone}
                >
                  Total Property Management
                </button>
              </div>

              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handleBookingClickElite}
                >
                  Elite 360 degree Plan
                </button>
              </div>
              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handleRevenueManagementClick}
                >
                  Revenue Management
                </button>
              </div>

              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handlePlanBClick}
                >
                  Services
                </button>
              </div>
              <div className="col-12 col-md-5 d-flex justify-content-center">
                <button
                  className="btn btn-success w-100 custom-btn"
                  onClick={handleSoftwareClick}
                >
                  Software Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row mt-5 gy-4 border-1">
          {[
            {
              title: "BASIC",
              items: [
                "Online OTA (Per Month)",
                "Booking Engine",
                "Mobile App – Booking Engine",
                "Channel Manager",
                "Revenue Management – 20% on OTA Management",
              ],
            },
            {
              title: "STANDARD",
              items: [
                "Online OTA (Per Month)",
                "Booking Engine",
                "Mobile App – Booking Engine",
                "Channel Manager",
                "Revenue Management – 20% on OTA Management",
                "One time Website Redesign",
                "DM Services – Selected 3 Services",
                "SEO – 25 Keywords",
              ],
            },
            {
              title: "PLATINUM",
              items: [
                "Online OTA (Per Month)",
                "Booking Engine",
                "Mobile App – Booking Engine",
                "Channel Manager",
                "Revenue Management – 35% on OTA Management",
                "Sonachala – Cloud Lite PMS",
              ],
            },
            {
              title: "GOLD",
              items: [
                "Online OTA (Per Month)",
                "Booking Engine",
                "Mobile App – Booking Engine",
                "Channel Manager",
                "Revenue Management – 20% on OTA Management",
                "One time Website Redesign",
                "DM Services – Selected 3 Services",
                "SEO – 25 Keywords",
              ],
            },
            {
              title: "PREMIUM",
              items: [
                "Online Transaction (Per Month)",
                "Booking Engine",
                "Mobile App – Booking Engine",
                "Channel Manager",
                "Revenue Management – 35% on OTA Management",
                "BookingsMaker – Cloud Lite PMS",
              ],
            },
          ].map((plan, index) => (
            <div className="col-md-6" key={index}>
              <div className="p-4 border shadow-sm rounded">
                <h4 className="text-success fw-bold">{plan.title}</h4>
                <p className="fw-bold">I. FIXED PLAN (Per Month)</p>
                <p className="fw-bold text-success">
                  II. COMMISSION BASED PLAN
                </p>
                <ul>
                  {plan.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Form - Booking Engine */}
      {showForm && (
        <form
          className="booking-form p-4 rounded shadow position-fixed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            zIndex: 20,
            width: "90%",
            maxWidth: "500px",
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#888",
            }}
            aria-label="Close form"
          >
            &times;
          </button>
          <h5 className="mb-4">Book Your Property</h5>
          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Property Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Contact Number*"
            />
          </div>
          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Total No. of Rooms"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Established Year"
            />
          </div>
          <div className="form-row mb-3">
            <textarea
              className="form-control"
              placeholder="Address*"
              rows="4"
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Floating Form - Total Property Management */}
      {showFormone && (
        <form
          className="booking-form p-4 rounded shadow position-fixed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            zIndex: 20,
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#888",
            }}
            aria-label="Close form"
          >
            &times;
          </button>
          <h5 className="mb-4 text-center">Total Property Management Form</h5>
          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Property Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Contact Number*"
            />
          </div>
          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Business Owner Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Established Year"
            />
          </div>
          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Total No.of Property"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Total No.of Rooms"
            />
          </div>
          <div className="form-row mb-3">
            <textarea
              className="form-control"
              placeholder="Address*"
              rows="4"
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* showFormElite - ONLY show if showFormElite is true AND showFormEliteform is false */}
      {showFormElite && !showFormEliteform && (
        <div
          className="position-fixed start-50 translate-middle-x bg-white p-4 rounded shadow"
          style={{
            top: "2.5vh",
            zIndex: 1050,
            width: "90%",
            maxWidth: "950px",
            height: "95vh", // Take nearly full screen height
            overflowY: "auto", // Allow scrolling if content overflows
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "1px" }}
            aria-label="Close"
          ></button>

          {/* Flex container for both plans */}
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {/* Plan A */}
            <div
              className="card border-4 border-success rounded-4"
              style={{ flex: "1 1 350px" }}
            >
              <div className="card-header bg-success text-white fw-bold fs-5 rounded-top-4">
                Plan A
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Elite 360 Degree Plan</h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="mb-2">📌 Booking Engine</li>
                  <li className="mb-2">📌 OTA Maintenance</li>
                  <li className="mb-2">📌 Channel Manager Executive Support</li>
                  <li className="mb-2">📌 HMS & PMS Software</li>
                  <li className="mb-2">📌 Google My Business</li>
                  <li className="mb-2">📌 Social Media Support</li>
                  <li className="mb-2">📌 SEO & Google Ads</li>
                  <li className="mb-2">📌 Website Design & Development</li>
                </ul>

                <div className="text-center">
                  <button
                    className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                    style={{
                      background: "linear-gradient(to right, #6b1e14, #003c26)",
                      cursor: "pointer",
                    }}
                    onClick={handleBookingClickEliteform}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Plan B */}
            <div
              className="card border-4 border-success rounded-4"
              style={{ flex: "1 1 350px" }}
            >
              <div className="card-header bg-success text-white fw-bold fs-5 rounded-top-4">
                Plan B
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Services</h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li className="mb-2">📌 Human Resource</li>
                  <li className="mb-2">📌 Auditing Services</li>
                  <li className="mb-2">📌 Photography With High Quality</li>
                  <li className="mb-2">📌 Handy Man Services</li>
                  <li className="mb-2">📌 IT Product & Services</li>
                  <li className="mb-2">📌 Other Services</li>
                </ul>

                <div className="text-center">
                  <button
                    className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                    style={{
                      background: "linear-gradient(to right, #6b1e14, #003c26)",
                      cursor: "pointer",
                    }}
                    onClick={handlePlanBExploreClick}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form - Elite Plan Full Details */}
      {showFormEliteform && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow"
          style={{ zIndex: 1050, width: "95%", maxWidth: "650px" }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "10px" }}
            aria-label="Close"
          ></button>

          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Property Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Number*"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Phone No"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Property"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Rooms"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-success"
                  placeholder="Address*"
                  rows="4"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(to right, #6b1e14, #003c26)",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Revenue Management Overview - show only if showRevenueManagement is true AND form is false */}
      {showRevenueManagement && !showRevenueManagementform && (
        <div
          className="position-fixed start-50 translate-middle-x bg-white p-3 rounded shadow"
          style={{
            top: "140px",
            zIndex: 1050,
            width: "95%",
            maxWidth: "1000px",
            maxHeight: "95vh",
            overflowY: "auto",
            border: "3px solid #0e6b3c",
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "15px" }}
            aria-label="Close"
          ></button>

          {/* Header */}
          <div className="bg-success text-white text-center py-2 rounded-top">
            <h2 className="h6 mb-0">OTA Management (Revenue Management)</h2>
          </div>

          {/* Plans Container */}
          <div className="rounded-bottom p-3 bg-white">
            <div className="row mb-3 align-items-center">
              <div className="col-5">
                <PlanCard title="Basic" features={plans[0].features} />
              </div>
              <VerticalConnector />
              <div className="col-5">
                <PlanCard title="Gold" features={plans[1].features} />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-5">
                <PlanCard title="Standard" features={plans[2].features} />
              </div>
              <VerticalConnector />
              <div className="col-5">
                <PlanCard title="Platinum" features={plans[3].features} />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <Diamond />
              <div
                style={{
                  height: "2px",
                  width: "120px",
                  backgroundColor: "#14532d",
                  margin: "0 8px",
                }}
              ></div>
              <Diamond />
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <PlanCard
                  title={plans[4].title}
                  features={plans[4].features}
                  center
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                style={{
                  background: "linear-gradient(to right, #6b1e14, #003c26)",
                }}
                onClick={handleRevenueManagementClickform}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Management Full Form */}
      {showRevenueManagementform && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow"
          style={{ zIndex: 1050, width: "95%", maxWidth: "650px" }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "10px" }}
            aria-label="Close"
          ></button>

          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Property Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Number*"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Phone No"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Property"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Rooms"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-success"
                  placeholder="Address*"
                  rows="4"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(to right, #6b1e14, #003c26)",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Modal for Plan B Services */}
      {showFormPlanB && !showFormPlanBForm && (
        <div
          className="position-fixed start-50 translate-middle-x bg-white p-3 rounded shadow"
          style={{
            top: "140px",
            zIndex: 1050,
            width: "90%",
            maxWidth: "420px",
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "10px" }}
            aria-label="Close"
          ></button>

          <div className="card border-4 border-success rounded-4 mt-3">
            <div className="card-header bg-success text-white fw-bold fs-5 rounded-top-4">
              Plan B
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Services</h5>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="mb-2">📌 Human Resource</li>
                <li className="mb-2">📌 Auditing Services</li>
                <li className="mb-2">📌 Photography With High Quality</li>
                <li className="mb-2">📌 Handy Man Services</li>
                <li className="mb-2">📌 IT Product & Services</li>
                <li className="mb-2">📌 Other Services</li>
              </ul>

              <div className="text-center">
                <button
                  className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(to right, #6b1e14, #003c26)",
                    cursor: "pointer",
                  }}
                  onClick={handlePlanBExploreClick}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form for Plan B */}
      {showFormPlanBForm && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow"
          style={{ zIndex: 1050, width: "95%", maxWidth: "650px" }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            className="btn-close position-absolute"
            style={{ top: "10px", right: "10px" }}
            aria-label="Close"
          ></button>

          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Property Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Number*"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Contact Person Phone No"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Property"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-success"
                  placeholder="Total No.of Rooms"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-success"
                  placeholder="Address*"
                  rows="4"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(to right, #6b1e14, #003c26)",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Software Services Form */}
      {showFormSoftware && (
        <form
          className="booking-form p-4 rounded shadow position-fixed"
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            zIndex: 20,
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <button
            type="button"
            onClick={handleCloseForm}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#888",
            }}
            aria-label="Close form"
          >
            &times;
          </button>
          <h5 className="mb-4">Software Services</h5>

          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Property Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Contact Number*"
            />
          </div>

          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Contact Person Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Contact Person Phone No"
            />
          </div>

          <div className="form-row mb-3 d-flex gap-3">
            <input
              className="form-control"
              type="text"
              placeholder="Total No. of Property"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Total No. of Rooms"
            />
          </div>

          <div className="form-row mb-3">
            <select className="form-control">
              <option>Services</option>
              <option>Billing Software</option>
              <option>IT Products</option>
              <option>CCTV Camerat</option>
              <option>Printer</option>
            </select>
          </div>

          <div className="form-row mb-3">
            <textarea
              className="form-control"
              placeholder="Address*"
              rows="4"
            />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Pricing;
