import React, {useState, useRef} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Pagination, Card, Spacer, Image, Button } from '@nextui-org/react';
import dummy from '../assets/materiauxBio.jpg';
import { useTranslation } from 'react-i18next';

//use https://swiperjs.com/

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
  const {t, i18n} = useTranslation();
  return(
    <div style={{height: "100%", width: "100%", alignItems:'center'}}>
     <h1 style = {{color: '#558F36', textAlign:'center'}}>{t('homepage:ourMaterials').toUpperCase()}</h1>
     <div style={{height: "100%", width: "100%", display: "flex"}}>
      <div className='text' style={{height: "100%", width: "50%", alignItems:'center'}}>
       
      <h3 style ={styles.titleStyle}>{t('homepage:inOrderToBuildOurHouses')}</h3>
        <h3 style ={styles.titleStyle}>{t('homepage:cLT')}</h3>
        <h3 style={styles.titleStyle}>{t('homepage:cltResistance')}</h3>
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
  const {t, i18n} = useTranslation();
  return(
    <div style={{height: "100%", width: "100%", alignItems:'center'}}>
     <h1 style = {{color: '#558F36', textAlign:'center'}}>{t('homepage:inRouteForSelfSufficentHouse').toUpperCase()}</h1>
     <div style={{height: "100%", width: "100%", display: "flex"}}>
      <div className='text' style={{height: "100%", width: "50%", alignItems:'center'}}>
       
        <h3 style ={styles.titleStyle}>{t('homepage:weAccompanyEveryoneToTheSelfSufficentHouse')}</h3>
        <h3 style ={styles.titleStyle}>1. {t('homepage:solarPanels') }</h3>
        <h3 style ={styles.textStyle}>2. {t('homepage:rainWaterRecuperation')}</h3>
        <h3 style ={styles.textStyle}>3. {t('homepage:permaCulture')} </h3>
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
        {/* <Button onPress={() => console.log(activeSlide)}></Button> */}
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
            <Card borderWeight='normal' variant='bordered' style={{width: "75%", left: "50%", top: "25px", height: "500px", maxWidth: "900px", transform: "translate(-50%)"}}>
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