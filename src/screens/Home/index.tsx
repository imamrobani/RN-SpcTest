import React from 'react';
import {FlatList, View} from 'react-native';

// styles
import styles from './styles';
import {ServiceList} from '@constants';

// component
import {CardService} from '@components';

// fragment
import HeaderHome from './fragment/HeaderHome';
import CategorySection from './fragment/CategorySection';
import BannerSection from './fragment/BannerSection';
import RecommendList from './fragment/RecommendList';
import FilterChip from './fragment/FilterChip';
import SearchHome from './fragment/SearchHome';

const Home = () => {
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
  const renderItem = () => {
    return <CardService />;
  };

  return (
    <View style={styles.page}>
      <HeaderHome />
      <FlatList
        data={ServiceList}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
