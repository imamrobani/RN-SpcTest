import React, {useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

// styles
import styles from './styles';

// components
import {CardService, Chip, Header} from '@components';

// constants
import {FILTER} from '@constants/Consts';
import {ServiceList} from '@constants';

type Props = StackScreenProps<RootStackParamList, 'Bookmark'>;

const Bookmark: React.FC<Props> = ({navigation}) => {
  const [selected, setSelected] = useState('all');

  const renderItem = () => {
    return <CardService />;
  };

  return (
    <View style={styles.page}>
      <Header
        label="My BookMark"
        onBack={() => navigation.goBack()}
        iconLeft={'icMore'}
      />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.filterContainer}
            showsHorizontalScrollIndicator={false}>
            {FILTER.map(item => (
              <Chip
                key={item.id}
                label={item.label}
                isSelected={selected === item.id}
                onPress={() => setSelected(item.id)}
              />
            ))}
          </ScrollView>
        </View>
        <FlatList
          data={ServiceList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Bookmark;
