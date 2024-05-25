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
        <Title
          textKey={'profile.title'}
          textKeyOptions={{username: user?.username}}
        />
        <Button variant="accent" textKey="profile.sign-out" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};
