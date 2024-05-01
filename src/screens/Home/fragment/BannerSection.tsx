import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import styles from './styles';
import {ImgBanner} from '@assets';
import TitleSection from './TitleSection';

const BannerSection = () => {
  return (
    <>
      <TitleSection title="Special Offers" />
      <View style={styles.bannerContainer}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Image source={ImgBanner} style={styles.banner} />
          <Image source={ImgBanner} style={styles.banner} />
          <Image source={ImgBanner} style={styles.banner} />
        </ScrollView>
      </View>
    </>
  );
};

export default BannerSection;
