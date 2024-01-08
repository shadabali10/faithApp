import {Box, Button, Typography,styled,} from "@mui/material"
import data from "../constants/data.js"
import {CurrencyRupee} from '@mui/icons-material';
import {OndemandVideo} from '@mui/icons-material';
import {QuestionAnswer} from '@mui/icons-material';

const Container=styled(Box)`
    position:absolute;
    z-index:2;
    top:470px;
    right:300px;
    background:#F8EDFF;
`
const Heading=styled(Typography)`
    font-weight:bold;
    font-size:18px;
`

const Price=styled(Typography)`
    display:flex;
    align-items:center;
    `
    
const ButtonContainer=styled(Box)`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;
`

const StyledBtn=styled(Button)`
    width:100%;
    border-radius:30px;
    font-weight:600;
    background:#190482
`

const Point=styled(Box)`
    display:flex;
    margin-top:5px;
    align-items:center;

`
const Prize=()=>{
    return (
        <Container>
            <Box style={{padding:"20px"}}>
                <Box>
                    <Heading>Course Fees</Heading>
                    <Price>
                        <CurrencyRupee style={{fontSize:"40px",fontWeight:600}}/>
                        <Typography style={{fontSize:"40px",fontWeight:600}}>
                            {data.course.fee.amount}
                        </Typography>
                    </Price>
                </Box>
                <Box>
                    <Typography style={{fontSize:"18px",fontWeight:600,marginTop:"10px"}}>What's Included</Typography>
                    <Point>
                        <OndemandVideo style={{fontSize:"15px"}}/>
                        <Typography style={{fontSize:"15px",marginLeft:"10px"}}>5 On Demand Vedios</Typography>
                    </Point>
                    <Point>
                        <OndemandVideo style={{fontSize:"15px"}}/>
                        <Typography style={{fontSize:"15px",marginLeft:"10px"}}>2 Live Stream Sessions</Typography>
                    </Point>
                    <Point>
                        <QuestionAnswer style={{fontSize:"15px"}}/>
                        <Typography style={{fontSize:"15px",marginLeft:"10px"}}>Live Q&A with nityanand charan das</Typography>
                    </Point>
                    <Point>
                        <QuestionAnswer style={{fontSize:"15px"}}/>
                        <Typography style={{fontSize:"15px",marginLeft:"10px"}}>Interactive Whatsapp Community</Typography>
                    </Point>
                       
                </Box>
                <ButtonContainer>
                    <StyledBtn variant="contained">Register Today</StyledBtn>
                </ButtonContainer>

            </Box>
        </Container>
    )
}

export default Prize