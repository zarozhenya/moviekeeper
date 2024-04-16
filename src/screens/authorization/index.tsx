import React, {FC, useContext, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../../contexts';
import {Title} from '../../components';
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
          <TouchableOpacity
            style={[styles.button, styles.buttonSignUp]}
            onPress={() => {
              signUp({email, password});
              Keyboard.dismiss();
            }}>
            <Text style={[styles.buttonText, styles.buttonTextSignUp]}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignIn]}
            onPress={() => {
              signIn({email, password});
              Keyboard.dismiss();
            }}>
            <Text style={[styles.buttonText, styles.buttonTextSignIn]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
