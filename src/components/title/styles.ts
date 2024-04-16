import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    marginBottom: 12,
  },
});
