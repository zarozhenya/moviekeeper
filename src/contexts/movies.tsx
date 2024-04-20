import React, {FC, useContext, useMemo} from 'react';
import {IMoviesContext} from '../types';
import {useMyMovies} from '../api/hooks';
import {UserContext} from './user';

interface Props {
  children: React.ReactNode;
}

export const MoviesContext = React.createContext<IMoviesContext>({
  movies: null,
});

export const MoviesProvider: FC<Props> = ({children}) => {
  const {user} = useContext(UserContext);
  const {movies} = useMyMovies({user});

  const moviesContext = useMemo<IMoviesContext>(
    () => ({
      movies,
    }),
    [movies],
  );

  return (
    <MoviesContext.Provider value={moviesContext}>
      {children}
    </MoviesContext.Provider>
  );
};
