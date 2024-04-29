import React from 'react';
import {TextInput, TextInputProps, TouchableOpacity} from 'react-native';

// styles
import styles from './styles';
import {Colors} from '@constants';

// component
import {Icon} from '@components/atoms';

// utils
import {scale} from '@utils';

interface TextField extends TextInputProps {
  borderColor?: string;
  backgroundColor?: string;
  height?: number;
  iconLeft?: IconName;
  iconRight?: IconName;
  sizeIconLeft?: number;
  sizeIconRight?: number;
  onPress?: () => void;
}

const TextField: React.FC<TextField> = ({
  borderColor = Colors.SPC_LIGHT_GRAY,
  backgroundColor = Colors.SPC_LIGHT_GRAY,
  height = 44,
  iconLeft,
  iconRight,
  sizeIconLeft = 20,
  sizeIconRight = 20,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, {borderColor, backgroundColor, height}]}
      onPress={onPress}>
      {iconLeft && <Icon name={iconLeft} size={scale(sizeIconLeft)} />}
      <TextInput
        style={[styles.inputContainer, {height}]}
        placeholderTextColor={Colors.SPC_GRAY}
        {...props}
      />
      {iconRight && (
        <TouchableOpacity activeOpacity={0.7} style={styles.iconRight}>
          <Icon name={iconRight} size={scale(sizeIconRight)} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default TextField;
