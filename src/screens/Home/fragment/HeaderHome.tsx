import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

// styles
import styles from './styles';
import {ImgHi, ImgUserDummy} from '@assets';

// component
import {Icon} from '@components';

type Props = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamLst, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

const HeaderHome = () => {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.rowUser}>
        <Image source={ImgUserDummy} style={styles.userImage} />
        <View>
          <View style={styles.rowUser}>
            <Text style={styles.titleHeader}>Good Morning</Text>
            <Image source={ImgHi} />
          </View>
          <Text numberOfLines={1} style={styles.name}>
            Chaitanya Goyal
          </Text>
        </View>
      </View>
      <View style={styles.rowIcon}>
        <Icon name="icBell" />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Bookmark')}>
          <Icon name="icBookmark" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
