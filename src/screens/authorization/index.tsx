import React, {FC, useContext, useState} from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../../contexts';
import {Button, Title} from '../../components';
import {styles} from './styles';

export const AuthorizationScreen: FC = () => {
  const {signIn, signUp} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Authorization" />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            text="Sign Up"
            variant="accent"
            onPress={() => {
              signUp({email, password});
              Keyboard.dismiss();
            }}
          />
          <Button
            text="Sign In"
            variant="basic"
            onPress={() => {
              signIn({email, password});
              Keyboard.dismiss();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
