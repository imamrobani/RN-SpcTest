import React from 'react';
import {View, Text} from 'react-native';

// styles
import styles from './styles';
import {Colors} from '@constants';

// components
import IconButton from '../IconButton';

type HeaderProps = {
  label: string;
  onBack?: () => void;
  iconLeft?: IconName;
};

const Header: React.FC<HeaderProps> = ({label, onBack, iconLeft}) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={'icArrowLeft'}
        width={48}
        height={48}
        onPress={onBack}
      />
      <Text style={styles.label}>{label}</Text>
      {iconLeft && (
        <IconButton
          icon={iconLeft}
          width={48}
          height={48}
          backgroundColor={Colors.WHITE}
        />
      )}
    </View>
  );
};

export default Header;
