import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

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

const Home = () => {
  const renderHeader = () => {
    return (
      <>
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
    <SafeAreaView style={styles.page}>
      <HeaderHome />
      <FlatList
        data={ServiceList}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
