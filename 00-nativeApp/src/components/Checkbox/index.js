import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Checkbox = ({checked, onChecked}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onChecked(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/checkbox.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
