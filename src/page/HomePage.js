import image from '../assets/Transparancia - vue 3_4.jpg'
import React from 'react'
import { Card, Col, Text, Image, Spacer } from "@nextui-org/react";
import MaterialCarousel from '../Component/MaterialCarousel';
import torres from '../assets/Torres_vueFace.jpg';
import terrazza from '../assets/Terrazza_vue3.jpg';
import "@fontsource/montserrat";
import './HomePageStyles.css';
import transparencia from '../assets/Transparancia_vueInt.jpg';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function PresentationConstructionAsset() {
  const {t, i18n} = useTranslation();
  return <div style={{position: "relative"}} className='a'>
  <Image
    src={torres}
    objectFit='cover'
    width="100%"
    alt="test"
    height={800}
    
    />
    <h1 size={50} className= 'constructionTextMainPresStyle'>
      {t('homepage:constructions').toUpperCase()}
    </h1>
    <h1 size={50} className='constructionTextSecPresStyle'>
    {t('homepage:individualHouses').toUpperCase()}
    </h1>
    <h1 size={50} className='constructionTextThirdPresStyle'>
    {t('homepage:extensions').toUpperCase()}
    </h1>
    <h1 size={50} className='constructionTextFourthPresStyle'>
    {t('homepage:cottagesForRent').toUpperCase()}
    </h1>
    
</div>
}

function PresentationRenovationAsset() {
  const {t, i18n} = useTranslation();
  return <div style={{position: "relative"}} className='a'>
  <Image
    src={terrazza}
    objectFit='cover'
    width="100%"
    alt="test"
    height={800}
    
    />
    <h1 size={50} className='renovationTextMainPresStyle'>
      {t('homepage:renovations').toUpperCase()}
    </h1>
    <h1 size={50}  className='renovationTextSecPresStyle'>
      TITRE 1
    </h1>
    <h1 size={50} className='renovationTextThirdPresStyle'>
      TITRE 2
    </h1>
    <h1 size={50} className='renovationTextFourthPresStyle'>
      TITRE 3
    </h1>
    
</div>
}

function PresentationAmenagementAsset() {
  const {t, i18n} = useTranslation();
  return <div style={{position: "relative"}} className='a'>
  <Image
    src={transparencia}
    objectFit='cover'
    width="100%"
    alt="test"
    height={800}
    
    />
    <h1 size={50} className='constructionTextMainPresStyle'>
      {t('homepage:exteriorFacilities').toUpperCase()}
    </h1>
    <h1 size={50}  className='constructionTextSecPresStyle'>
    {t('homepage:permacultureGarden').toUpperCase()}
    </h1>
    <h1 size={50} className='constructionTextThirdPresStyle'>
      TITRE 2
    </h1>
    <h1 size={50} className='constructionTextFourthPresStyle'>
    {t('homepage:poolConstruction').toUpperCase()}
    </h1>
    
</div>
}


function IntroPage() {
  const {t, i18n} = useTranslation();
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
          color: "white",
          backgroundColor: "rgba(0,0,0,.3)",}}>
          {t('homepage:catchSentance').toUpperCase()}
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
  return (
    <div>
      <Helmet>
        <title>Globtermic</title>
        </Helmet>
      <IntroPage/>
      <Spacer y={3}/>
      <MaterialContruction/>
      <Spacer y={3}/>
      <PresentationConstructionAsset/>
      <Spacer y={3}/>
      <PresentationRenovationAsset/>
      <Spacer y={3}/>
      <PresentationAmenagementAsset/>
      <Spacer y={3}/>
    </div>
  )
}