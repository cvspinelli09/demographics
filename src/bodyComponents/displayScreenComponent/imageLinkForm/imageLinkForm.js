import React from 'react';
// import { connect } from 'react-redux';


import './imageLinkForm.scss';


const ImageLinkForm = ({ onInputChange, onButtomSubmit }) => {
    return (
      <div className='form-container'>
        <div className='input-container'>
            <input 
                placeholder='PASTE YOUR IMAGE URL HERE' 
                style={{fontFamily: 'open-sans', fontSize: '1em', padding: '0 10px', color: 'black' }} 
                className='input' 
                type="text" 
                onChange={onInputChange}
            />
            <button 
              className='button'
              onClick={onButtomSubmit}  
            >Analyse</button>
        </div>
      </div>
    );
}

export default ImageLinkForm;