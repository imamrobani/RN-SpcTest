import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@constants';
import {scale} from '@utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    borderColor: Colors.BLACK,
    borderRadius: 20,
    minWidth: scale(50),
  },
  label: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(14),
    color: Colors.SPC_GRAY,
  },
});

export default styles;
