import { Box, Typography, styled } from "@mui/material";
import data from "../constants/data.js";

const Container = styled(Box)`
  width: 90%;
  margin: auto;
`;

const Heading = styled(Box)`
  background-image:
    linear-gradient(to left, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.75)),
    url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2qogRgQYyi9yej9oMjLGm1RKDKn9tRVfZ67m0zCowAzXL4c5');
  width: 100%; ;
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
  
`
const Textcontainer=styled(Box)`
    width:45%;
    position:absolute;
    bottom:0;
    margin-left:100px;
    margin-bottom:20px;   
`
const Title=styled(Typography)`
    padding-top:5px;
    color:white;
    font-size:40px;
    line-height:48px;
    font-weight:600;
`

const Name=styled(Typography)`
    color:#FBF9F1;
    font-size:18px;
    font-weight:500;
`



const Banner = () => {
  return (
    <Container>
      <Heading>
        <Textcontainer>
            <Name>{data.instructor.name}</Name> 
            <Title>{data.course.title}</Title> 
        </Textcontainer>
        </Heading>
    </Container>
  );
};

export default Banner;
