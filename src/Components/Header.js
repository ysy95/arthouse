import React from 'react';

function Header(props) {
  return (
    <>
    <header>
      <h1>
        <img src={`${process.env.PUBLIC_URL}/img/logoRed.png`}/>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
      </h1>
      
    </header>
    </>
  );
}

export default Header;