import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import hotelauditImg from "../assets/banners/hotelconsulting.jpg"; // Ensure this path is correct

const Hotelconsulting = () => {
  const preOpeningServices = [
    "Architectural and design review based on individual or brand standards",
    "Ongoing client communication and consultation",
    "Brand evaluation, communications and documentation",
    "Debt sourcing and analysis",
    "Review and management of permits and licenses (including bar license)",
    "PIP purchasing and procurement",
    "Insurance review – liability and workers comp",
    "Life safety analysis and recommendations",
    "Human Resources payroll and benefit analysis",
    "Manage brand critical path deadlines",
    "Corporate engineer review...",
    "Sales & Marketing and revenue management analysis; and recommendations",
    "Marketing plan review and recommendations",
  ];

  const salesMarketingServices = [
    "Hotel Internet Marketing",
    "Demand Based Offline Travel Trade Sales",
    "Offline corporate Sales",
    "Online Distribution - OTA & Aggregators",
    "Revenue Management",
    "Hotel GDS",
  ];

  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={hotelauditImg}
          alt="Hotel Auditing"
          className="img-fluid"
          style={{ maxHeight: "100%" }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <h3>Hotel Branding & Positioning ~ As Service</h3>
        <p>
          Sonachala is your trusted partner in bringing hotel projects to
          life—from concept to completion. Our team of experts specializes in
          developing and refining innovative hotel concepts, whether you’re
          launching a brand-new idea or enhancing an existing one. We provide
          comprehensive support including branding, positioning, and market
          entry strategies to ensure your property stands out in the competitive
          hospitality landscape.
        </p>
        <p>
          If your goal is to become the next standout name in the industry,
          we’re here to help make that vision a reality. Our concepts are
          carefully implemented throughout the property setup process, a proven
          approach that has delivered strong results for our clients.
        </p>
        <p>
          We combine the latest trends and technology with strategic insight to
          generate positive guest experiences and impactful reviews. Every
          property is unique—and we honor that by investing significant time in
          tailored research and development for each project. Because at
          Sonachala, we understand that every hotelier has distinct goals, and
          we’re here to help you achieve them.
        </p>

        <h5>Hotel Pre–Opening Management Company ~ As Service</h5>
        <p>
          Sonachala has familiarity in dealing with all recognized companies, a
          clear advantage to our client as it relates to brand design and PIP
          negotiations, plus meeting critical path of deadlines. Whether it’s a
          new hotel or change of ownership or change of brand, our team have the
          expertise to deliver an array of services to meet client requirements.
        </p>
        <ul className="list-unstyled">
          {preOpeningServices.map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <BsArrowRightCircleFill className="text-success me-2 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h5>Hotel Sales & Marketing Consultants ~ As Service</h5>
        <ul className="list-unstyled">
          {salesMarketingServices.map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <BsArrowRightCircleFill className="text-success me-2 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h5>Hotel Operations Management Company ~ As Service</h5>
        <p>
          With expertise across a wide range of disciplines, our team is
          equipped to analyze your operations and provide actionable
          recommendations to enhance both performance and guest satisfaction.
          Whether it's creating, reviewing, or refining standard operating
          procedures; evaluating and improving hiring practices; or offering
          third-party insights to strengthen corporate culture and service
          delivery—our approach is practical and results-driven. We deliver
          tailored operations management solutions designed to boost efficiency,
          elevate guest experiences, and drive revenue growth.
        </p>

        <h5>Hotel Finance & Asset Management Company ~ As Service</h5>
      
      </div>
    </div>
  );
};

export default Hotelconsulting;
