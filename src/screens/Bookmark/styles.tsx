import {StyleSheet} from 'react-native';
import {scale} from '@utils';

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
    paddingVertical: scale(4),
  },
  filterContainer: {
    paddingHorizontal: scale(8),
    paddingBottom: scale(8),
    gap: 8,
  },
  contentContainer: {
    flexGrow: 1,
    padding: scale(16),
    gap: 16,
  },
});

export default styles;
