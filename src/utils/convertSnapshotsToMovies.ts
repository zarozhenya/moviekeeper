import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IMovie} from '../types';

export const convertSnapshotsToMovies = (
  movies: FirebaseFirestoreTypes.DocumentSnapshot<IMovie>[],
): IMovie[] =>
  movies
    .map(movie => movie.data())
    .filter((item): item is IMovie => item !== undefined);
