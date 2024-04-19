import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {IMovie} from '../../types';
import {
  showErrorMessage,
  convertSnapshotsToMovies,
  convertReferencesToSnapshots,
} from '../../utils';

interface UseMyMoviesProps {
  userId: string | null;
}

export const useMyMovies = ({userId}: UseMyMoviesProps) => {
  const [myMovies, setMyMovies] = useState<IMovie[]>([]);

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
          .then(movies => setMyMovies(convertSnapshotsToMovies(movies)))
          .catch(showErrorMessage);
      });
    return subscriber;
  }, [userId]);

  return {myMovies};
};
