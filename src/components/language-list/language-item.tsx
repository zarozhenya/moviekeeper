import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ILanguage} from '../../types';
import i18n from '../../i18n';
import {styles} from './styles';

interface Props {
  item: ILanguage;
  selected: boolean;
}

export const LanguageItem: FC<Props> = ({
  item: {flag, localeName, key},
  selected,
}) => {
  const handleChangeLanguage = () => {
    i18n.changeLanguage(key);
  };

  return (
    <TouchableOpacity
      onPress={handleChangeLanguage}
      style={[styles.listItem, selected ? styles.selectedListItem : null]}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.locale}>{localeName}</Text>
    </TouchableOpacity>
  );
};
