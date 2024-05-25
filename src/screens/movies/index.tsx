import React, {FC, useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {MoviesContext} from '../../contexts';
import {MoviesList, Title} from '../../components';
import {styles} from './styles';

export const MoviesScreen: FC = () => {
  const {movies} = useContext(MoviesContext);
  const myMovies = movies ?? [];

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title textKey="my-movies.title" />
        <MoviesList data={myMovies} />
      </View>
    </SafeAreaView>
  );
};
