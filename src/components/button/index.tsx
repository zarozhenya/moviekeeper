import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

interface Props extends TouchableOpacityProps {
  variant: 'accent' | 'basic';
  textKey: string;
}

export const Button: FC<Props> = ({variant, textKey, ...props}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'accent' ? styles.buttonAccent : styles.buttonBasic,
      ]}
      {...props}>
      <Text
        style={[
          styles.buttonText,
          variant === 'accent'
            ? styles.buttonTextAccent
            : styles.buttonTextBasic,
        ]}>
        {t(textKey)}
      </Text>
    </TouchableOpacity>
  );
};
