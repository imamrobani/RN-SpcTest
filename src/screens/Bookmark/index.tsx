import React, {useState} from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

// styles
import styles from './styles';

// components
import {CardService, Chip, Header} from '@components';

// constants
import {FILTER} from '@constants/Consts';

// store
import {useAppDispatch, useAppSelector} from '@reduxhooks';
import {updateBookmark} from '@slice';

type Props = StackScreenProps<RootStackParamList, 'Bookmark'>;

const Bookmark: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const services = useAppSelector(state => state.serviceReducer.services);
  const bookmarServices = services.filter(service => service.isBookmark);

  const [selected, setSelected] = useState('all');

  const handleBookmark = (id: number) => {
    dispatch(updateBookmark(id));
  };

  const renderFilter = () => {
    if (bookmarServices.length > 0) {
      return (
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
      );
    }

    return null;
  };

  const renderItem = ({item}: {item: Service}) => {
    return (
      <CardService data={item} onBookmark={() => handleBookmark(item.id)} />
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>no data is bookmarked</Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <Header
        label="My BookMark"
        onBack={() => navigation.goBack()}
        iconLeft={'icMore'}
      />
      <View style={styles.container}>
        {renderFilter()}
        <FlatList
          data={bookmarServices}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </View>
  );
};

export default Bookmark;
