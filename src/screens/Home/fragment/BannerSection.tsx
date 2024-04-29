import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';
import {ImgBanner} from '@assets';

const BannerSection = () => {
  return (
    <>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Special Offers</Text>
        <Text style={styles.titleHeader}>See All</Text>
      </View>
      <Image source={ImgBanner} style={styles.banner} />
    </>
  );
};

export default BannerSection;
