import React from "react";

import './Welcome.scss';


const Welcome = () => (
  <div className="welcome-container">
    
      
        <h1 className='welcome-title'>Welcome to Demographr</h1>
        <span>Your Computer Vision Assistant.</span>
      
        <p className='welcome-text'>Place image URL to get Demographic data back, 
        such as Age Appearance, Gender Appearance and Multicultural Appearance for at least one
          detected face.
        </p>
    
    
  </div>
);

export default Welcome;