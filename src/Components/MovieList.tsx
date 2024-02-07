import MovieListItem from "./MovieListItem";
import "../MovieList.css";
import { IMovie } from "../TS/interfaces/global_interfaces";


interface Props {
    movies: IMovie[];
    err: Error | null;
}

export default function MovieList({ movies, err }: Props) {
    {
        if (err !== null) {
            return <div>{err?.message}</div>
        } else {
            return (
                <div className="container">
                    {" "}
                    {movies.map((movie): JSX.Element => {
                        return (
                            <MovieListItem
                                key={movie.id}
                                movie={movie}
                             />
                        )
                    })}
                </div>
            )
        }
    }
}

