import React from 'react';
import Clarifai from 'clarifai';
// import { connect } from "react-redux";

import './App.css';

import Header from './headerComponents/header/Header';
import MiddleSection from './bodyComponents/middleSectionComponent/MiddleSection/MiddleSection';
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
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtomSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].data.concepts);
        }
      )
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
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
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
