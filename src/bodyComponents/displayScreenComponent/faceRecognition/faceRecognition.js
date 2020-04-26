import React from "react";

import "./faceRecognition.scss";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="image-container">
      <img className='image' id="inputimage" src={imageUrl} alt="" width="370" height="auto" />
      {boxes.map(box => {
        return (
          <div
            className="bounding-box"
            key={box.topRow}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ); 
      })
      }
    </div>
  );
};

export default FaceRecognition;
