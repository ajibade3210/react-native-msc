import {Text, Pressable, View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const EditableBox = ({label, value, onChangeText, editable, style}) => {
  return (
    <View onPress={'onPress'} style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default React.memo(EditableBox);
