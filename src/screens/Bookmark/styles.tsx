import {StyleSheet} from 'react-native';
import {deviceHeight, scale} from '@utils';
import {Colors, Fonts} from '@constants';

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
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight() / 2,
  },
  emptyText: {
    fontFamily: Fonts.OUTFIT_SEMIBOLD,
    fontSize: scale(16),
    color: Colors.SPC_GRAY,
  },
});

export default styles;
