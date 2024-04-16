import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
  title: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Medium',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Medium',
      },
    }),
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  subTitle: {
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
    marginBottom: 8,
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
  },
  statsWrapper: {
    gap: 8,
    marginBottom: 20,
  },
  statsRow: {flexDirection: 'row', gap: 8},
  statsRowCenter: {alignItems: 'center'},
  statsTextKey: {
    ...Platform.select({
      ios: {
        fontFamily: 'SFProDisplay-Regular',
      },
      android: {
        fontFamily: 'SF-Pro-Display-Regular',
      },
    }),
    width: 100,
    fontSize: 14,
    lineHeight: 20,
    color: '#8c8c8c',
  },
  statsTextKeyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 4,
  },
  statsVotesRatingContainer: {
    backgroundColor: '#ff6b08',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
  statsVotesRatingText: {
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
    color: '#ffffff',
  },
  statsVotesCountText: {
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
  statsVotesCountContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statsTextValue: {
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
    flex: 1,
  },
  uppercaseText: {
    textTransform: 'uppercase',
  },
});
