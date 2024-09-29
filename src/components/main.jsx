import React from 'react';
import { Link } from 'react-router-dom';
import Elipse from '../img/Ellipse.svg';
import buttons from '../img/buttons.svg';

export const Main = () => {
  return (
    <div >
       <div className="marquee-container">
  <div className="marquee-row marquee-left">Текст біжить вліво</div>
  <div className="marquee-row marquee-right">Текст біжить вправо</div>
</div> 
      <img className="elipse" src={Elipse}></img>
      <h1 className="text">FULL-CYCLE<br />EVENT AGENCY</h1>
      <img className="circle" src={buttons} />

      <ul className="nav-link link">
        <li>
          <Link to="where" className="rotated-link1">
            Where?
          </Link>
        </li>
        <li>
          <Link to="who" className="rotated-link2">
            Who?
          </Link>
        </li>
        <li>
          <Link to="what" className="rotated-link3">
            What?
          </Link>
        </li>
      </ul>
    </div>
  );
};
