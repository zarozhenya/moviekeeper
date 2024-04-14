import React, {FC, useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

interface Props {
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({value, onValueChange}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      autoCorrect={false}
      value={value}
      onChangeText={onValueChange}
      placeholder="Enter the query"
      style={[styles.input, isFocused && styles.inputAccent]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
