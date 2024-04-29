import React from 'react';
import {ScrollView, View} from 'react-native';

// styles
import styles from './styles';

// component
import {Chip} from '@components';
import TitleSection from './TitleSection';

const FILTER = [
  {id: 'all', label: 'All'},
  {id: 'cleaning', label: 'Cleaning'},
  {id: 'repairing', label: 'Repairing'},
  {id: 'painting', label: 'Painting'},
  {id: 'laundry', label: 'Laundry'},
  {id: 'appliance', label: 'Appliance'},
  {id: 'plumbing', label: 'Plumbing'},
  {id: 'movers', label: 'Movers'},
  {id: 'barber', label: "Men's Salon"},
];

const FilterChip = () => {
  const [selected, setSelected] = React.useState('all');

  return (
    <>
      <TitleSection title="Discover & Explore Services" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          {FILTER.map(item => (
            <Chip
              key={item.id}
              label={item.label}
              isSelected={selected === item.id}
              onPress={() => setSelected(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default FilterChip;
