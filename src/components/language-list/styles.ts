import {StyleSheet} from 'react-native';

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
    gap: 8,
  },
  selectedListItem: {
    borderColor: '#ff6b08',
  },
  flag: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
  },
  locale: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});
