import React from "react";
import reputationImg from "../assets/banners/repution.jpg"; // Update with your image path

const ReputationManagement = () => {
  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={reputationImg}
          alt="Reputation Management"
          className="img-fluid"
          style={{ maxHeight: "100%" }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Highlighted Info */}
        <div className="mb-5 text-center">
          <p className="fw-semibold fs-5" style={{ color: "#038A5E" }}>
            Hotel Reputation Management focuses on monitoring and shaping how
            your property is <br /> perceived across the internet. It involves actively
            managing reviews, engaging with <br /> audiences on social media,
            optimizing your website for search engines, and tracking all <br />
            mentions of your brand online.
          </p>
        </div>

        {/* Strategy Points */}
        <div className="mb-5">
          <h5 className="fw-bold mb-3">Monitoring & Managing Your Brand Presence</h5>
          <p>
            We track reviews, ratings, and online mentions—whether positive or
            negative—across platforms like TripAdvisor, Google, OTAs, and social
            media to ensure you're always informed.
          </p>

          <h5 className="fw-bold mt-4 mb-3">Strategic Response & Optimization</h5>
          <p>
            By analyzing how your brand is perceived, we help you understand its
            impact on your business. Based on these insights, we develop
            tailored strategies to enhance, protect, or maintain your hotel's
            online reputation, ultimately driving more bookings and guest trust.
          </p>
        </div>

        {/* Key Points Section */}
        <div className="mb-5">
          <h5 className="fw-bold mb-3">The keys to reputation management for hotels</h5>
          <ul className="ps-3">
            <li className="mb-2">
              Travelers increasingly rely on platforms like TripAdvisor, Google
              Reviews, and OTA feedback to make booking decisions—and this trend
              is here to stay.
            </li>
            <li className="mb-2">
              Go beyond just direct tags. Stay alert to indirect mentions,
              hashtags, and discussions across platforms like Facebook,
              Instagram, and X (formerly Twitter).
            </li>
            <li className="mb-2">
              Address complaints quickly and professionally. A timely, thoughtful
              response can turn a dissatisfied guest into a loyal advocate.
            </li>
            <li className="mb-2">
              Ask happy guests to share their experiences online. Positive
              reviews also improve your rankings on search and booking platforms.
            </li>
          </ul>
        </div>

        {/* Reputation Tips Section */}
        <div className="mb-4">
          <h5 className="fw-bold mb-3">
            Understand the importance of online reputation management.
          </h5>
          <ul className="ps-3">
            <li className="mb-2">Set reputation objectives and strategies</li>
            <li className="mb-2">Take a team approach.</li>
            <li className="mb-2">Be prepared</li>
            <li className="mb-2">Optimize your online presence</li>
            <li className="mb-2">Set up monitoring tools.</li>
            <li className="mb-2">Analyze feedback</li>
            <li className="mb-2">Take action</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReputationManagement;
