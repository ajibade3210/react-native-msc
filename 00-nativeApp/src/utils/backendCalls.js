import {request} from './request';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async values => {
  try {
    const dummydata = {
      username: 'kminchelle',
      password: '0lelplR',
    };

    const res = await request({
      url: '/auth/login',
      method: 'POST',
      data: dummydata,
    });

    if (res?.data?.token) {
      await AsyncStorage.setItem('auth_token', res?.data?.token);
      return res?.data?.token;
    }
  } catch (e) {
    console.log('e: ', e);
  }
};

export const signup = async values => {
  try {
    const res = await request({
      url: '/user/add',
      method: 'POST',
      data: values,
    });

    if (res) {
      const {email, password} = values;
      const loginResponse = await login({email, password});
      return loginResponse;
    }
  } catch (e) {
    console.log('e: ', e);
  }
};
