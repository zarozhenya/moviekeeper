import firestore from '@react-native-firebase/firestore';
import {useMemo} from 'react';

interface UseAddMovieProps {
  movieId: string;
  userId: string | null;
}

export const useRemoveMovie = ({userId, movieId}: UseAddMovieProps) => {
  return useMemo(
    () => ({
      removeMovie: () => {
        firestore()
          .doc(`users/${userId}`)
          .update({
            my_movies: firestore.FieldValue.arrayRemove(
              firestore().doc(`movies/${movieId}`),
            ),
          });
      },
    }),
    [userId, movieId],
  );
};
