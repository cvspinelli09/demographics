import React from 'react';


import './demographics.scss';


class Demographics extends React.Component {
  constructor() {
    super();

    this.state = {
      demographics: [
        {
          gender: "",
          probGender: "",
          age: "",
          probAge: "",
          multiCulture: "",
          probMultiCulture: "",
        }
      ]
    }
  }

  calculateDemographics = (data) => {
    return data.outputs[0].data.regions.map((demo) => {
      console.log(data);
      const demographicsResults = demo.data;
      const age = demographicsResults.concepts[0].name;
      console.log(age);
      const probAge = demographicsResults.concepts[0].value;
      console.log(probAge);
      const gender = demographicsResults.concepts[20].name;
      console.log(gender);
      const probGender = demographicsResults.concepts[20].value;
      console.log(probGender);
      const multiCulture = demographicsResults.concepts[22].name;
      console.log(multiCulture);
      const probMultiCulture = demographicsResults.concepts[22].value;
      console.log(probMultiCulture);
      return {
        age: age,
        probAge: probAge,
        gender: gender,
        probGender: probGender,
        multiCulture: multiCulture,
        probMultiCulture: probMultiCulture,
      };
    });
  };

  displayDemographics = (demographics) => {
    this.setState({ demographics: demographics });
  };

  render() {
    return (
      <div className="grid">
        <div className="1">Gender Appearance </div>
        <div className="3">{`${this.state.gender}`} </div>
        <div className="2">Probability</div>
        <div className="4">{`${this.state.probGender}`}</div>
        <div className="5">Age Appearance</div>
        <div className="7">{`${this.state.age}`}</div>
        <div className="6">Probability </div>
        <div className="8">{`${this.state.probAge}`}</div>
        <div className="9">Multicultural Appearance</div>
        <div className="11">{`${this.state.MultiCulture}`} </div>
        <div className="10">Probability</div>
        <div className="12">{`${this.state.probMultiCulture}`} </div>
      </div>
    );
  }
};

export default Demographics;