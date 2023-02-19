import React from "react";
import Data from "./Data";
import Buttom from "./Buttom";

const Services = () => {
  return (
    <>
      <h1 className=" text-center m-5">Our Service</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
      {Data.map((value, index) => {
        return(
          <div className="card ms-5 m-5 " style={{ width: "18rem" }} key={index}>
          <img src={value.img} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{value.tittle}</h5>
            <p className="card-text">{value.about}</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/FasFoysal"
              className="btn btn-primary"
            >
              FasFoysal
            </a>
          </div>
        </div>
        )
      })}
      </div>
      <Buttom />
    </>
  );
};

export default Services;
