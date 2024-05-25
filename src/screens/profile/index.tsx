import React, {FC, useContext} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {AuthContext, UserContext} from '../../contexts';
import {Button, Title} from '../../components';
import {styles} from './styles';
import {RootNavigatorParamList} from '../../types';
import GlobeIcon from '../../assets/svg/globe.svg';

export const ProfileScreen: FC = () => {
  const {t} = useTranslation();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
  const {user} = useContext(UserContext);
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Title
              textKey={'profile.title'}
              textKeyOptions={{username: user?.username}}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigate('Language')}
            style={styles.languageButton}>
            <GlobeIcon height={20} width={20} />
            <Text style={styles.languageButtonText}>
              {t('profile.language')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="accent"
            textKey="profile.sign-out"
            onPress={signOut}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
