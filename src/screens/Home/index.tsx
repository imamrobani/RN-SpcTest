import React from 'react';
import {SafeAreaView, View} from 'react-native';

// styles
import styles from './styles';

// fragment
import HeaderHome from './fragment/HeaderHome';
import CategorySection from './fragment/CategorySection';
import BannerSection from './fragment/BannerSection';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <HeaderHome />
      <View style={styles.container}>
        <BannerSection />
        <CategorySection />
      </View>
    </SafeAreaView>
  );
};

export default Home;
