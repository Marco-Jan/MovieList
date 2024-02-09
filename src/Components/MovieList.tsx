import MovieListItem from "./MovieListItem";
import { IMovie } from "../TS/interfaces/global_interfaces";
import useMovies from "./useMovies";
import { Container, Grid, TextField } from "@mui/material";
import { useState } from "react";



export default function MovieList() {
    const [movies, err, handleDelete] = useMovies();
    const [filter, setFilter] = useState<string>("");
    {
        if (err !== null) {
            return <Container>{(err as Error).message}</Container>
        } else {
            return (
                <Container sx={{ backgroundColor: "#EBEBEB", p: 10 }}>
                    <TextField
                        id="filter-input"
                        label="Liste Fiter"
                        variant="outlined"
                        sx={{ mb: 3 }}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <Grid container spacing={2}>
                        {" "}
                        {(movies as IMovie[])
                            .filter((movie: IMovie) => {
                                return movie.title.toLowerCase().includes(filter.toLowerCase());
                            })
                            .map((movie: IMovie): JSX.Element => {
                                return (
                                    <MovieListItem
                                        key={movie.id}
                                        movie={movie}
                                        onDelete={handleDelete as (movie: IMovie) => Promise<void>}
                                    />
                                )
                            })}
                    </Grid>
                </Container>
            )
        }
    }
}

