import {Alert, ScrollView, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {signup} from '../../../utils/backendCalls';
import {userContext} from '../../../../App';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser} = useContext(userContext);

  const onSignIn = () => {
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
      if (!values?.username || !values?.email || !values?.password) {
        return Alert.alert('All fields are required');
      }

      if (values?.password.length <= 5) {
        return Alert.alert('Password Length must be above 6 values');
      }

      if (!checked) {
        return Alert.alert('Please agree to the terms and privacy');
      }

      const token = await signup(values);
      setUser({token});
    } catch (error) {
      console.log('Error:-', error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input
          value={values.username}
          onChangeText={v => onChange('username', v)}
          label="User Name"
          placeholder="John_Doe"
        />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
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

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onChecked={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>

        <Button onPress={onSubmit} style={styles.button} title="Sign Up" />
        <Seperator text="Or sign up with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
