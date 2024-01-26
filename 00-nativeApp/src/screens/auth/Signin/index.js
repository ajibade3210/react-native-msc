import {Alert, ScrollView, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {login} from '../../../utils/backendCalls';
import {userContext} from '../../../../App';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});
  const {setUser} = useContext(userContext);
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    try {
      if (!values?.username || !values?.password) {
        return Alert.alert('All fields are required');
      }

      if (values?.password.length <= 5) {
        return Alert.alert('Password Length must be above 6 values');
      }

      const token = await login(values);
      setUser({token});
    } catch (e) {
      console.log('e: ', e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input
          value={values.username}
          onChangeText={v => onChange('username', v)}
          label="Email"
          placeholder="example@gmail.com"
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          label="Password"
          placeholder="******"
        />

        <Button onPress={onSubmit} style={styles.button} title="Sign In" />
        <Seperator text="Or sign in with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
