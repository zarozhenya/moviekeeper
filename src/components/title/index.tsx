import React, {FC} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

interface Props {
  textKey: string;
  textKeyOptions?: Record<string, unknown>;
}

export const Title: FC<Props> = ({textKey, textKeyOptions}) => {
  const {t} = useTranslation();
  return <Text style={styles.text}>{t(textKey, textKeyOptions)}</Text>;
};
