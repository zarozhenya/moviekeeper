import React, {FC} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Config from 'react-native-config';
import {INavigationMovie} from '../../types';
import {styles} from './styles';
import {Stats} from './stats';
import {Button} from '../button';

interface Props {
  movie: INavigationMovie;
}

export const MovieCard: FC<Props> = ({movie}) => {
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
        <Button text='Add to "My movies"' variant="accent" />
      </View>
    </ScrollView>
  );
};
