import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import  Group  from '../img/Group.png';
import  Union  from '../img/Union.png';
import Burger from '../img/Burger.png';
export const Layout = () => {
  return (
    <>
      <div className='header'>
        <ul className='nav-list'>
          <li>
            <NavLink to="/what"><img src={Group}></img></NavLink>
            
          </li>
          <li>
            <NavLink to="/"> <img src={Union} /></NavLink>
           
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
