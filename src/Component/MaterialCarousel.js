import React, {useState, useRef} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Pagination, Card, Spacer, Image } from '@nextui-org/react';
import dummy from '../assets/materiauxBio.jpg';

const styles = {
  titleStyle: {
    marginTop:20,
    fontWeight: 'initial',
    fontSize: 23,
    marginLeft:7
  },
  textStyle: {
    marginTop:10,
    fontWeight: 'initial',
    fontSize: 23,
    marginLeft:7
  }
}

function BioMaterial() {
  return(
    <div style={{height: "100%", width: "100%", alignItems:'center'}}>
     <h1 style = {{color: '#558F36', textAlign:'center'}}>NOS MATERIAUX</h1>
     <div style={{height: "100%", width: "100%", display: "flex"}}>
      <div className='text' style={{height: "100%", width: "50%", alignItems:'center'}}>
       
      <h3 style ={styles.titleStyle}>Pour construire nos maisons, nous optons pour un panachage d'ossatureBois et de C.L.T</h3>
        <h3 style ={styles.titleStyle}>En anglais le <b>cross laminated timber</b>, en francais <b>lamellé de bois croisé</b>, le C.L.T est un ensemble de bois collés, et est <b>très résistant</b> </h3>
        <h3 style={styles.titleStyle}>Sa résistance est comparable au béton ! Il existe des immeubles de plus de 20 étages construits avec cette technique.</h3>
      </div>
      <div className='image' style={{left: "50%", width:"50%"}}>
        <Image src={dummy} style={{borderRadius:15}}
        />
      </div>
      </div>
    </div>
  )
}

function SelfSufficiency() {
  return(
    <div style={{height: "100%", width: "100%", alignItems:'center'}}>
     <h1 style = {{color: '#558F36', textAlign:'center'}}>VERS LA MAISON AUTOSUFFISANTE</h1>
     <div style={{height: "100%", width: "100%", display: "flex"}}>
      <div className='text' style={{height: "100%", width: "50%", alignItems:'center'}}>
       
        <h3 style ={styles.titleStyle}>Nous accompagnons ceux qui le souhaitent vers <b>la maison autosuffisante</b></h3>
        <h3 style ={styles.titleStyle}>1. <b>Les panneaux photovoltaïques</b> installés sur les toits terrasses</h3>
        <h3 style ={styles.textStyle}>2. La récupération et le filtrage de l'eau de pluie.</h3>
        <h3 style ={styles.textStyle}>3. La possibilité d'avoir un jardin en permaculture</h3>
      </div>
      <div className='image' style={{left: "50%", width:"50%"}}>
        <Image src={dummy} style={{borderRadius:15}}
        />
      </div>
      </div>
    </div>
  )
}

export default function MaterialCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const intervalRef = useRef(null);
  
    const handleSlideChange = (newSlide) => {
      setActiveSlide(newSlide - 1);
    };
  
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % 2);
      }, 4000);
    };
  
    const stopCarousel = () => {
      clearInterval(intervalRef.current);
    };
  
    const handleMouseEnter = () => {
      stopCarousel();
    };
  
    const handleMouseLeave = () => {
      stopCarousel();
    };
  
    return (
      
      <div className="App" style={{height: "800px"}}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={2}
          currentSlide={activeSlide}
          infinite
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          
        >
            <Spacer y={3}/>
            <Card style={{width: "75%", left: "50%", top: "25px", height: "500px", maxWidth: "900px", transform: "translate(-50%)"}}>
                <Slider>
                     <Slide index={0} ><SelfSufficiency/></Slide>
                    <Slide index={1}><BioMaterial/></Slide>
              </Slider>
            </Card>
          <Pagination style={{left: "50%", transform: "translate(-50%)"}}
          onlyDots
          total={2}
          page={activeSlide + 1}
          onChange={(newSlide) => handleSlideChange(newSlide)}
          controls={false}
          />
        </CarouselProvider>
      </div>
      
    );
}