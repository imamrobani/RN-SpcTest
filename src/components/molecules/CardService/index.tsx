import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Colors} from '@constants';
import {ImgServiceDummy} from '@assets';

import {Icon} from '@components/atoms';

const CardService = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <Image source={ImgServiceDummy} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>Kylee Danford</Text>
          <Text style={styles.service}>House Cleaning</Text>
          <Text style={styles.service}>₦ 1,100</Text>
          <View style={styles.rowRating}>
            <Icon name="icStar" size={12} fillColor={Colors.SPC_GRAY} />
            <Text style={styles.rating}>4.8</Text>
            <View style={styles.separatorRating} />
            <Text style={styles.rating}>8,289 reviews</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIsBookmarked(!isBookmarked)}>
        <Icon
          name="icBookmark"
          fillColor={isBookmarked ? Colors.BLACK : 'none'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardService;
