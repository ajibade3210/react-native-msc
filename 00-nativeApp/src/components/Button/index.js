import {Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Button = ({title, handpress, style}) => {
  console.log('INSIDE BUTTON-----');
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handpress}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
