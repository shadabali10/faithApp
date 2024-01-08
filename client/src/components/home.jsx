import { Box,styled } from "@mui/material"

// Components Import
import About from "./about"



const Component=styled(Box)`
    width:80%;
    margin:auto;
    margin-top:20px;
    position:relative;
`

const Home=()=>{
    return (
        <Component id="home">
            <About/>
        </Component>
    )
}

export default Home;