import React, {FC} from 'react';
import {View} from 'react-native';
import {ILanguage} from '../../types';
import {useTranslation} from 'react-i18next';
import {LanguageItem} from './language-item';
import {styles} from './styles';

interface Props {
  languages: ILanguage[];
}

export const LanguageList: FC<Props> = ({languages}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.listContainer}>
      {languages.map(item => (
        <LanguageItem
          key={item.key}
          item={item}
          selected={item.key === t('language')}
        />
      ))}
    </View>
  );
};
