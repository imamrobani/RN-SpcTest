import {StyleSheet} from 'react-native';
import {scale} from '../../../utils';
import {Colors, Fonts} from '../../../constants';

const styles = StyleSheet.create({
  // header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(16),
  },
  rowUser: {
    flex: 2,
    flexDirection: 'row',
    gap: scale(8),
  },
  userImage: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(42 / 2),
  },
  titleHeader: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(14),
    color: Colors.SPC_GRAY,
  },
  name: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(16),
    lineHeight: scale(20),
    marginRight: scale(16),
  },
  rowIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: scale(16),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(16),
  },
  title: {
    fontFamily: Fonts.OUTFIT_MEDIUM,
    fontSize: scale(18),
    color: Colors.BLACK,
  },

  // category section
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: scale(16),
    // marginHorizontal: scale(-8),
  },
});

export default styles;
