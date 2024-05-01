import {StyleSheet} from 'react-native';
import {scale} from '@utils';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(250),
    height: scale(250),
  },
});

export default styles;
