import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@constants';
import {scale} from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: scale(16),
    paddingVertical: 0,
    backgroundColor: Colors.SPC_LIGHT_GRAY,
  },
  inputContainer: {
    flex: 1,
    fontFamily: Fonts.OUTFIT_REGULAR,
    color: Colors.SPC_GRAY,
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
  },
  iconRight: {
    paddingVertical: scale(8),
    paddingRight: scale(16),
    paddingLeft: scale(8),
  },
});

export default styles;
