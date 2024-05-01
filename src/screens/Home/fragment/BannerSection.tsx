import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import styles from './styles';
import {ImgBanner1, ImgBanner2, ImgBanner3} from '@assets';
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
          <Image source={ImgBanner1} style={styles.banner} />
          <Image source={ImgBanner2} style={styles.banner} />
          <Image source={ImgBanner3} style={styles.banner} />
        </ScrollView>
      </View>
    </>
  );
};

export default BannerSection;
