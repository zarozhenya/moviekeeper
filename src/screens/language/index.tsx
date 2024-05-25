import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigatorParamList} from '../../types';
import {styles} from './styles';

type Props = NativeStackScreenProps<RootNavigatorParamList, 'Language'>;

export const LanguageScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};
