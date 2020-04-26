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
      boxes: []
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

  calculateDemographics = (data) => {
    return data.outputs[0].data.regions.map((demo) => {
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
      const multiCulture2 = demographicsResults.concepts[23].name;
      console.log(multiCulture2);
      const probMultiCulture2 = demographicsResults.concepts[23].value;
      console.log(probMultiCulture2);
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

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtomSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then((response) =>
        this.calculateDemographics(response)
      )
      // .then((response) =>
      //   this.displayFaceBoxes(this.calculateFaceLocations(response))
      // )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MiddleSection />
        <DisplayScreen
          onInputChange={this.onInputChange}
          onButtomSubmit={this.onButtomSubmit}
          boxes={this.state.boxes}
          imageUrl={this.state.imageUrl}
          calculateDemographics={this.calculateDemographics}
        />
      </div>
    );
  }
}

export default App;

    
