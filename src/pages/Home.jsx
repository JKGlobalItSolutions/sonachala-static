import React from "react";

import banner from "../assets/homeimg/banner.png";
import woman1 from "../assets/homeimg/woman1.png";
import woman2 from "../assets/homeimg/woman2.png";
import team from "../assets/homeimg/team.png";

const Home = () => {
  return (
    <div className="container-fluid ">
      {/* Banner Image */}
      <div className="w-100 mb-2">
        <img
          src={banner}
          alt="Team Banner"
          className="img-fluid w-100"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Intro Section */}
      <div className="row align-items-center mt-lg-5 mb-5">
        {/* Left Image Section */}
        <div className="col-md-6 position-relative mb-4 mb-md-0">
          <div className="position-relative" style={{ paddingLeft: "40px" }}>
            <img
              src={woman1}
              alt="Meeting"
              className="img-fluid  rounded shadow w-75"
              style={{ border: "2px solid #2db284", borderRadius: "1px" }}
            />
            <img
              src={woman2}
              alt="Discussion"
              className="img-fluid position-absolute w-50"
              style={{
                width: "50%",
                bottom: "-20px",
                top: "180px",
                left: "200px",
                border: "2px solid black",
                borderRadius: "5px",
                boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="col-md-6">
          <p>
            <strong className="text-success">Sonachala</strong> is a hotels
            marketing company focused on the mid-market segment of the Indian
            hospitality industry. As the second-largest revenue management
            company in India, we currently serve a wide range of hotels across
            southern India, including destinations in Tamil Nadu,
            Thiruvannamalai — with plans to expand nationwide.
          </p>
          <p>
            Specializing in revenue management, Sonachala offers tailored
            solutions for hotels, motels, resorts, service apartments, bed and
            breakfasts, and homestays. Our comprehensive services are designed
            to meet all your property management needs, with a primary focus on
            increasing your online sales through various OTAs (Online Travel
            Agencies).
          </p>
          <button className="btn btn-outline-dark mt-3">Discover More</button>
        </div>
      </div>

      {/* See Us in Action */}
      <div className="text-center mb-5  mt-lg-5 ">
        <h2 className="fw-bold mb-3 ">See Us in Action</h2>
        <img
          src={team}
          className="img-fluid rounded shadow"
          alt="Team meeting"
        />
      </div>

      {/* About Us */}
      <div className="mb-5 p-4">
        <h3 className="fw-bold">ABOUT US</h3>
        <p>
          Our founder and both CEOs bring nearly two decades of experience in
          the hotel and travel industry, starting their journey in 2003. With
          deep insight into the challenges faced by hoteliers—and more
          importantly, the solutions—they established{" "}
          <strong style={{ color: "#a7dbcb" }}>Sonachala.com</strong> in 2023 to address these needs with
          expertise and innovation.
        </p>
      </div>

      {/* Cards Section */}

      {/* Cards Section */}
      <div className="row g-4 p-5">
        {/* 1. Mission */}
        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">1. Our Mission</h5>
            <p className="mb-0">
              Our goal is to list every hotel in the country on our
              platform—regardless of the city's size or the property's
              scale—ensuring 100% pan-India coverage and delivering optimal
              results for our partner clients.
            </p>
          </div>
        </div>

        {/* 2. Reach */}
        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">2. Our Reach</h5>
            <ul className="mb-0">
              <li>
                50+ Groups and Chain of Hotels Internationally covering 500+
                properties
              </li>
              <li>3500+ Independent Hotels</li>
              <li>200+ Hotels under Revenue Management</li>
            </ul>
          </div>
        </div>

        {/* 3. USP */}
        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">3. Our USP</h5>
            <p className="mb-0">
              India’s first Booking Engine with its own Mobile App. Our App
              users are rewarded with Major Discounts, Unlimited Cash-Back, and
              No Expiry on Sonachala Wallet Special Discounts for long time
              users under our Loyalty Program added with corporate tie-ups.
            </p>
          </div>
        </div>

        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">4. Why BM</h5>
            <p>
              Sonachala is committed to customer satisfaction, backed by a
              dedicated team of enthusiastic professionals who continuously
              innovate new ways to plan, execute, and deliver beyond industry
              standards. Our mission is to solve the challenges hotels face with
              online bookings and reservations, driving your business forward in
              an increasingly digital world.
            </p>
            <p>
              As hotels must adapt to evolving marketing strategies, we are here
              to ensure your property attracts more guests and stands out in the
              competitive hospitality landscape.
            </p>
            <p>
              Our core motto is to be a service-oriented leader in the
              hospitality industry, providing exceptional strategy and support
              to help our partner hotels grow. We offer everything a hotel needs
              to boost business across all major online channels.
            </p>
          </div>
        </div>

        {/* 5. Management */}
        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">5. Management</h5>
            <p>
              Our founder and CEOs have been involved in the hotel and travel
              industry since 2023. With nearly two decades of hands-on
              experience, we deeply understand the challenges hoteliers
              face—and, more importantly, how to overcome them. This expertise
              led to the launch of Sonachala.com in 2023.
            </p>
            <p>
              From day one, we have been fully dedicated to the hospitality
              sector, providing comprehensive solutions across hotel backend
              operations, room sales and support, as well as revenue management
              and optimization. Our suite of hospitality-focused products and
              services is designed to meet the operational and commercial needs
              of modern hotels.
            </p>
            <p>
              We specialize in enhancing hotel profitability through innovative
              revenue management strategies. With extensive experience in
              revenue optimization, distribution, and both hospitality and
              tourism sectors, our team of hotel yield experts is committed to
              helping properties unlock hidden revenue opportunities and
              maximize their bottom line.
            </p>
          </div>
        </div>

        {/* 6. Team */}
        <div className="col-md-12">
          <div
            className="p-4"
            style={{ backgroundColor: "#a7dbcb", borderRadius: "4px" }}
          >
            <h5 className="fw-bold text-primary">6. Team</h5>
            <p>
              With an experienced team, we offer complete flexibility and a
              personalized approach tailored to your property’s unique needs. We
              are confident in our ability to help grow and develop your hotel’s
              online presence. Our results speak for themselves—please take a
              moment to explore our case studies and client testimonials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
