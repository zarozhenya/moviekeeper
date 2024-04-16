import React, {FC, useContext} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts';

export const ProfileScreen: FC = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
