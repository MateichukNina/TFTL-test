import React from 'react';
import { Link } from 'react-router-dom';
import Elipse from '../img/Ellipse.png';
import buttons from '../img/buttons.png';

export const Main = () =>{
  return(
    <>
    <h1>full-cycle event agency</h1>
    <img className='circle' src={buttons}/>

   <img src={Elipse}></img>
    <ul className='nav-link'>
      <li><Link to="where" className='rotated-link1'>Where?</Link></li>
      <li><Link to="who" className='rotated-link2'>Who?</Link></li>
      <li><Link to="what" className='rotated-link3'>What?</Link></li>
    </ul>
    </>
  )
}