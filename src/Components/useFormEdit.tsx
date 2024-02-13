import { MovieInput } from "../TS/interfaces/global_interfaces";
import { useState } from "react";





export default function useFormEdit() {

    const [movie, setMovie] = useState<MovieInput>({
        title: "",
        director: "",
        runtime: 0
    })
    

    return {movie, setMovie}
}