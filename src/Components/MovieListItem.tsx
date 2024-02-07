import { IMovie } from "../TS/interfaces/global_interfaces";
import Rating from "./Rating";


interface Props {
    movie: IMovie;
}
interface Props {
    movie:{
        id: number;
        title: string;
        director: string;
        runtime: number;
        rating: number;
    }
}
export default function MovieListItem({ movie }: Props){
    return (
        <div className="movie-card">
            <h2>Title: {movie.title}</h2>
            <h5>Director: {movie.director}</h5>
            <span>Runtime: {movie.runtime}</span>
            <div>
                <Rating item={movie}  />
            </div>
        </div>
    )
}