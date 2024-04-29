import React from 'react';
import {View, Text, Image} from 'react-native';

// styles
import styles from './styles';
import {ImgHi, ImgUserDummy} from '@assets';

// component
import {Icon} from '@components';

const HeaderHome = () => {
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
        <Icon name="icBookmark" />
      </View>
    </View>
  );
};

export default HeaderHome;
