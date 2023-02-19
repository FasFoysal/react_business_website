import React from 'react';
import Common from './Common';
import imgHome from './../img/about.svg';

const About = () => {
  return (
    <Common
    heading="Welcome to about pages"
    name="Fas Foysal"
    info="We are team talanted developer making website"
    btn="Get Start"
    img = {imgHome}
  />
  )
}

export default About