import React, {FC} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import Config from 'react-native-config';
import {IMovie} from '../../types';
import {styles} from './styles';
import {Stats} from './stats';

interface Props {
  movie: IMovie;
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
    </ScrollView>
  );
};
