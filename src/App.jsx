import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home.jsx';
import Training from './pages/Training.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Pricing from './pages/Pricing.jsx';
import Partner from './pages/Partner.jsx';
import Booking from './pages/Booking.jsx';
import ChannelManager from './pages/ChannelManager.jsx';
import ReputationManagement from './pages/ReputationManagement.jsx';
import Marketinganalyis from './pages/Marketinganalyis.jsx';
import Webdesigbhosting from './pages/Webdesigbhosting.jsx';
import Propertymanage from './pages/Propertymanage.jsx';
import Hotelauditing from './pages/Hotelauditing.jsx';
import Hotelconsulting from './pages/Hotelconsulting.jsx';
import Onetime from './pages/Onetime.jsx';
import Revenue from './pages/Revenue.jsx';
import Digitalmark from './pages/Digitalmark.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/ChannelManager" element={<ChannelManager />} />
          <Route path="/ReputationManagement" element={<ReputationManagement />} />
          <Route path="/Marketinganalyis" element={<Marketinganalyis />} />
          <Route path="/Webdesigbhosting" element={<Webdesigbhosting />} />
          <Route path="/Propertymanage" element={<Propertymanage />} />
          <Route path="/Hotelauditing" element={<Hotelauditing />} />
          <Route path="/Hotelconsulting" element={<Hotelconsulting />} />
          <Route path="/Onetime" element={<Onetime />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Digitalmark" element={<Digitalmark />} />












        





       
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
