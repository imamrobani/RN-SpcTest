import React from 'react';
import {View} from 'react-native';

// component
import {CategoryIcon} from '@components';

// styles
import styles from './styles';
import TitleSection from './TitleSection';

const CategorySection = () => {
  return (
    <>
      <TitleSection title="Categories" />
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
