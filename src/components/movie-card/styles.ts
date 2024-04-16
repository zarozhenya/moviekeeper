import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#000000',
  },
  statsWrapper: {
    gap: 8,
    marginBottom: 20,
  },
  statsRow: {flexDirection: 'row', gap: 8},
  statsRowCenter: {alignItems: 'center'},
  statsTextKey: {
    width: 100,
    fontSize: 14,
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
    fontSize: 14,
    color: '#ffffff',
  },
  statsVotesCountText: {
    fontSize: 14,
    color: '#000000',
  },
  statsVotesCountContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statsTextValue: {
    fontSize: 14,
    color: '#000000',
    flex: 1,
  },
  uppercaseText: {
    textTransform: 'uppercase',
  },
});
