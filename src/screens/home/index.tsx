import React, {FC, useMemo, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {SafeAreaView, View} from 'react-native';
import {useMovies} from '../../api/hooks';
import {Input, Title, MoviesList} from '../../components';
import {styles} from './styles';

export const HomeScreen: FC = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 400);

  const {data, fetchNextPage} = useMovies({search: debouncedQuery});

  const movies = useMemo(
    () => data?.pages.flatMap(({results}) => results),
    [data?.pages],
  );

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Home" />
        <Input value={query} onValueChange={setQuery} />
        <MoviesList data={movies} onEndReached={fetchNextPage} />
      </View>
    </SafeAreaView>
  );
};
