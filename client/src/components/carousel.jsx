import {Typography,Box ,styled} from "@mui/material"
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviews from "../constants/reviews.js";


const Component=styled(Box)`
  margin-top:30px;
  margin-bottom:100px;
`

const Review=styled(Box)`
  width:100%;
  height:250px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background:#F8EDFF;
  margin-top:50px;

`

const TextContainer=styled(Box)`
    height:120px;
    display:flex;
    align-items:center;
`

const Text=styled(Typography)`
    text-align:center;
    font-size:20px;
    width:600px;
    font-weight:600;
    padding:10px 0px;
    text-decoration:
`
const Person=styled(Box)`
    margin-top:10px;
    display:flex;
    margin-bottom:10px;
    
`

const ImageContainer=styled(Box)`
    width:50px;
    height:50px;
    `
    
const Image=styled('img')({
    width:"100%",
    height:"100%",
    borderRadius:"50%"
})

const Intro=styled(Box)`
    color:#868686;
    font-weight:600;
`

const Slider = () => {
  const [maindata, setMaindata] = useState(reviews);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const totalItems = maindata.length;

  return (
    <Component id="reviews">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        beforeChange={(previousSlide, nextSlide) => {
          if (nextSlide === totalItems - 1 && previousSlide === 0) {
            // When clicking back arrow on the first page, go to the last page
            setMaindata((prevData) => {
              const updatedData = [...prevData];
              const lastItem = updatedData.pop();
              updatedData.unshift(lastItem);
              return updatedData;
            });
          }
        }}
      >
        {maindata.map((each) => (
          <div key={each.id}>
            <Review>
                <TextContainer>
                    <Text>{each.review}</Text>
                </TextContainer>
                <Person>
                    <ImageContainer>
                        <Image src={each.url}></Image>
                    </ImageContainer>
                    <Intro style={{padding:"0px 10px"}}>
                        <Typography>{each.name}</Typography>
                        <Typography>{each.post}</Typography>
                    </Intro>
                </Person>
            </Review>
          </div>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slider;