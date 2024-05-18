import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface Props extends TouchableOpacityProps {
  variant: 'accent' | 'basic';
  text: string;
}

export const Button: FC<Props> = ({variant, text, ...props}) => {
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
        {text}
      </Text>
    </TouchableOpacity>
  );
};
