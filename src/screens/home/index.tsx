import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {RootNavigatorParamList} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const HomeScreen: FC = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate('Details', {movieId: '1'})}>
        <Text>Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
