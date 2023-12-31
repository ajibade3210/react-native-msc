import {Text, Pressable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Seperator = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Seperator);
