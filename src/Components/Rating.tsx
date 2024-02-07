import { StarBorder, Star } from "@mui/icons-material";
import { IMovie } from "../TS/interfaces/global_interfaces";
import MovieContext from "./MovieContext";
import { JSX, useCallback, useContext } from "react";


interface Props {
    item: IMovie;
}

export default function Rating({ item }: Props): JSX.Element[] {
    const [, setMovies] = useContext(MovieContext) //import only setter Funktion

    const handlerating = useCallback(
        (id: number, rating: number): void => {
            setMovies((prevMovie: IMovie[]) => {
                return prevMovie.filter((movie) => {
                    if (movie.id === id) movie.rating = rating;
                    return movie;
                });
            });
        },
        [setMovies]
    );

    const ratings: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
        ratings.push(
            <div
                style={{ display: 'inline-block' }}
                key={i}
                className="rating-btn"
                onClick={() => handlerating(item.id, i + 1)}
                onMouseOver={() => handlerating(item.id, i + 1)}
            >
                {item.rating > i ? <Star /> : <StarBorder />}
            </div>
        );
    }
    return ratings;
}