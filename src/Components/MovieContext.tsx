import { createContext, Dispatch, SetStateAction } from 'react';
import { IMovie } from '../TS/interfaces/global_interfaces';

type MovieContentType = [IMovie[] | null, Dispatch<SetStateAction<IMovie[]>>];

const MovieContext = createContext<MovieContentType>([null, () => {}]);
export default MovieContext	; 