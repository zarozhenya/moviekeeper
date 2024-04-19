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
  const [watched, setWatched] = useState<IMovie[]>([]);
  const [queue, setQueue] = useState<IMovie[]>([]);

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

        Promise.all(convertReferencesToSnapshots(userData.watched))
          .then(movies => setWatched(convertSnapshotsToMovies(movies)))
          .catch(showErrorMessage);

        Promise.all(convertReferencesToSnapshots(userData.queue))
          .then(movies => setQueue(convertSnapshotsToMovies(movies)))
          .catch(showErrorMessage);
      });
    return subscriber;
  }, [userId]);

  return {watched, queue};
};
