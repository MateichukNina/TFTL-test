import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Main } from './main';
import { Who } from '../pages/who';
import { Where } from '../pages/where';
import { What } from '../pages/what';
import React from 'react';


export default function App(){
  return(
   
      <div className='container'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
           <Route path="who" element={<Who />}/>
            <Route path="where" element={<Where />}/>
            <Route path="what" element={<What />}/> 
          </Route>
        </Routes>
      </div>
    
  )
};

