import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, MoviesScreen, ProfileScreen} from '../screens';
import {renderTabIcon} from '../utils';
import {MainStackParamList, TabEnum} from '../types';

const Tab = createBottomTabNavigator<MainStackParamList>();

export const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6B08',
        tabBarInactiveTintColor: '#545454',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Home),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Movies),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Profile),
        }}
      />
    </Tab.Navigator>
  );
};
