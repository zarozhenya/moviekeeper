import React, {FC, useState} from 'react';
import {
  BottomSheetFooter as RNBottomSheetFooter,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import {Keyboard, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Input} from '../../input';
import {styles} from './styles';
import {useAddComment} from '../../../api/hooks';
import {RootNavigatorParamList} from '../../../types';
import SendIcon from '../../../assets/svg/send.svg';

export const BottomSheetFooter: FC<BottomSheetFooterProps> = props => {
  const [value, setValue] = useState('');
  const {
    params: {movieId},
  } = useRoute<RouteProp<RootNavigatorParamList, 'Details'>>();

  const {addComment} = useAddComment({movieId});

  const handleSubmit = () => {
    const commentText = value.trim();
    if (commentText) {
      addComment(commentText);
      setValue('');
      Keyboard.dismiss();
    }
  };

  return (
    <RNBottomSheetFooter {...props}>
      <View style={styles.footerContainer}>
        <Input
          isBottomSheet
          value={value}
          onValueChange={setValue}
          placeholderKey="comments.placeholder"
          onSubmit={handleSubmit}
          endContent={SendIcon}
          onEndContentPress={handleSubmit}
        />
      </View>
    </RNBottomSheetFooter>
  );
};
