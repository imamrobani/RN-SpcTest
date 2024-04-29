import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// component
import {Icon} from '@components/atoms';

// styles
import styles from './styles';
import {Colors} from '@constants';

type CategoryIconProps = {
  iconName?: IconName;
  name: string;
};

const CategoryIcon: React.FC<CategoryIconProps> = ({iconName, name}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.iconContainer}>
        {iconName && <Icon name={iconName} fillColor={Colors.BLACK} />}
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryIcon;
