import React from 'react';
import logo from './github.png'
import './style.css'






const Header = () => {
  return (
        <header className="text-center">
            <img src={logo} alt="github logo"></img>
        </header>

  );
}

export default Header;