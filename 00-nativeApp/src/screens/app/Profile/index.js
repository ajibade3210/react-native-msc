import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';

const Profile = ({navigation}) => {
  const num = 10;
  const onLogout = () => {
    console.log('Log Out Clicked');
  };

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const onCreateListingPress = () => {
    navigation.navigate('CreateListing');
  };
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>

          <ListItem title="My Listings" subtitle={`You have ${num} listings`} />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle={'Account, FAQ, Contact'}
          />
        </View>

        <Button
          onPress={onCreateListingPress}
          style={styles.button}
          title="Add New Listing"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
