import React, {FC, useContext} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts';

export const SignInScreen: FC = () => {
  const {signIn} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => signIn('test')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
