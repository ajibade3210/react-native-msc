import {Text, Pressable, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo: --', userInfo);
    } catch (error) {
      if (error) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleGoogleLogin}
      style={styles.container}>
      <Image style={styles.image} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
