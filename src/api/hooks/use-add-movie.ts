import firestore from '@react-native-firebase/firestore';
import {useMemo} from 'react';

interface UseAddMovieProps {
  movieId: string;
  userId: string | null;
}

export const useAddMovie = ({userId, movieId}: UseAddMovieProps) => {
  return useMemo(
    () => ({
      addMovie: () => {
        firestore()
          .doc(`users/${userId}`)
          .update({
            my_movies: firestore.FieldValue.arrayUnion(
              firestore().doc(`movies/${movieId}`),
            ),
          });
      },
    }),
    [userId, movieId],
  );
};
