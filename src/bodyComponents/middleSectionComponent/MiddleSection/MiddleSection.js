import React from "react";

import Welcome from '../Welcome/Welcome';
import Rank from "../Rank/Rank";


import "./MiddleSection.scss";

const MiddleSection = () => (
  <div className="middle-section-container">
    <div className="welcome-section-container">
      <Welcome />
    </div>
    <div className="rank-section-container">
      <Rank />
    </div>
    
  </div>
);

export default MiddleSection;
