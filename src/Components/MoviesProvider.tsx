import { useState } from "react";
import { IMovie } from "../TS/interfaces/global_interfaces";
import MovieContext from "./MovieContext";

interface Props {
  children: React.ReactNode;
}

export default function MoviesProvider({ children }: Props) {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}