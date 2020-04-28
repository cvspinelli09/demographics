import React from "react";
import Clarifai from "clarifai";
// import { connect } from "react-redux";

import "./App.css";

import Header from "./headerComponents/header/Header";
import MiddleSection from "./bodyComponents/middleSectionComponent/MiddleSection/MiddleSection";
import DisplayScreen from "./bodyComponents/displayScreenComponent/displayScreen/displayScreen";

const app = new Clarifai.App({
  apiKey: "b65e16600b28482bab4ffcd2581ab5eb",
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
      demographics: [
        {
          gender: "",
          probGender: "",
          age: "",
          probAge: "",
          multiCulture: "",
          probMultiCulture: ""
        }
      ]
    };
  }

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map((face) => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById("inputimage");
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  calculateDemographics = (data) => {
    return data.outputs[0].data.regions.map((demo) => {
      const demographicsResults = demo.data;
      const gender = demographicsResults.concepts[20].name;
      const probGender = demographicsResults.concepts[20].value;
      const age = demographicsResults.concepts[0].name;
      const probAge = demographicsResults.concepts[0].value;
      const multiCulture = demographicsResults.concepts[22].name;
      const probMultiCulture = demographicsResults.concepts[22].value;
      return {
        gender,
        probGender,
        age,
        probAge,
        multiCulture,
        probMultiCulture,
      };
    });
  };

  displayDemographics = (demographics) => {
    this.setState({ demographics: demographics })
  }

  onButtomSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then((response) =>
        this.displayDemographics(this.calculateDemographics(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { boxes, imageUrl, demographics } = this.state;
    // console.log(demographics);
    return (
      <div className="App">
        <Header />
        <MiddleSection />
        <DisplayScreen
          onInputChange={this.onInputChange}
          onButtomSubmit={this.onButtomSubmit}
          boxes={boxes}
          imageUrl={imageUrl}
          demographics={demographics}
        />
      </div>
    );
  }
}

export default App;

    
