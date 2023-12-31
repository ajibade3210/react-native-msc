import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/home.png')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
}
