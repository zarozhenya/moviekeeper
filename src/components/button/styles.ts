import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonAccent: {
    backgroundColor: '#ff6b08',
  },
  buttonBasic: {
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  buttonText: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Regular',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Regular',
      },
    }),
    fontSize: 14,
    lineHeight: 18,
  },
  buttonTextAccent: {
    color: '#ffffff',
  },
  buttonTextBasic: {
    color: '#000000',
  },
});
