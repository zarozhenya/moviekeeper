import firestore from '@react-native-firebase/firestore';
import {useContext, useMemo} from 'react';
import {UserContext} from '../../contexts';

interface UseAddMovieProps {
  movieId: string;
}

export const useAddMovie = ({movieId}: UseAddMovieProps) => {
  const {user} = useContext(UserContext);
  return useMemo(
    () => ({
      addMovie: () => {
        if (!user) {
          return;
        }
        firestore()
          .doc(`users/${user.id}`)
          .update({
            my_movies: firestore.FieldValue.arrayUnion(
              firestore().doc(`movies/${movieId}`),
            ),
          });
      },
    }),
    [user, movieId],
  );
};
