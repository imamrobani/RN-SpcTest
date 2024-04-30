import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// component
import {Icon} from '@components/atoms';

// styles
import styles from './styles';
import {Colors} from '@constants';

const Icons = ({label, focus}: {label: string; focus: boolean}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <Icon name="icHome" fillColor={Colors.SPC_BACKGROUND_GRAY} size={20} />
      ) : (
        <Icon name="icHome" fillColor={Colors.WHITE} size={20} />
      );
    case 'Booking':
      return focus ? (
        <Icon name="icBooking" fillColor={Colors.WHITE} size={20} />
      ) : (
        <Icon name="icBooking" fillColor={Colors.WHITE} size={20} />
      );
    case 'Message':
      return focus ? (
        <Icon name="icMessage" fillColor={Colors.WHITE} size={20} />
      ) : (
        <Icon name="icMessage" fillColor={Colors.WHITE} size={20} />
      );
    case 'Profile':
      return focus ? (
        <Icon name="icUser" fillColor={Colors.WHITE} size={20} />
      ) : (
        <Icon name="icUser" fillColor={Colors.WHITE} size={20} />
      );
    default:
      return <Icon name="icBell" fillColor={Colors.BLACK} size={20} />;
  }
};

const BottomNavigator: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options?.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.7}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.contentContainer}>
              <View
                style={
                  isFocused
                    ? styles.iconContainerActive
                    : styles.iconContainerInActive
                }>
                <Icons label={label} focus={isFocused} />
              </View>
              <Text style={isFocused ? styles.activeTab : styles.inActiveTab}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;
