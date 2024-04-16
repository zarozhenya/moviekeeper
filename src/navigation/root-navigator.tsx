import React, {FC, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, SignInScreen} from '../screens';
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
          <Stack.Screen name="Details" component={DetailsScreen} />
        </>
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};
