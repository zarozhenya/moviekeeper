import React, {FC, useContext, useRef} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Config from 'react-native-config';
import {IMovie} from '../../types';
import {MoviesContext} from '../../contexts';
import {Button} from '../button';
import {styles} from './styles';
import {Stats} from './stats';
import {useAddMovie, useRemoveMovie} from '../../api/hooks';
import {BottomSheetComments} from './bottomsheet-comments';

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = ({movie}) => {
  const bottomsheetRef = useRef<BottomSheet | null>(null);
  const {movies} = useContext(MoviesContext);
  const {addMovie} = useAddMovie({movieId: String(movie.id)});
  const {removeMovie} = useRemoveMovie({movieId: String(movie.id)});

  const isMyMovie = (movies ?? []).some(({id}) => id === movie.id);

  const handleOpenBottomsheet = () => {
    bottomsheetRef.current?.snapToIndex(0);
  };

  return (
    <>
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
        <TouchableOpacity
          onPress={handleOpenBottomsheet}
          style={styles.commentTextContainer}>
          <Text style={styles.commentText}>
            View comments ({movie.comments.length})
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            variant={isMyMovie ? 'basic' : 'accent'}
            text={isMyMovie ? 'Remove from "My movies"' : 'Add to "My movies"'}
            onPress={isMyMovie ? removeMovie : addMovie}
          />
        </View>
      </ScrollView>
      <BottomSheetComments ref={bottomsheetRef} comments={movie.comments} />
    </>
  );
};
