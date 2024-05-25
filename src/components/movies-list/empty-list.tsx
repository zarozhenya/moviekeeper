import React, {FC} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

export const EmptyList: FC = () => {
  const {t} = useTranslation();
  return <Text style={styles.emptyText}>{t('movies.empty-list')}</Text>;
};
