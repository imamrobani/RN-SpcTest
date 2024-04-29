import React from 'react';
import {Image} from 'react-native';

import styles from './styles';
import {ImgBanner} from '@assets';
import TitleSection from './TitleSection';

const BannerSection = () => {
  return (
    <>
      <TitleSection title="Special Offers" />
      <Image source={ImgBanner} style={styles.banner} />
    </>
  );
};

export default BannerSection;
