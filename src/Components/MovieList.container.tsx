import { useState, useEffect } from "react";
import { IMovie } from "../TS/interfaces/global_interfaces";
import MovieList from "./MovieList";

export default function MovieListContainer() {
    const [movies, setMovies] = useState<IMovie[]>([]);
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

    const handleRating = (id: number, rating: number): void => {
        setMovies((prevMovie) => {
            return prevMovie.map((movie) => {
                if (movie.id === id) movie.rating = rating;
                return movie;
            });
        });
    };

    return <MovieList movies={movies} err={err} handleRating={handleRating} />
}