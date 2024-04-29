import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {CardService} from '@components';
import {ServiceList} from '@constants';
import TitleSection from './TitleSection';

const RecommendList = () => {
  return (
    <>
      <TitleSection title="Recommended services" />
      <View style={styles.gapRecomend}>
        {ServiceList.slice(0, 2).map(item => (
          <CardService key={item.id} />
        ))}
      </View>
    </>
  );
};

export default RecommendList;
