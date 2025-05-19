import React from "react";
import ontimeimg from "../assets/banners/onetime.jpg"; // Ensure the path is correct

const Revenue = () => {
  return (
    <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={ontimeimg}
          alt="One Time OTA Support"
          className="img-fluid"
          style={{ maxHeight: "100%" }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <h5 className="fw-bold">1. ONLINE PRESENCE:</h5>
        <p>
          In today’s digital era, it is imperative that you have an online
          presence—it is where everyone searches answers and solutions. Make it
          convenient for your potential customers to find you with just a few
          clicks. Our approach to the development of your online presence
          includes the following:
        </p>

        <h5 className="fw-bold">2. ONLINE PROMOTION:</h5>
        <p>
          We design and help create promotions ideally suited for your property
          to attract customers and start booking flow. This includes creating a
          competitors list and keeping track of all the pricing and promotion
          movements of your competitor.
        </p>

        <h5 className="fw-bold">3. ONLINE VISIBILITY:</h5>
        <p>
          Search engines like Google use algorithms to rank each website and its
          content based on keywords. Our SEO practices ensure your website is
          search engine friendly and works toward ranking your hotel website at
          the top of search engine results whenever a search is made relating to
          the keywords on your hotel website.
        </p>

        <h5 className="fw-bold">4. REAL TIME INVENTORY:</h5>

        <p>
          We help you manage your inventory (no. of rooms available) on a
          real-time basis – this means you will always know how many rooms are
          available for sale and how many rooms have been booked and for what
          duration. Managing this task manually is almost impossible and subject
          to errors which can lead to unsold rooms or even over-booking of
          rooms. Both these situation are bad for business: one leads to loss or
          revenue and the other leads to loss of reputation. We provide you
          access to a Channel Manager software – at a nominal cost – to help you
          overcome this challenge. Additionally we recommend the purchase of a
          PMS which can be integrated with the Channel Manager for handling all
          your invoicing and billing needs.
        </p>

        <h5 className="fw-bold">5. REVENUE MANAGER:</h5>
        <p>
          Implementing our best practices, proven techniques, and the latest in
          travel distribution developments, we will optimize and increase the
          financial results of your hotel. We help you perform better toward
          making your hotel a leader in the local market.
        </p>
        <p>
          The scope of our service will be decided after understanding your
          property’s reservation, revenue management, and optimization needs, as
          well as your back-end reservation and room sales support requirements.
        </p>
      </div>
    </div>
  );
};

export default Revenue;
