import React from 'react';
import HeaderForm from "./HeaderForm";
import '../stylesheets/Header.css';

function Header(props) {

  console.log(props);

  return (
    <header className="col2 mb-1">
      <div>
        <h1 className="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>

      <HeaderForm handleClick={props.handleHeaderClick}/>
    </header>
  );
}

export default Header;
