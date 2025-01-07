'use client';

import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import classes from './Demo.module.css';


const MyCarousel = () => {
  return (
    <Carousel
    maw={400}          // Maximum width of the carousel
    mx="auto"           // Center the carousel
    withIndicators      // Show indicators (dots at the bottom)
    height={275}        // Set height of each slide
    slideSize="100%"    // Slide size to take 100% of the container width
    align="center"      // Center slides vertically
    loop                 // Loop slides (endless carousel)
    slidesToScroll={1}  // Ensure that only one slide is shown at a time
    classNames={classes}
    >
      <Carousel.Slide>
        <Image src="/loginslide01.webp" alt="logo" width={400}  height={40} style={{borderRadius:"4.5%" , marginTop:"5%"}}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/loginslide02.webp" alt="logo" width={400}  height={120} style={{borderRadius:"4.5%" , marginTop:"5%"}}/>
      </Carousel.Slide>
      
    </Carousel>
  );
};

export default MyCarousel;
