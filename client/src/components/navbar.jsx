import { Box, styled } from "@mui/material";
import { Link } from "react-scroll";

const Component = styled(Box)`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

const Container = styled(Box)`
  margin-left: 30px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  cursor: pointer;
  text-decoration: none;
  color: #333; /* Change the color as needed */
  position: relative;
  
  &:hover {
    color: #ff4500; /* Change the color on hover as needed */
  }
`;

const Navbar = () => {
  return (
    <Component>
      <Container className="navbar">
        <StyledLink offset={-100} spy={true} duration={1000} smooth={true} to="home">
          About
        </StyledLink>
        <StyledLink offset={-100} spy={true} duration={1000} smooth={true} to="instructor">
          Instructor
        </StyledLink>
        <StyledLink offset={-100} spy={true} duration={1000} smooth={true} to="reviews">
          Reviews
        </StyledLink>
      </Container>
    </Component>
  );
};

export default Navbar;
