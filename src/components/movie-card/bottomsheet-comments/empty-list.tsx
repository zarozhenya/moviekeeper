import React, {FC} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export const EmptyList: FC = () => {
  return <Text style={styles.emptyText}>No comments yet.</Text>;
};
