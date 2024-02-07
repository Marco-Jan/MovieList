import React, { useState } from "react";
import MovieContext from "./MovieContext";
import { IMovie } from "../TS/interfaces/global_interfaces";



interface Props {
    children: React.ReactNode;
}

export default function MoviewProvider({children}: Props) {

    const [movies, setMovies] = useState<IMovie[]>([]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>{children}</MovieContext.Provider>
    );
}