import React from "react";
import banner from "../assets/banners/Booking.jpg"; // Ensure this path is correct

const Booking = () => {
  return (
    <div className="container-fluid px-0">
      {/* Banner */}
      <div className="text-center">
        <img
          src={banner}
          alt="Hotel Booking Banner"
          className="img-fluid mb-4"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <h3 className="fw-bold mb-4">Having your Hotel website:</h3>

        <p className="fs-5">
          Your website serves as a comprehensive platform to showcase every
          feature of your hotel in as much detail as you like. It provides
          potential guests with a clear and in-depth understanding of your
          amenities, helping them make informed decisions based on their needs
          and preferences.
        </p>
        <p className="fs-5">
          To ensure seamless conversions and maximize direct bookings, it's
          essential to integrate a reliable Booking Engine and Payment Gateway.
          Without these tools, you won't be able to accept online reservations
          or process payments, limiting your ability to generate revenue
          directly from your website.
        </p>

        <h4 className="fw-bold mt-5">IBE – INTERNET BOOKING ENGINE</h4>
        <p className="fw-semibold fs-5" style={{ color: "#0ba360" }}>
          There are many reasons your hotel should have its own website:
        </p>

        <div className="mt-4">
          <h5 className="fw-bold">Showcase All Relevant Information</h5>
          <p className="fs-5">
            Present every detail about your property—from amenities to
            services—giving potential guests a complete picture of what you
            offer.
          </p>

          <h5 className="fw-bold mt-4">
            Boost Your Online Visibility with SEO & SMO
          </h5>
          <p className="fs-5">
            Enhance your digital presence through Search Engine Optimization
            (SEO) and Social Media Optimization (SMO), attracting more visitors
            and increasing direct bookings.
          </p>

          <h5 className="fw-bold mt-4">Enable Direct Bookings & Payments</h5>
          <p className="fs-5">
            Integrate a powerful Booking Engine and Payment Gateway into your
            website to allow guests to book and pay directly—saving you from
            third-party commissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
