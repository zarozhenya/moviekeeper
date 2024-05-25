import React, {forwardRef, useMemo} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IComment} from '../../../types';
import {EmptyList} from './empty-list';
import {BottomSheetBackdrop} from './bottomsheet-backdrop';
import {BottomSheetFooter} from './bottomsheet-footer';
import {styles} from './styles';
import {CommentItem} from './comment-item';
import {ItemSeparator} from './item-separator';

interface Props {
  comments: IComment[];
}

export const BottomSheetComments = forwardRef<BottomSheet, Props>(
  ({comments}, ref) => {
    const {t} = useTranslation();
    const snapPoints = useMemo(() => ['75%', '100%'], []);
    return (
      <BottomSheet
        ref={ref}
        enablePanDownToClose
        android_keyboardInputMode="adjustResize"
        backdropComponent={BottomSheetBackdrop}
        footerComponent={BottomSheetFooter}
        index={-1}
        snapPoints={snapPoints}>
        <View style={styles.commentHeaderContainer}>
          <Text style={styles.commentHeader}>{t('comments.title')}</Text>
        </View>
        <BottomSheetFlatList
          data={comments}
          ListEmptyComponent={EmptyList}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CommentItem comment={item} />}
        />
      </BottomSheet>
    );
  },
);
