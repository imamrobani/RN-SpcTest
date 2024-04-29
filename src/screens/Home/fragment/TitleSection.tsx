import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type TitleSectionProps = {
  title: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({title}) => {
  return (
    <View style={styles.rowBetween}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titleHeader}>See All</Text>
    </View>
  );
};

export default TitleSection;
