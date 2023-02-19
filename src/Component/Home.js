import React from "react";
import Common from "./Common";
import imgHome from './../img/home.svg';

const Home = () => {
  return (
    <Common
      heading="Grow you business with"
      name="Fas Foysal"
      info="We are team talanted developer making website"
      btn="Get Start"
      img = {imgHome}
    />
  );
};

export default Home;
