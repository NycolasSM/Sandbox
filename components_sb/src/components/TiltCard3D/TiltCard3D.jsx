import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltCard3D.css';

const TiltCard3D = () => {

  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);

    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const options = {
    scale: 1,
    speed: 2500,
    max: 10,
    glare: true,
    "max-glare": 0.1
  };

  /* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */


  return (
    <>
      <Tilt className="cardTilt" options={options}>
        <div className='card3D'>
          <img className="cardProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTNnfKwI4sGVBJ9Q4FMLUTTmDZgRU3fR3tcvPRRYsKKk94A9vQDsxTXMQxPzeMszNsJI&usqp=CAU" alt="" />
          <div className='cardProfileDivisor' />
          <div className='cardProfileInfo'>
            <h2>
              Lorem Ipsum
            </h2>
            <p>
              dolor sit amet consectetur adipisicing elit. Voluptates, maxime! Odit aliquid consequatur delectus optio facilis voluptate magnam tempore officiis voluptatum fuga, eos, iste unde ipsum nulla, quisquam ipsam quae.
            </p>
            <p>
              Web Developer
            </p>
            <div className='cardProfileStickers'>
              <img src="https://media.istockphoto.com/vectors/nodejs-vector-logo-backend-programming-in-javascript-server-vector-id1195857274?k=20&m=1195857274&s=170667a&w=0&h=k8oHsv3ehrvhviozLlvhEjGHweiHU7hbBv7bHEkgUqc=" alt="" />
              <img src="https://rlv.zcache.com/html_5_logo_round_sticker-r10f41fb54bc84b71ab5f2f27cdf682ae_0ugmp_8byvr_704.webp" alt="" />
              <img src="https://www.stickersdevs.com.br/wp-content/uploads/2020/01/hexa_CSS_adesivo_sticker.jpg" alt="" />
            </div>
          </div>
        </div>
      </Tilt>
    </>
  )
}

export default TiltCard3D
