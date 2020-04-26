import React from "react";

import "./demographics.scss";

const Demographics = ({ calculateDemographics }) => {
    return (
      <div className="grid">
        <div className="call">Gender Appearance </div>
        <div className="response">{`${calculateDemographics.gender}`} </div>
        <div className="call">Probability</div>
        <div className="response">{`${calculateDemographics.probGender}`}</div>
        <div className="call">Age Appearance</div>
        <div className="response">{`${calculateDemographics.age}`}</div>
        <div className="call">Probability </div>
        <div className="response">{`${calculateDemographics.probAge}`}</div>
        <div className="call">Multicultural Appearance</div>
        <div className="response">
          {`${calculateDemographics.multiCulture}`}{" "}
        </div>
        <div className="call">Probability</div>
        <div className="response">
          {`${calculateDemographics.probMultiCulture}`}{" "}
        </div>
      </div>
    );
}

export default Demographics;
