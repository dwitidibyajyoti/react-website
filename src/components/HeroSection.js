import React from 'react';
import Button from './Button';
import './Herosection.css';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-conteiner">
      <video src="/videos/video-2.mp4" autoPlay loop muted />

      <h1> ADVENTURE AWAITS</h1>
      <p> WHT ARE YOU WEITING FOR</p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          WATCH TRAILER far.<i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
