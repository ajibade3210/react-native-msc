import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ListItem = ({title, subtitle, onPress, style}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image
        style={styles.arrow}
        source={require('../../assets/arrow-right.png')}
      />
    </Pressable>
  );
};

export default React.memo(ListItem);
