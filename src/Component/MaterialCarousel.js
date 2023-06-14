import React, {useState, useRef} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Pagination, Card, Spacer } from '@nextui-org/react';

function BioMaterial() {
  return(
    <div style={{height: "100%", width: "100%", display: "flex"}}>
      <div className='image' style={{height: "100%", width: "50%"}}>
        <h1>test2</h1>
      </div>
      <div className='text' style={{left: "50%"}}>
        <h1>Materiaux 100% ecologiques</h1>
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
          naturalSlideHeight={20}
          totalSlides={2}
          dragEnabled={false}
          currentSlide={activeSlide}
          infinite
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <Spacer y={3}/>
            <Card style={{width: "75%", left: "50%", top: "25px", height: "500px", maxWidth: "900px", transform: "translate(-50%)"}}>
                <Slider>
                    <Slide index={0}><BioMaterial/></Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
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
