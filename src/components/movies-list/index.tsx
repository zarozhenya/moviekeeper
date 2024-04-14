import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {useMovies} from '../../api/hooks';
import {styles} from './styles';
import {MovieListItem} from './movie-list-item';
import {EmptyList} from './empty-list';

interface Props {
  query: string;
}

export const MoviesList: FC<Props> = ({query}) => {
  const {data} = useMovies({search: query});

  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      data={data?.results}
      renderItem={({item}) => <MovieListItem item={item} />}
      keyExtractor={({id}) => String(id)}
      ListEmptyComponent={<EmptyList />}
    />
  );
};
