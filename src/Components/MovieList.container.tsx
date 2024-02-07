import { useState, useEffect, useContext } from "react";
import { IMovie } from "../TS/interfaces/global_interfaces";
import MovieList from "./MovieList";
import MovieContext from "./MovieContext";

export default function MovieListContainer() {
    const [movies, setMovies] = useContext(MovieContext);
    const [err, setErr] = useState<Error | null>(null);

    const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`http://localhost:5000/movies`, options);
                setMovies((await data.json()) as IMovie[]);
            } catch (error) {
                setErr(error as Error);
            }
        })();
    }, []);


    return <MovieList movies={movies!} err={err} />
}