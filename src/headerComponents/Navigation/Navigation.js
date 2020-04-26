import React from 'react';
import { signInWithGoogle } from "../../firebase/firebase.utils";


import './Navigation.scss';

const Navigation = () => {
    return (
      <div className="nav-container">
        <nav className="nav-style">
          <p onClick={signInWithGoogle}>Sign In</p>
        </nav>
      </div>
    );
}

export default Navigation;