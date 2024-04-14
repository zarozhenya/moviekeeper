import {useQuery} from '@tanstack/react-query';
import Config from 'react-native-config';
import {IGetMoviesResponse} from '../../types';

interface UseMoviesProps {
  search: string;
}

const getMovies = async (query: string, page: number) => {
  const params = new URLSearchParams({
    api_key: Config.API_KEY || '',
    page: String(page),
  });

  const url = query
    ? `${Config.API_URL}/search/movie?${params}&query=${query}`
    : `${Config.API_URL}/trending/movie/day?${params}`;

  const response = await fetch(url);

  return response.json();
};

export const useMovies = ({search}: UseMoviesProps) => {
  return useQuery<IGetMoviesResponse>({
    queryKey: ['movies', search],
    queryFn: () => getMovies(search, 1),
  });
};
