import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const navBar = (val) => {
  return (
    <div className={val}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contract">Contract</NavLink>
    </div>
  );
};

const Manu = () => {
    const [nav,setNav] = useState(false);
    const onClick = ()=>{
        console.log(nav)
        nav?setNav(false):setNav(true);
    }
    
  return (
    <>
      <div className=" container">
        <div className="manu_main">
          <NavLink to="/">
            {nav?null:<h2>Fas Foysal</h2>}
          </NavLink>
          {navBar('navHide')}
          {nav?navBar('navShow'):null}
          <div className="navs" onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Manu;
