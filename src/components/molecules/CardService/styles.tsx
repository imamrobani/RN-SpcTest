import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import {Colors, Fonts} from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: scale(16),
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
  },
  image: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(8),
  },
  rowContent: {
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    gap: 8,
  },
  name: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(14),
    color: Colors.SPC_GRAY,
  },
  service: {
    fontFamily: Fonts.OUTFIT_MEDIUM,
    fontSize: scale(16),
    color: Colors.BLACK,
  },
  rowRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(10),
    color: Colors.SPC_GRAY,
  },
  separatorRating: {
    width: 1.5,
    height: scale(12),
    backgroundColor: Colors.BLACK,
  },
});

export default styles;
