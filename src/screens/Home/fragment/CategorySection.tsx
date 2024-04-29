import React from 'react';
import {Text, View} from 'react-native';

// component
import {CategoryIcon} from '../../../components';

// styles
import styles from './styles';

const CategorySection = () => {
  return (
    <>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.titleHeader}>See All</Text>
      </View>
      <View style={styles.categoryContainer}>
        <CategoryIcon iconName="icCleaning" name="Cleaning" />
        <CategoryIcon iconName="icRepairing" name="Repairing" />
        <CategoryIcon iconName="icPainting" name="Painting" />
        <CategoryIcon iconName="icLaundry" name="Laundry" />
        <CategoryIcon iconName="icTool" name="Appliance" />
        <CategoryIcon iconName="icPlumbing" name="Plumbing" />
        <CategoryIcon iconName="icTruck" name="Movers" />
        <CategoryIcon iconName="icBarber" name="Men's Salonsss" />
      </View>
    </>
  );
};

export default CategorySection;
