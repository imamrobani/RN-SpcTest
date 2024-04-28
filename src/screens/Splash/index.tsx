import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

// styles
import styles from './styles';
import {Fonts} from '../../constants';

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{fontFamily: Fonts.OUTFIT_REGULAR}}>Splash Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
