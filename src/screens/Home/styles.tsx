import {StyleSheet} from 'react-native';
import {scale} from '@utils';

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    padding: scale(16),
  },
  contentContainer: {
    flexGrow: 1,
    padding: scale(16),
    gap: 16,
  },
});

export default styles;
