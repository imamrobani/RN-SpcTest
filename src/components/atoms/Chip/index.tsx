import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// styles
import styles from './styles';
import {Colors} from '@constants';

type ChipProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const Chip: React.FC<ChipProps> = ({label, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isSelected ? Colors.BLACK : Colors.WHITE},
      ]}>
      <Text
        style={[
          styles.label,
          {color: isSelected ? Colors.WHITE : Colors.SPC_GRAY},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
