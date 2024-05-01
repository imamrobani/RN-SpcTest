import React from 'react';
import {View} from 'react-native';

import styles from './styles';

// components
import {CardService} from '@components';

// fragment
import TitleSection from './TitleSection';

// store
import {useAppSelector} from '@reduxhooks';

const RecommendList = () => {
  const services = useAppSelector(state => state.serviceReducer.services);

  const recommendedServices = services.filter(service => service.isRecommended);
  return (
    <>
      <TitleSection title="Recommended services" />
      <View style={styles.gapRecomend}>
        {recommendedServices.map(item => (
          <CardService key={item.id} data={item} />
        ))}
      </View>
    </>
  );
};

export default RecommendList;
