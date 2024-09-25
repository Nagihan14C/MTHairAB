import React from 'react'
import {Routes, Route } from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import Tjanster from '../pages/tjanster';
import Kontakt from '../pages/kontakt';



export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tjanster' element={<Tjanster/>}></Route>

        <Route path='/kontakt' element={<Kontakt/>}></Route>
        <Route path='/about' element={<About/>}></Route>


    </Routes>
  )
}
