import firestore from '@react-native-firebase/firestore';
import {useContext, useMemo} from 'react';
import {UserContext} from '../../contexts';

interface UseAddMovieProps {
  movieId: string;
}

export const useRemoveMovie = ({movieId}: UseAddMovieProps) => {
  const {user} = useContext(UserContext);
  return useMemo(
    () => ({
      removeMovie: () => {
        if (!user) {
          return;
        }
        firestore()
          .doc(`users/${user.id}`)
          .update({
            my_movies: firestore.FieldValue.arrayRemove(
              firestore().doc(`movies/${movieId}`),
            ),
          });
      },
    }),
    [user, movieId],
  );
};
