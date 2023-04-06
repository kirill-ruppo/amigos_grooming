import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box } from "@mui/material";
import React  from 'react';
export const sliderPhotosData = [
  {
    image: "../images/imgCarousel/first.jpg",
  },
  {
    image: "../images/imgCarousel/second.jpg",
  },
  {
    image: "../images/imgCarousel/third.jpg",
  },
  {
    image: "../images/imgCarousel/fourth.jpg",
  },
  {
    image: "../images/imgCarousel/fifth.jpg",
  },
  {
    image: "../images/imgCarousel/sixth.jpg",
  },
  {
    image: "../images/imgCarousel/seventh.jpg",
  },
  {
    image: "../images/imgCarousel/eighth.jpg",
  },
  {
    image: "../images/imgCarousel/nineth.jpg",
  },
  {
    image: "../images/imgCarousel/tenth.jpg",
  },
]


function Slider(){





return(
<Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1200
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 850,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1200,
            min: 851
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {sliderPhotosData.map(({image})=> (
 
              <Box sx={{
              width:"100%",
              height:"100%"
            }}>
                <img style={{ width:"90%"}} alt="name" src={image}/>
                
            </Box>
          

        
      ))
        
      }
            
    </Carousel>

      


   

    )
  }


  export default Slider
  