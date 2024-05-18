import React, {FC, useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Config from 'react-native-config';
import {INavigationMovie} from '../../types';
import {AuthContext, MoviesContext} from '../../contexts';
import {Button} from '../button';
import {styles} from './styles';
import {Stats} from './stats';
import {useAddMovie, useRemoveMovie} from '../../api/hooks';

interface Props {
  movie: INavigationMovie;
}

export const MovieCard: FC<Props> = ({movie}) => {
  const {movies} = useContext(MoviesContext);
  const {userId} = useContext(AuthContext);
  const {addMovie} = useAddMovie({userId, movieId: String(movie.id)});
  const {removeMovie} = useRemoveMovie({userId, movieId: String(movie.id)});

  const isMyMovie = (movies ?? []).some(({id}) => id === movie.id);

  return (
    <ScrollView>
      <Image
        source={{uri: `${Config.IMAGE_URL}${movie.poster_path}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Stats
        votes={movie.vote_count}
        rating={movie.vote_average}
        popularity={movie.popularity}
        title={movie.original_title}
        genres={movie.genre_ids}
      />
      <Text style={styles.subTitle}>About</Text>
      <Text style={styles.text}>{movie.overview}</Text>
      <View style={styles.buttonContainer}>
        <Button
          variant={isMyMovie ? 'basic' : 'accent'}
          text={isMyMovie ? 'Remove from "My movies"' : 'Add to "My movies"'}
          onPress={isMyMovie ? removeMovie : addMovie}
        />
      </View>
    </ScrollView>
  );
};
