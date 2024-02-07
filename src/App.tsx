import MovieList from "./Components/MovieList.container"
import MoviesProvider from "./Components/MoviesProvider"


function App() {
  return (
    <>
      <h1>Move List</h1>
      <MoviesProvider>
        <MovieList /> 
      </ MoviesProvider>
    </>
  );
}

export default App
