import React from "react";

import "./demographics.scss";

const Demographics = ({ demographics }) => {
  console.log(demographics[0]);
  return (
    <div className="grid">
      <div className="call">Gender Appearance </div>
      <div className="response">{`${demographics[0].gender}`} </div>
      <div className="call">Probability</div>
      <div className="response">{`${demographics[0].probGender}`}</div>
      <div className="call">Age Appearance</div>
      <div className="response">{`${demographics[0].age}`}</div>
      <div className="call">Probability </div>
      <div className="response">{`${demographics[0].probAge}`}</div>
      <div className="call">Multicultural Appearance</div>
      <div className="response">{`${demographics[0].multiCulture}`} </div>
      <div className="call">Probability</div>
      <div className="response">{`${demographics[0].probMultiCulture}`} </div>
    </div>
  );
};

export default Demographics;
