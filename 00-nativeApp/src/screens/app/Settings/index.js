import {Text, ScrollView, Linking, Image, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';

const Settings = ({navigation}) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState({name: 'User', email: 'user@mail.com'});

  const onEditPress = () => {
    setEditing(!editing);
  };

  const onSave = () => {
    setEditing(false);
  };

  // Passing Values From Input Forms ***
  const onChange = (key, values) => {
    setValue(v => ({...v, [key]: values}));
  };

  const onItemPress = () => {
    Linking.openURL('https://reflectoring.io/');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={goBack} title="Settings" />
      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require('../../../assets/edit.png')}
            />
          </Pressable>
        </View>

        <EditableBox
          onChangeText={v => onChange('name', v)}
          label="Name"
          value={value.name}
          editable={editing}
        />
        <EditableBox
          onChangeText={v => onChange('email', v)}
          label="Email"
          value={value.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.button} onPress={onSave} title="Save" />
        ) : null}

        <Text style={[styles.sectionTitle, styles.sectionHelpTitle]}>
          Help Center
        </Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
