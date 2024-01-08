import { Box,styled } from "@mui/material";
import "../src/App.css"

//Components Import
import Banner from "./components/banner";
import Home from "./components/home";
import Slider from "./components/carousel";
import Prize from "./components/prize-page";
import Instructor from "./components/instructor";
import Navbar from "./components/navbar";

const Container=styled(Box)`
  position:relative;
`
function App() {
  return (
    <Box className="App">
      <Container>
        <Prize/>
        <Banner/>
        <Navbar/>
        <Home/>
        <Instructor/>
        <Slider/>
      </Container>
    </Box>
  );
}

export default App;
