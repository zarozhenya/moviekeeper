import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  input: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Regular',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Regular',
      },
    }),
    fontSize: 14,
    paddingVertical: 0,
    paddingLeft: 12,
    paddingRight: 44,
    height: 42,
    color: '#000000',
  },
  inputAccent: {
    borderColor: '#ff6b08',
  },
  endContentContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
