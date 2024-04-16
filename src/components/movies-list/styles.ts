import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {gap: 16},
  emptyText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
    textTransform: 'uppercase',
  },
  subText: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 14,
    lineHeight: 18,
    color: '#ff6b08',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
});
