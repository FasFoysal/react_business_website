import React from "react";
import Buttom from "./Buttom";
import {useNavigate} from 'react-router-dom';

const matginTop = {
  marginTop: "100px",
};
const colorC = {
  color: "orange",
};
const Common = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={matginTop} className="container text-center mb-5">
        <div className="row">
          <div className="col text-start mt-lg-5 pt-lg-5">
            <h2>{props.heading}</h2>
            <h2 style={colorC}>{props.name}</h2>
            <p>{props.info}</p>
            <button className="btn btn-outline-success" onClick={()=>{navigate('/services')}}>{props.btn}</button>
          </div>
          <div className="col">
            <img
              className=" animate__animated img-fluid animate__pulse animate__infinite infinite"
              alt="img"
              src={props.img}
            />
          </div>
        </div>
      </div>
      <Buttom />
    </>
  );
};

export default Common;
