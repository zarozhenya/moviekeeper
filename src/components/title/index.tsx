import React, {FC} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface Props {
  text: string;
}

export const Title: FC<Props> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
