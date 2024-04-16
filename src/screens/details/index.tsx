import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MovieCard} from '../../components';
import {RootNavigatorParamList} from '../../types';
import {styles} from './styles';

type Props = NativeStackScreenProps<RootNavigatorParamList, 'Details'>;

export const DetailsScreen: FC<Props> = ({route}) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <MovieCard movie={route.params.movie} />
      </View>
    </SafeAreaView>
  );
};
