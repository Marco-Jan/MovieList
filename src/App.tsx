
import "./Components/css/MovieList.module.css"
import "./App.css"
import styled from "@emotion/styled"
import MovieList from "./Components/MovieList"
import MoviesProvider from "./Components/MoviesProvider"
import { Typography } from "@mui/material"

//Button style u start //
const StyledDiv = styled("div")`
  padding 2rem;
  background-color: ${(props) => props.color || "#62ED26"}`;

const Button = styled("button")`
  color: #000;
  padding: 10px;
  background-color: #f0e259;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    color: #fff; 
    background-color: #f08e59; }`


//Button style end //

function App() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}>
        Move List
      </Typography>
      <MoviesProvider>
        <MovieList />
      </ MoviesProvider>
      <StyledDiv color="coral">
        <Button>Click Me</Button>
      </StyledDiv>
  
    </>
  );
}

export default App
