import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Colors, Consts} from '@constants';

import {Icon} from '@components/atoms';

type CardServiceProps = {
  data: Service;
};

const CardService: React.FC<CardServiceProps> = ({data}) => {
  const [isBookmarked, setIsBookmarked] = useState(data.isBookmark);

  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <Image
          source={{uri: data?.image || Consts.NO_IMAGE}}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.service}>{data?.service}</Text>
          <Text style={styles.service}>{data?.price}</Text>
          <View style={styles.rowRating}>
            <Icon name="icStar" size={12} fillColor={Colors.SPC_GRAY} />
            <Text style={styles.rating}>{data?.rating}</Text>
            <View style={styles.separatorRating} />
            <Text style={styles.rating}>{`{${data?.reviews} reviews}`}</Text>
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
