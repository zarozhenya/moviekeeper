import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {HomeScreen, MoviesScreen, ProfileScreen} from '../screens';
import {renderTabIcon} from '../utils';
import {MainStackParamList, TabEnum} from '../types';

const Tab = createBottomTabNavigator<MainStackParamList>();

export const TabNavigator: FC = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6B08',
        tabBarInactiveTintColor: '#545454',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Home),
          title: t('navigator.home-title'),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Movies),
          title: t('navigator.movies-title'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Profile),
          title: t('navigator.profile-title'),
        }}
      />
    </Tab.Navigator>
  );
};
