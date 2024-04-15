import React, {FC, useMemo} from 'react';
import {FlatList} from 'react-native';
import {useMovies} from '../../api/hooks';
import {styles} from './styles';
import {MovieListItem} from './movie-list-item';
import {EmptyList} from './empty-list';

interface Props {
  query: string;
}

export const MoviesList: FC<Props> = ({query}) => {
  const {data, fetchNextPage} = useMovies({search: query});

  const movies = useMemo(
    () => data?.pages.flatMap(({results}) => results),
    [data?.pages],
  );

  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      data={movies}
      renderItem={({item}) => <MovieListItem item={item} />}
      keyExtractor={({id}) => String(id)}
      ListEmptyComponent={<EmptyList />}
      onEndReachedThreshold={1}
      onEndReached={() => fetchNextPage()}
    />
  );
};
