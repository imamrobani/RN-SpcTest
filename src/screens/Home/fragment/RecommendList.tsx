import React from 'react';
import {View} from 'react-native';

import styles from './styles';

// components
import {CardService} from '@components';

// fragment
import TitleSection from './TitleSection';

// store
import {useAppDispatch, useAppSelector} from '@reduxhooks';
import {updateBookmark} from '@slice';

const RecommendList = () => {
  const dispatch = useAppDispatch();

  const services = useAppSelector(state => state.serviceReducer.services);
  const recommendedServices = services.filter(service => service.isRecommended);

  const handleBookmark = (id: number) => {
    dispatch(updateBookmark(id));
  };

  return (
    <>
      <TitleSection title="Recommended services" />
      <View style={styles.gapRecomend}>
        {recommendedServices.map(item => (
          <CardService
            key={item.id}
            data={item}
            onBookmark={() => handleBookmark(item.id)}
          />
        ))}
      </View>
    </>
  );
};

export default RecommendList;
