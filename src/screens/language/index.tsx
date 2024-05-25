import React, {FC, useMemo} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ILanguage, RootNavigatorParamList} from '../../types';
import {styles} from './styles';
import {LanguageList} from '../../components';

type Props = NativeStackScreenProps<RootNavigatorParamList, 'Language'>;

export const LanguageScreen: FC<Props> = () => {
  const locales = useMemo<ILanguage[]>(
    () => [
      {key: 'en', localeName: 'English', flag: '🇬🇧'},
      {key: 'ua', localeName: 'Українська', flag: '🇺🇦'},
      {key: 'sp', localeName: 'Español', flag: '🇪🇸'},
    ],
    [],
  );
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <LanguageList languages={locales} />
      </View>
    </SafeAreaView>
  );
};
