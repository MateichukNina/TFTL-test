import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import  Group  from '../img/Group 53.png';
import  Union  from '../img/Union.svg';
import Burger from '../img/Burger.svg';

export const Layout = () => {


  return (
    <>
      <div className='header'>
        <ul className='nav-list '>
          <li>
            <NavLink><img src={Group}></img></NavLink>
            <div className="language-options" >
        <button className="language-item">Eng</button>
        <button className="language-item">Ua</button>
      </div>
          </li>
          <li>
            <NavLink className='logo logo-container' to="/"> <img src={Union} /></NavLink>
            <div class="fill"></div>
          </li>
          <li>
            <NavLink className='burger' to="/"> <img src={Burger} /></NavLink>
           
          </li>
        </ul>
      </div>
      <main>
        <Suspense fallback={<div>Loadind...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
