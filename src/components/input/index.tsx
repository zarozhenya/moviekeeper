import React, {FC, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

interface Props {
  isBottomSheet?: boolean;
  placeholderKey?: string;
  value: string;
  endContent?: React.FC<SvgProps>;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmit?: () => void;
  onEndContentPress?: () => void;
}

export const Input: FC<Props> = ({
  isBottomSheet,
  value,
  placeholderKey = 'input.placeholder',
  endContent: EndContent = null,
  onValueChange,
  onSubmit,
  onEndContentPress,
}) => {
  const {t} = useTranslation();
  const [isFocused, setIsFocused] = useState(false);
  const InputComponent = isBottomSheet ? BottomSheetTextInput : TextInput;
  return (
    <View style={[styles.inputContainer, isFocused && styles.inputAccent]}>
      <InputComponent
        autoCorrect={false}
        value={value}
        style={styles.input}
        onChangeText={onValueChange}
        placeholder={t(placeholderKey)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={onSubmit}
      />
      {EndContent ? (
        <TouchableOpacity
          onPress={onEndContentPress}
          style={styles.endContentContainer}>
          <EndContent
            width={20}
            height={20}
            fill={isFocused ? '#ff6b08' : '#000000'}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
