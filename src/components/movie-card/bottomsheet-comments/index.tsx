import React, {forwardRef, useMemo} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Text, View} from 'react-native';
import {IComment} from '../../../types';
import {EmptyList} from './empty-list';
import {BottomSheetBackdrop} from './bottomsheet-backdrop';
import {BottomSheetFooter} from './bottomsheet-footer';

interface Props {
  comments: IComment[];
}

export const BottomSheetComments = forwardRef<BottomSheet, Props>(
  ({comments}, ref) => {
    const snapPoints = useMemo(() => ['75%', '100%'], []);
    return (
      <BottomSheet
        ref={ref}
        enablePanDownToClose
        backdropComponent={BottomSheetBackdrop}
        footerComponent={BottomSheetFooter}
        index={-1}
        snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={comments}
          ListEmptyComponent={EmptyList}
          renderItem={({item}) => (
            <View>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </BottomSheet>
    );
  },
);
