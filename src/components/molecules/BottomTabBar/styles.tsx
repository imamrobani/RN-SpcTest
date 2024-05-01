import {Platform, StyleSheet} from 'react-native';
import {Colors, Fonts} from '@constants';
import {scale} from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: scale(16),
    paddingBottom: scale(8),
    justifyContent: 'space-around',
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: 'white',
        paddingBottom: scale(24),
      },
    }),
  },
  contentContainer: {
    alignItems: 'center',
    gap: 2,
  },
  iconContainerActive: {
    backgroundColor: Colors.SPC_BACKGROUND_GRAY,
    padding: scale(8),
    borderRadius: 16,
  },
  iconContainerInActive: {
    backgroundColor: Colors.WHITE,
    padding: scale(8),
    borderRadius: 16,
  },
  activeTab: {
    fontFamily: Fonts.OUTFIT_SEMIBOLD,
    fontSize: scale(11),
    color: Colors.SPC_GRAY,
  },
  inActiveTab: {
    fontFamily: Fonts.OUTFIT_REGULAR,
    fontSize: scale(11),
    color: Colors.SPC_GRAY,
  },
});

export default styles;
