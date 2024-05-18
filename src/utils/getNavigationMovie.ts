import {IMovie, INavigationMovie} from '../types';

export const getNavigationMovie = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre_ids,
  overview,
}: IMovie): INavigationMovie => {
  return {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  };
};
