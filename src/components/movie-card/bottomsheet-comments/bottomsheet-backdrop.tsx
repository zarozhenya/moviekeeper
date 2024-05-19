import React, {FC} from 'react';
import {
  BottomSheetBackdrop as RNBottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

export const BottomSheetBackdrop: FC<BottomSheetBackdropProps> = props => {
  return (
    <RNBottomSheetBackdrop
      {...props}
      opacity={0.4}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
    />
  );
};
