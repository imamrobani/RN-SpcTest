import React from 'react';
import {ScrollView} from 'react-native';

// styles
import styles from './styles';

// component
import {Chip} from '@components';
import TitleSection from './TitleSection';
import {FILTER} from '@constants/Consts';

const FilterChip = () => {
  const [selected, setSelected] = React.useState('all');

  return (
    <>
      <TitleSection title="Discover & Explore Services" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipContainer}>
        {FILTER.map(item => (
          <Chip
            key={item.id}
            label={item.label}
            isSelected={selected === item.id}
            onPress={() => setSelected(item.id)}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FilterChip;
