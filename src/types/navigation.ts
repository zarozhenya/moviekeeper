import {IMovie} from './api';

export enum TabEnum {
  Home,
  Movies,
  Profile,
}

export type INavigationMovie = Pick<
  IMovie,
  | 'id'
  | 'poster_path'
  | 'title'
  | 'vote_average'
  | 'vote_count'
  | 'popularity'
  | 'original_title'
  | 'genre_ids'
  | 'overview'
>;

export type RootNavigatorParamList = {
  Authorization: undefined;
  Tabs: undefined;
  Details: {movie: INavigationMovie};
};

export type MainStackParamList = {
  Home: undefined;
  Movies: undefined;
  Profile: undefined;
};
