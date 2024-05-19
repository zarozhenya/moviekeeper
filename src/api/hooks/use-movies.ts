import {useQuery} from '@tanstack/react-query';
import firestore from '@react-native-firebase/firestore';
import {IMovie} from '../../types';

interface UseMoviesProps {
  search: string;
}

const getSearchMovies = (query: string) => {
  return firestore()
    .collection('movies')
    .where('title', '>=', query)
    .where('title', '<=', query + '\uf8ff')
    .limit(100)
    .get();
};

const getNonSearchMovies = () => {
  return firestore()
    .collection('movies')
    .orderBy('popularity', 'desc')
    .limit(100)
    .get();
};

const getMovies = async (query: string) => {
  const movies = query
    ? await getSearchMovies(query)
    : await getNonSearchMovies();

  return movies.docs.map(item => item.data() as IMovie);
};

export const useMovies = ({search}: UseMoviesProps) => {
  return useQuery<IMovie[]>({
    queryKey: ['movies', search],
    queryFn: () => getMovies(search),
  });
};
