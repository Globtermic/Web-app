import image from '../assets/Transparancia - vue 3_4.jpg'
import React from 'react'
import { Card, Col, Text, Image, Spacer } from "@nextui-org/react";
import MaterialCarousel from '../Component/MaterialCarousel';

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
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
        <Text h1 size={50} style={{ 
          position: "absolute", 
          left: "50%", 
          top: "50%", 
          width: "75%", 
          transform: "translate(-50%, -50%)", 
          color: "white",}}>
          RÉINVENTONS NOTRE MODE DE VIE ET FAISONS ÉVOLUER NOTRE VISION DE L'HABITAT
        </Text>
    </div>
  )
}

function MaterialContruction() {
  return(
    <MaterialCarousel/>
  )
}

export default function MainPresentation() {
  return (
    <div>
      <IntroPage/>
      <Spacer y={3}/>
      <MaterialContruction/>
    </div>
  )
}
