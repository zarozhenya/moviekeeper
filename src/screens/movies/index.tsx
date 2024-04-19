import React, {FC, useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useMyMovies} from '../../api/hooks';
import {AuthContext} from '../../contexts';
import {MoviesList, Title} from '../../components';
import {styles} from './styles';

export const MoviesScreen: FC = () => {
  const {userId} = useContext(AuthContext);
  const {watched} = useMyMovies({userId});
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="My movies" />
        <MoviesList data={watched} />
      </View>
    </SafeAreaView>
  );
};
