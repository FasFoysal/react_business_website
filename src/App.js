import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Manu from './Manu';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contract from './Component/Contract';
import "animate.css";

const App = () => {
  return (
    <>
        <Manu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/contract" element={<Contract />}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    </>
  )
}

export default App