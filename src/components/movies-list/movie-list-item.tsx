import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GENRES} from '../../constants';
import {IMovie, RootNavigatorParamList} from '../../types';
import {getNavigationMovie} from '../../utils';
import {styles} from './styles';

interface Props {
  item: IMovie;
}

export const MovieListItem: FC<Props> = React.memo(({item}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Details', {movie: getNavigationMovie(item)})
      }>
      <Image
        source={{uri: `${Config.IMAGE_URL}${item.poster_path}`}}
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>
        {item.genre_ids.map(key => GENRES[key]).join(', ')}
        {' | '}
        {item.release_date ? new Date(item.release_date).getFullYear() : 'N/A'}
      </Text>
    </TouchableOpacity>
  );
});
