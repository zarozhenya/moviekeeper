import React, {FC, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {DetailsScreen, AuthorizationScreen, LanguageScreen} from '../screens';
import {RootNavigatorParamList} from '../types';
import {AuthContext} from '../contexts';
import {TabNavigator} from './tab-navigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator: FC = () => {
  const {t} = useTranslation();
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
            options={{
              headerBackTitle: t('navigator.back'),
              title: t('navigator.details'),
            }}
            name="Details"
            component={DetailsScreen}
          />
          <Stack.Screen
            options={{
              headerBackTitle: t('navigator.back'),
              title: t('navigator.language'),
            }}
            name="Language"
            component={LanguageScreen}
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
