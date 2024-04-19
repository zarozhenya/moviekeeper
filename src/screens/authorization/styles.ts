import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    fontSize: 14,
    color: '#000000',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  text: {
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
    marginBottom: 8,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginTop: 16,
  },
});
