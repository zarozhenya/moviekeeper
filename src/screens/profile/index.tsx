import React, {FC, useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {AuthContext, UserContext} from '../../contexts';
import {Button, Title} from '../../components';
import {styles} from './styles';

export const ProfileScreen: FC = () => {
  const {user} = useContext(UserContext);
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text={`Hello,\n${user?.username}!`} />
        <Button variant="accent" text="Sign out" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};
