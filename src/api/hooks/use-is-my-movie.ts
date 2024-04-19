import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  convertReferencesToSnapshots,
  convertSnapshotsToMovies,
  showErrorMessage,
} from '../../utils';

interface UseIsMyMovieProps {
  userId: string | null;
  movieId: number;
}

export const useIsMyMovie = ({movieId, userId}: UseIsMyMovieProps) => {
  const [isMyMovie, setIsMyMovie] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }

    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        const userData = documentSnapshot.data();
        if (!userData) {
          return;
        }

        Promise.all(convertReferencesToSnapshots(userData.my_movies))
          .then(movies =>
            setIsMyMovie(
              convertSnapshotsToMovies(movies).some(m => m.id === movieId),
            ),
          )
          .catch(showErrorMessage);
      });
    return subscriber;
  }, [userId, movieId]);

  return {isMyMovie};
};
