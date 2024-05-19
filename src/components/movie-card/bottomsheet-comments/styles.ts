import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  emptyText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  commentHeader: {
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
    marginBottom: 8,
    textAlign: 'center',
  },
  commentHeaderContainer: {
    borderBottomWidth: 0.5,
    borderColor: '#707070',
    marginBottom: 8,
  },
  footerContainer: {
    paddingHorizontal: 12,
  },
  commentItemUsername: {
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
  },
  commentItemContainer: {
    padding: 12,
  },
  commentItemUsernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  commentItemUsernameSeparator: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#000000',
  },
  commentItemText: {
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
    color: '#000000',
  },
  itemSeparator: {height: 0.5, backgroundColor: '#808080'},
});
