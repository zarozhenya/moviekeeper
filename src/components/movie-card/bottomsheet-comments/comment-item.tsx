import React, {FC, useContext} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IComment} from '../../../types';
import {UserContext} from '../../../contexts';
import {styles} from './styles';

interface Props {
  comment: IComment;
}

export const CommentItem: FC<Props> = ({comment: {text, username, date}}) => {
  const {t} = useTranslation();
  const {user} = useContext(UserContext);
  return (
    <View style={styles.commentItemContainer}>
      <View style={styles.commentItemUsernameContainer}>
        <Text style={styles.commentItemUsername}>
          {username === user?.username ? t('comments.me') : username}
        </Text>
        <View style={styles.commentItemUsernameSeparator} />
        <Text style={styles.commentItemText}>
          {new Date(date).toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.commentItemText}>{text}</Text>
    </View>
  );
};
