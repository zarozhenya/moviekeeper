import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';
import {DetailsScreen} from '../screens';
import {RootNavigatorParamList} from '../types';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
