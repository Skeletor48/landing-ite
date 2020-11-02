import React from "react";
import Button from "./Button";
import './HeroSection.css';
import '../App.css';
import video from '../assets/videos/DJI_0379.MP4';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1> Code for coffe and food</h1>
      <p>Are you interested?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large">
          WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
