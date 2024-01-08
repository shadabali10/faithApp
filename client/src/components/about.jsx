import { Box, Typography, styled } from "@mui/material";
import data from "../constants/data.js";
import {Check} from '@mui/icons-material'

const Container = styled(Box)`
  
`;
const Textcontainer = styled(Box)`
  width: 50%;
`;
const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
`;

const Points=styled(Box)`
    display:flex;
    margin-top:7px;
`

const Features=styled(Box)`
    display:flex;
    margin-top:10px;
`
const About = () => {
  return (
    <Container>
      <Textcontainer>
        <Box>
          <Heading style={{marginTop:"30px"}}>About The Course</Heading>
          <Typography style={{ marginTop: "20px" }}>
            {data.aboutDesc.desc1}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            {data.aboutDesc.desc2}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            {data.aboutDesc.desc3}
          </Typography>
        </Box>
        <Box>
            <Heading style={{marginTop:"30px",marginBottom:"20px"}}>What To Expect From The Course</Heading>
            <Points>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>Learn to mange your relationships</Typography>
            </Points>
            <Points>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>Better Communication</Typography>
            </Points>
            <Points>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>Time Management</Typography>
            </Points>
            <Points>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>Forgiveness</Typography>
            </Points>
        </Box>
        <Box>
            <Heading style={{marginTop:"30px"}}>Key Topics Covered</Heading>
            <Typography style={{marginTop:"20px",marginBottom:"20px"}}>{data.TopicDesc.desc}</Typography>
            <Features>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>
                    <Typography style={{display:"inline",fontWeight:"600"}}>10 Written and Audio Sessions </Typography>
                    guiding you in decoding the language of numbers so that you can easily receive their insights and messages.
                </Typography>
            </Features>
            <Features>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>
                    <Typography style={{display:"inline",fontWeight:"600"}}>Intuitive exercises and homework </Typography>
                    walk you through the energies and values of numbers and number sequences so you can become your own authority.
                </Typography>
            </Features>
            <Features>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>
                    <Typography style={{display:"inline",fontWeight:"600"}}>A Handy reference </Typography>
                    to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.
                </Typography>
            </Features>
            <Features>
                <Check/>
                <Typography style={{marginLeft:"25px"}}>
                    <Typography style={{display:"inline",fontWeight:"600"}}>Expert techniques </Typography>
                    for manifestation offer simple ways to use numbers to co-create with the universe.
                </Typography>
            </Features>
        </Box>
      </Textcontainer>
    </Container>
  );
};

export default About;
