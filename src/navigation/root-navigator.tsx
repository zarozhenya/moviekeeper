import React, {FC, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, AuthorizationScreen} from '../screens';
import {RootNavigatorParamList} from '../types';
import {AuthContext} from '../contexts';
import {TabNavigator} from './tab-navigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator: FC = () => {
  const {userId} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {userId ? (
        <>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{headerBackTitle: 'Back'}}
            name="Details"
            component={DetailsScreen}
          />
        </>
      ) : (
        <Stack.Screen
          name="Authorization"
          component={AuthorizationScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
