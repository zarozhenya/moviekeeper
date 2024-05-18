import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {IFbUser, IMovie} from '../../types';
import {showErrorMessage} from '../../utils';

interface UseMyMoviesProps {
  user: IFbUser | null;
}

export const useMyMovies = ({user}: UseMyMoviesProps) => {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  useEffect(() => {
    if (!user || !user.my_movies.length) {
      setMovies(null);
      return;
    }

    const subscriber = firestore()
      .collection('movies')
      .where(
        'id',
        'in',
        user.my_movies.map(a => Number(a.id)),
      )
      .onSnapshot(async querySnapshot => {
        try {
          setMovies(querySnapshot.docs.map(item => item.data() as IMovie));
        } catch (e) {
          showErrorMessage(e);
        }
      });

    return subscriber;
  }, [user]);

  return {movies};
};
