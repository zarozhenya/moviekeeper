import React, {FC, useState} from 'react';
import {TextInput} from 'react-native';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {styles} from './styles';

interface Props {
  isBottomSheet?: boolean;
  placeholder?: string;
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  isBottomSheet,
  value,
  onValueChange,
  placeholder = 'Enter the query',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const InputComponent = isBottomSheet ? BottomSheetTextInput : TextInput;
  return (
    <InputComponent
      autoCorrect={false}
      value={value}
      onChangeText={onValueChange}
      placeholder={placeholder}
      style={[styles.input, isFocused && styles.inputAccent]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
