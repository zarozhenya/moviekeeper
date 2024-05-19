import React, {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {styles} from './styles';
import {MovieListItem} from './movie-list-item';
import {EmptyList} from './empty-list';
import {IMovie} from '../../types';

interface Props {
  data?: IMovie[];
  loading?: boolean;
  onEndReached?: () => void;
}

export const MoviesList: FC<Props> = ({
  data,
  loading = false,
  onEndReached,
}) => {
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      data={data}
      renderItem={({item}) => <MovieListItem item={item} />}
      keyExtractor={({id}) => String(id)}
      ListEmptyComponent={<EmptyList />}
      onEndReachedThreshold={1}
      onEndReached={onEndReached}
    />
  );
};
