import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface IMovie {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IFbUser {
  id: string;
  email: string;
  my_movies: FirebaseFirestoreTypes.DocumentReference<IMovie>[];
}

export interface IUser {
  id: string;
  email: string;
  my_movies: IMovie[];
}
