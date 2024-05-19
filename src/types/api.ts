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
  comments: IComment[];
}

export interface IFbUser {
  id: string;
  email: string;
  my_movies: FirebaseFirestoreTypes.DocumentReference<IMovie>[];
}

export interface IComment {
  id: string;
  text: string;
  date: string;
  user_name: string;
}
