import MovieListItem from "./MovieListItem";
import "../MovieList.css";
import { IMovie } from "../TS/interfaces/global_interfaces";
import useMovies from "./useMovies";



export default function MovieList() {
    const [movies, err] = useMovies();
    {
        if (err !== null) {
            return <div>{(err as Error).message}</div>
        } else {
            return (
                <div className="container">
                    {" "}
                    {(movies as IMovie []).map((movie: IMovie): JSX.Element => {
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

