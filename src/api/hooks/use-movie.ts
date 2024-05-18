import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {IMovie} from '../../types';
import {showErrorMessage} from '../../utils';

export const useMovie = (id: string) => {
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('movies')
      .doc(id)
      .onSnapshot(async querySnapshot => {
        try {
          setMovie(querySnapshot.data() as IMovie);
        } catch (e) {
          showErrorMessage(e);
        }
      });

    return unsubscribe;
  }, [id]);
  return movie;
};
