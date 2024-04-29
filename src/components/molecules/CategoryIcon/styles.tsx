import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../constants';
import {deviceWidth, scale} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth() / 4 - scale(16),
  },
  iconContainer: {
    width: scale(52),
    height: scale(52),
    backgroundColor: Colors.BLACK,
    borderRadius: scale(52 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.OUTFIT_MEDIUM,
    color: Colors.SPC_GRAY,
    fontSize: scale(14),
  },
});

export default styles;
