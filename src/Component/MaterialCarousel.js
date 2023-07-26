import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Card,  Image, Grid } from '@nextui-org/react';
import { BrowserView, MobileView } from 'react-device-detect';

//use https://swiperjs.com/

import './Styles/MaterialCarousel.css';
import Mur from '../assets/MaterialCarousel/146861139_3348520031920129_1214968104350249387_n.jpg'
import Perma from '../assets/MaterialCarousel/perma.jpg'

export default function MaterialCarousel() {

  return <div>
    <BrowserView>
    <Grid.Container style={{justifyContent:'center'}}>
      <Grid direction='row' md style={{justifyContent:'center'}}>
      <Card style={{ border:'1px solid #558F36', margin:"1%"}}>
        <Card.Header style={{justifyContent:'center', fontFamily:'Montserrat'}} ><h2>NOS MATERIAUX</h2> </Card.Header>
        <Grid.Container direction='row' >
          <div style={{ margin:'1%', width:'48%'}}>
            <Image src={Mur} style={{borderRadius:'5%'}}/>
          </div>
          <div style={{width: '48%', margin:'1%'}}>
            <h3 style={{fontFamily:'Montserrat', marginTop:'15%'}} >Pour construire nos maisons, nous choisissons un panachage d'ossature Bois et de C.L.T</h3>
            <h3 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Le C.L.T, en anglais le cross laminated timber, en francais le lamellé de bois croisé, est un ensemble de bois collés, et est très résistant</h3>
            <h3 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Sa résistance est comparable au béton! Il existe des immeubles de plus de 20 étages construits avec cette technique</h3>
          </div>
        </Grid.Container>
      </Card>
     
      <Card style={{ border:'1px solid #558F36', margin:"1%"}}>
        <Card.Header style={{justifyContent:'center', fontFamily:'Montserrat'}} ><h2>LA MAISON AUTOSUFFISANTE</h2> </Card.Header>
        <Grid.Container direction='row'>
        <div style={{width:'48%', margin:'1%'}}>
            <h3 style={{fontFamily:'Montserrat', marginTop:'15%'}} >Nous accompagnons ceux qui le souhaitent vers la maison autosuffisante</h3>
            <h3 style={{fontFamily:'Montserrat', marginTop:'10%'}} >1. Les panneaux photovoltaïques installés sur les toit terrasses</h3>
            <h3 style={{fontFamily:'Montserrat', marginTop:'10%'}} >2. La récupération et le filtrage d'eau de pluie</h3>
            <h3 style={{fontFamily:'Montserrat', marginTop:'10%'}} >3. La possibilité d'avoir un jardin en permaculture</h3>
        </div>
        <div style={{width:'48%', margin:'1%'}}>
          <Image src={Perma} style={{borderRadius: '5%'}}/>
        </div>
       </Grid.Container>
      </Card>
      </Grid>
    </Grid.Container>
  </BrowserView>
  <MobileView>
  <Grid.Container style={{justifyContent:'center'}}>
      <Grid style={{justifyContent:'center'}}>
      <Card style={{ border:'1px solid #558F36', margin:"1%", width:'98%'}}>
        <Card.Header style={{justifyContent:'center', fontFamily:'Montserrat'}} ><h3>NOS MATERIAUX</h3> </Card.Header>
          <div style={{ margin:'1%'}}>
            <Image src={Mur} style={{borderRadius:'5%'}}/>
          </div>
          <div style={{margin:'1%'}}>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Pour construire nos maisons, nous choisissons un panachage d'ossature Bois et de C.L.T</h4>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Le C.L.T, en anglais le cross laminated timber, en francais le lamellé de bois croisé, est un ensemble de bois collés, et est très résistant</h4>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Sa résistance est comparable au béton! Il existe des immeubles de plus de 20 étages construits avec cette technique</h4>
          </div>
      </Card>
      <Card style={{ border:'1px solid #558F36', margin:"1%", width:'98%'}}>
        <Card.Header style={{justifyContent:'center', fontFamily:'Montserrat'}} ><h3>LA MAISON AUTOSUFFISANTE</h3> </Card.Header>
        <Grid.Container direction='row'>
          <div style={{margin:'1%'}}>
          <Image src={Perma} style={{borderRadius: '5%'}}/>
        </div>
        <div style={{margin:'1%'}}>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >Nous accompagnons ceux qui le souhaitent vers la maison autosuffisante</h4>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >1. Les panneaux photovoltaïques installés sur les toit terrasses</h4>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >2. La récupération et le filtrage d'eau de pluie</h4>
            <h4 style={{fontFamily:'Montserrat', marginTop:'10%'}} >3. La possibilité d'avoir un jardin en permaculture</h4>
        </div>
        
       </Grid.Container>
      </Card>
      </Grid>
    </Grid.Container>
  </MobileView>
  </div>
}