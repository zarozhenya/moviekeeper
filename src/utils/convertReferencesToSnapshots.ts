import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IMovie} from '../types';

export const convertReferencesToSnapshots = (movies: any) =>
  ((movies ?? []) as FirebaseFirestoreTypes.DocumentReference<IMovie>[]).map(
    watchedRef => watchedRef.get(),
  );
