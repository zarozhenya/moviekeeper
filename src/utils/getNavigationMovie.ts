import {IMovie, INavigationMovie} from '../types';

export const getNavigationMovie = ({
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
