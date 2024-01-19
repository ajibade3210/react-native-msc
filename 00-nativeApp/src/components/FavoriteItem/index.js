import {Text, Pressable, Image, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const FavoriteItem = ({title, price, image, onPress}) => {
  const onClosePress = () => {
    console.log('Close---');
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Pressable onPress={onClosePress}>
        <Image style={styles.icon} source={require('../../assets/close.png')} />
      </Pressable>
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
