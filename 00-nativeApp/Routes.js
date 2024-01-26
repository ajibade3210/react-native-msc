import React, {useContext, useEffect} from 'react';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import TabIcon from './src/components/TabIcon';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import {userContext} from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <TabIcon focused={focused} routeName={route.name} />
      ),
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey},
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const Routes = () => {
  const {user, setUser} = useContext(userContext);

  useEffect(() => {
    (asynaccc () => {
      const token = await AsyncStorage.getItem('auth_token');
      setUser({token});
    })();
  }, [setUser]);

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: colors.white,
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {/* A sign that is passed for navigation has a nav props. */}
        {user?.token ? (
          <>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(Routes);
