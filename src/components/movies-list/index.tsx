import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {MovieListItem} from './movie-list-item';
import {EmptyList} from './empty-list';
import {IMovie} from '../../types';

interface Props {
  data?: IMovie[];
  onEndReached?: () => void;
}

export const MoviesList: FC<Props> = ({data, onEndReached}) => {
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
