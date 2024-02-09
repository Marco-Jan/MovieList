import { IMovie } from "../TS/interfaces/global_interfaces";
import Rating from "./Rating";
import style from "./css/MovieListItem.module.css";
import { Card, CardContent, Grid, Typography, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


interface Props {
    movie: IMovie;
    onDialog: (open: boolean, movie: IMovie) => void;
}
interface Props {
    movie: {
        id: number;
        title: string;
        director: string;
        runtime: number;
        rating: number;
    }
}
export default function MovieListItem({ movie, onDialog }: Props) {
    const classNames = [style.movieCard];
    if (movie.rating === 5) {
        classNames.push(style.fiveStars);
    }
    return (
        <Grid item>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Title: {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" component="h5" sx={{ mb: 1 }} >
                        Director: {movie.director}
                    </Typography>
                    <Typography variant="body1" component="span">
                        RunTime: {movie.runtime} min
                    </Typography>
                    <div>
                        <Rating item={movie} />
                    </div>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton color="primary" aria-label="delete-movie" onClick={() => onDialog(true, movie)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}