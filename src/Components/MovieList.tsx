import MovieListItem from "./MovieListItem";
import { IMovie, MovieInput } from "../TS/interfaces/global_interfaces";
import useMovies from "./useMovies";
import { Container, Grid, TextField, Fab } from "@mui/material";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";
import Add from "@mui/icons-material/Add";
import FormEdit from "./FormEdit";




export default function MovieList() {
    const [movies, err, handleDelete, handleSubmit] = useMovies();
    const [filter, setFilter] = useState("");
    const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; movie: IMovie | null }>({ open: false, movie: null });
    const [formDialog, setFormDialog] = useState(false);

    const handleDialog = (open: boolean, movie: IMovie) => {
        if (open) {
            setDeleteDialog({ open: true, movie: movie });
        } else {
            setDeleteDialog({ open: false, movie: null });
        }
    };


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
                                        onDialog={handleDialog}
                                    />
                                )
                            })}
                    </Grid>
                    <DeleteDialog
                        title="Delete Element"
                        text={`Are you sure you want to delete the movie "${deleteDialog.movie?.title}"`}
                        open={deleteDialog.open}
                        onConfirm={(isConfirmed) => {
                            if (isConfirmed && deleteDialog.movie) {
                                (handleDelete as (movie: IMovie) => Promise<void>)(
                                    deleteDialog.movie
                                );
                            }
                            setDeleteDialog({ open: false, movie: null });
                        }}
                    >
                    </DeleteDialog>
                    <FormEdit
                        onSave={(movie: MovieInput) => {
                            setFormDialog(false);
                            (handleSubmit as (movie: MovieInput) => Promise<void>)(movie);
                        }}
                        open={formDialog}
                        onClose={() => setFormDialog(false)}
                    />
                    <Fab
                        color="primary"
                        sx={{ position: "fixed", bottom: "10%", right: "50%", Transform: "translateX(-50%)", }}
                        onClick={() => setFormDialog(true)}>
                        <Add />
                    </Fab>
                </Container >

            )
        }
    }
}

