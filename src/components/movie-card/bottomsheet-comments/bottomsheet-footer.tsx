import React, {FC, useState} from 'react';
import {
  BottomSheetFooter as RNBottomSheetFooter,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import {Input} from '../../input';

export const BottomSheetFooter: FC<BottomSheetFooterProps> = props => {
  const [value, setValue] = useState('');
  return (
    <RNBottomSheetFooter {...props}>
      <Input
        isBottomSheet
        value={value}
        onValueChange={setValue}
        placeholder="Enter the comment"
      />
    </RNBottomSheetFooter>
  );
};
