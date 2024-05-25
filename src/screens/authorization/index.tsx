import React, {FC, useContext, useState} from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../../contexts';
import {Button, Title} from '../../components';
import {styles} from './styles';

export const AuthorizationScreen: FC = () => {
  const {t} = useTranslation();
  const {signIn, signUp} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title textKey="authorization.title" />
        <Text style={styles.text}>{t('authorization.email')}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.text}>{t('authorization.password')}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            textKey="authorization.sign-up"
            variant="accent"
            onPress={() => {
              signUp({email, password});
              Keyboard.dismiss();
            }}
          />
          <Button
            textKey="authorization.sign-in"
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
