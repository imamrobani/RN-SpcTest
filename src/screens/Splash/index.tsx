/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {View, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CommonActions} from '@react-navigation/native';

// styles
import styles from './styles';
import {ImgLogo} from '@assets';

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({navigation}) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        }),
      );
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.page}>
      <Image source={ImgLogo} style={styles.logo} />
    </View>
  );
};

export default Splash;
