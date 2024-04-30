import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

// styles
import styles from './styles';
import {Colors} from '@constants';
import {scale} from '@utils';

// component
import {Icon} from '@components/atoms';

interface IconButtonProps extends TouchableOpacityProps {
  icon: IconName;
  sizeIcon?: number;
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: number;
  height?: number;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  backgroundColor = Colors.CARBON,
  borderColor = Colors.CARBON,
  width = 48,
  height = 48,
  ...props
}) => {
  const heightBtn = height ? scale(height) : 'auto';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          width: scale(width),
          height: heightBtn,
          backgroundColor,
          borderColor,
        },
      ]}
      {...props}>
      <Icon name={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
