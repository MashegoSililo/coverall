import React from "react";
// import image from '../images/Zachariah-Hagy.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="first">
        <h1>What is Coverwall?</h1>
        <h2>Coverwall is an album cover collage generator inspired by album cover walls and poster collages.</h2>
        {/* <img className='about-image' alt="album cover" src={image} ></img> */}
        <h3>
          {" "}
          Coverwall recreates this concept digitally by using your top Spotify
          albums to build your collage.
        </h3>
        <br></br>
        <Link to='/' className='return-home'>Return Home to generate your own collage.</Link>
      </section>
      
    </div>
  );
};

export default About;
