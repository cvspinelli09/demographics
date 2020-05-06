import React from "react";

import "./demographics.scss";

const Demographics = ({ demographics }) => {
  return (
    <div className={demographics.length > 1 ? "grid-2" : "grid"}>
      {demographics.map((demographics) => (
        <div>
          <div className="call">Gender Appearance </div>
          <div className="response">{`${demographics.gender}`} </div>
          <div className="call">Probability</div>
          <div className="response">{`${demographics.probGender}`}</div>
          <div className="call">Age Appearance</div>
          <div className="response">{`${demographics.age}`}</div>
          <div className="call">Probability </div>
          <div className="response">{`${demographics.probAge}`}</div>
          <div className="call">Multicultural Appearance</div>
          <div className="response">{`${demographics.multiCulture}`} </div>
          <div className="call">Probability</div>
          <div className="response">{`${demographics.probMultiCulture}`} </div>
        </div>
      ))}
    </div>
  );
};

export default Demographics;
