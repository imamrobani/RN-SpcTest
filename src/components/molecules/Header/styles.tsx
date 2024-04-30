import {StyleSheet} from 'react-native';
import {scale} from '@utils';
import {Colors, Fonts} from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(16),
    backgroundColor: Colors.WHITE,
  },
  label: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(18),
    color: Colors.BLACK,
  },
});

export default styles;
