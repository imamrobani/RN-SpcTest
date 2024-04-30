import React from 'react';
import {View} from 'react-native';

// component
import {IconButton, TextField} from '@components';

// styles
import styles from './styles';
import {Colors} from '@constants';

const SearchHome = () => {
  return (
    <View style={styles.gapSearch}>
      <TextField
        placeholder="Search ..."
        iconLeft={'icSearch'}
        iconRight={'icFilter'}
        sizeIconRight={24}
      />
      <View style={styles.gapSearchLoc}>
        <View style={styles.flex1}>
          <TextField
            placeholder="Your location..."
            iconLeft={'icMarkerLocation'}
            backgroundColor={Colors.SPC_BACKGROUND_LIGHT_GRAY}
            borderColor={Colors.SPC_BACKGROUND_GRAY}
            height={50}
          />
        </View>
        <IconButton
          icon={'icLocation'}
          width={60}
          backgroundColor={Colors.SPC_BACKGROUND_LIGHT_GRAY}
          borderColor={Colors.SPC_BACKGROUND_GRAY}
        />
      </View>
    </View>
  );
};

export default SearchHome;
