import {Box, Typography,styled} from "@mui/material"
import data from "../constants/data.js"
import {Instagram} from '@mui/icons-material';
import {Facebook} from '@mui/icons-material';
import {Twitter} from '@mui/icons-material';
import {YouTube} from '@mui/icons-material';


const Component=styled(Box)`
    margin-top:50px;
    width:80%;
    margin:auto;
    margin-top:30px;
`
const Heading=styled(Typography)`
    font-size: 30px;
    font-weight: 600;
`
const BioContainer=styled(Box)`
    display:flex;
`

const Bio=styled(Box)`
    display:flex;
    width:50%;
    margin-top:20px;
    `
    
    const Info=styled(Box)`
    width:50%;
    margin-top:20px;
`
const BioText=styled(Typography)`
    padding:0px 20px;
`
const Image=styled("img")({
    width:"100%",
    borderRadius:"50%"
})

const ImageContainer=styled(Box)`
    width:"50%",
    height:"50%",
`

const IconContainer=styled(Box)`
    display:flex;
    width:60%;
    margin:auto;
    margin-top:20px;
    justify-content:space-between;
    align-items:center;
`

const Icon=styled(Typography)`
    display:flex;
    align-items:center;
`


const Instructor=()=>{

    const url="https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg"
    return (

        <Component id="instructor">
            <Box>
                <Heading>About The Instructor</Heading>
                <BioContainer>
                    <Bio>
                        <ImageContainer>
                            <Image src={url} alt="Image"></Image>
                        </ImageContainer>
                        <BioText>{data.Bio.bio}</BioText>
                    </Bio>
                    <Info>
                        <BioText>{data.Bio.bio}</BioText>
                    </Info>
                </BioContainer>
                <IconContainer>
                    <Icon>
                        <Instagram style={{fontSize:"35px",marginRight:"5px",cursor:"pointer"}}/>
                        Instagram
                    </Icon>
                    <Icon>
                        <Facebook style={{fontSize:"35px",marginRight:"5px",cursor:"pointer"}}/>
                        Facebook
                    </Icon>
                    <Icon>
                        <Twitter style={{fontSize:"35px",marginRight:"5px",cursor:"pointer"}}/>
                        Twitter
                    </Icon>
                    <Icon>
                        <YouTube style={{fontSize:"35px",marginRight:"5px",cursor:"pointer"}}/>  
                        Youtube
                    </Icon>
                </IconContainer>
            </Box>
        </Component>
    )
        
}

export default Instructor