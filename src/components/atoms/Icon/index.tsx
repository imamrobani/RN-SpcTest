//icon
import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';

// styles
import {Colors} from '../../../constants';

// assets
import {
  icArrowLeft,
  icBarber,
  icBell,
  icBooking,
  icBookmark,
  icBookmarkFill,
  icCleaning,
  icFilter,
  icLaundry,
  icLocation,
  icMarkerLocation,
  icMessage,
  icMore,
  icPainting,
  icPlumbing,
  icRepairing,
  icSearch,
  icStar,
  icTool,
  icTruck,
  icUser,
} from '../../../assets';
import {scale} from '../../../utils';

type Props = {
  name: IconName;
  width?: number;
  height?: number;
  size?: number;
  fillColor?: string;
  style?: ViewStyle;
};

const getSource = (name: IconName) => {
  switch (name) {
    case 'icArrowLeft':
      return icArrowLeft;
    case 'icBarber':
      return icBarber;
    case 'icBell':
      return icBell;
    case 'icBooking':
      return icBooking;
    case 'icBookmark':
      return icBookmark;
    case 'icBookmarkFill':
      return icBookmarkFill;
    case 'icCleaning':
      return icCleaning;
    case 'icFilter':
      return icFilter;
    case 'icLaundry':
      return icLaundry;
    case 'icLocation':
      return icLocation;
    case 'icMarkerLocation':
      return icMarkerLocation;
    case 'icMessage':
      return icMessage;
    case 'icMore':
      return icMore;
    case 'icPainting':
      return icPainting;
    case 'icPlumbing':
      return icPlumbing;
    case 'icRepairing':
      return icRepairing;
    case 'icSearch':
      return icSearch;
    case 'icStar':
      return icStar;
    case 'icTool':
      return icTool;
    case 'icTruck':
      return icTruck;
    case 'icUser':
      return icUser;
  }
};

const Icon: React.FC<Props> = props => {
  const {
    name,
    width = 24,
    height = 24,
    size = 24,
    fillColor = Colors.WHITE,
    style,
  } = props;

  const ImportedIcon = getSource(name) as React.ElementType;

  return (
    <View style={style}>
      <ImportedIcon
        style={{color: fillColor}}
        width={scale(size) || scale(width)}
        height={scale(size) || scale(height)}
        fill={fillColor}
      />
    </View>
  );
};

export default memo(Icon);
