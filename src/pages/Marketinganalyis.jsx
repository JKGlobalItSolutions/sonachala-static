import React from 'react'

import Marketingana from "../assets/banners/markting.jpg";

const Marketinganalyis = () => {
  return (
    <div>

  <div className="container-fluid px-0">
      {/* Banner Image */}
      <div className="text-center mb-5">
        <img
          src={Marketingana}
          alt="Reputation Management"
          className="img-fluid"
          style={{ maxHeight: "100%" }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Highlighted Info */}
        <div className="mb-5 text-center">
          <p className="fw-semibold fs-4" >
            Market analysis involves evaluating the attractiveness and dynamics of a specific <br /> market within a particular industry. It is a key component of industry analysis, <br /> which itself forms part of a broader global environmental analysis.


          </p>
        </div>

 

      </div>
    </div>


    </div>
  )
}

export default Marketinganalyis