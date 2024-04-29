/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

// styles
import styles from './styles';
import {Fonts} from '@constants';

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({navigation}) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
