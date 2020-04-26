import React from "react";

import FaceRecognition from '../faceRecognition/faceRecognition';
import Demographics from '../demographics/demographics'; 
import ImageLinkForm from "../../displayScreenComponent/imageLinkForm/imageLinkForm";

import "./displayScreen.scss";

const DisplayScreen = ({
  onInputChange,
  onButtomSubmit,
  imageUrl,
  boxes,
  calculateDemographics
}) => (
  <div>
    <div className="">
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtomSubmit={onButtomSubmit}
      />
    </div>
    <div className="screen-container">
      <div className="face-container">
        <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
      </div>
      <div className="demographics-container">
        <Demographics calculateDemographics={calculateDemographics} />
      </div>
    </div>
  </div>
);

export default DisplayScreen;
