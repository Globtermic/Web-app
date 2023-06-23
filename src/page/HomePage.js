import image from '../assets/Transparancia - vue 3_4.jpg'
import React from 'react'
import { Card, Col, Text, Image, Spacer } from "@nextui-org/react";
import MaterialCarousel from '../Component/MaterialCarousel';
import { useState, useEffect } from 'react';

function PresentationAsset({width, title}) {
  return <div style={{display:'flex', justifyContent:'center', marginBottom:20, alignItems:'center'}}>
    <Card style={{alignItems:'center', width: "75%", top: "25px", height: "500px", maxWidth: {width}, border:'2px solid black' }}>
      <Card.Body>
        <h1>{title}</h1>
        </Card.Body>
    </Card>
  </div>
}


function IntroPage() {
  return (
    <div style={{position: "relative"}} className=''>
      <Image
        src={image}
        objectFit='cover'
        width="100%"
        alt="test"
        style={{filter: "blur(5px)"}}
        height={800}
        
        />
        <div className="blur-overlay" style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
        <h1 size={50} style={{ 
          position: "absolute", 
          left: "50%", 
          top: "50%", 
          width: "75%", 
          transform: "translate(-50%, -50%)", 
          color: "white",}}>
          RÉINVENTONS NOTRE MODE DE VIE ET FAISONS ÉVOLUER NOTRE VISION DE L'HABITAT
        </h1>
    </div>
  )
}

function MaterialContruction() {
  return(
    <MaterialCarousel/>
  )
}

export default function MainPresentation() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }
  );
  return (
    <div>
      <IntroPage/>
      <Spacer y={3}/>
      <MaterialContruction/>
      <Spacer y={3}/>
      <PresentationAsset width={windowSize[0]} title={"CARTE 1"} />
      <PresentationAsset width={windowSize[0]} title={"CARTE 2"} />
      <PresentationAsset width={windowSize[0]} title={"CARTE 3"} />
      <PresentationAsset width={windowSize[0]} title={"CARTE 4"} />
    </div>
  )
}
