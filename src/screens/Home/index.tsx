import React from 'react';
import {SafeAreaView, View} from 'react-native';

// styles
import styles from './styles';

// fragment
import HeaderHome from './fragment/HeaderHome';
import CategorySection from './fragment/CategorySection';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <HeaderHome />
      <View style={styles.container}>
        <CategorySection />
      </View>
    </SafeAreaView>
  );
};

export default Home;
