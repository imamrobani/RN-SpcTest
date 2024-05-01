/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

// styles
import styles from './styles';

// component
import {CardService} from '@components';

// fragment
import HeaderHome from './fragment/HeaderHome';
import CategorySection from './fragment/CategorySection';
import BannerSection from './fragment/BannerSection';
import RecommendList from './fragment/RecommendList';
import FilterChip from './fragment/FilterChip';
import SearchHome from './fragment/SearchHome';

// store
import {useAppDispatch, useAppSelector} from '@reduxhooks';
import {getServices, updateBookmark} from '@slice';
import {storeDataStorage} from '@libraries';

const Home = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(state => state.serviceReducer.services);

  useEffect(() => {
    dispatch(getServices());
    storeDataStorage('FIRST_LOAD', true);
  }, []);

  const handleBookmark = (id: number) => {
    dispatch(updateBookmark(id));
  };

  const renderHeader = () => {
    return (
      <>
        <SearchHome />
        <BannerSection />
        <CategorySection />
        <RecommendList />
        <FilterChip />
      </>
    );
  };
  const renderItem = ({item}: {item: Service}) => {
    return (
      <CardService data={item} onBookmark={() => handleBookmark(item.id)} />
    );
  };

  return (
    <View style={styles.page}>
      <HeaderHome />
      <FlatList
        data={services}
        initialNumToRender={10}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default Home;
