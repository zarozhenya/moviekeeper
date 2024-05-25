import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    width: 336,
    alignSelf: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  listItem: {
    width: 160,
    padding: 16,
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
    gap: 8,
  },
  selectedListItem: {
    borderColor: '#ff6b08',
  },
  flag: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 30,
    lineHeight: 36,
    color: '#000000',
    textAlign: 'center',
  },
  locale: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 16,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'center',
  },
});
