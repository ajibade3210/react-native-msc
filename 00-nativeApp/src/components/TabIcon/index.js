// TabIcon.js
import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

const TabIcon = ({focused, routeName}) => {
  let icon;

  if (routeName === 'Home') {
    icon = focused
      ? require('../../assets/tabs/home_active.png')
      : require('../../assets/tabs/home.png');
  } else if (routeName === 'ProfileStack') {
    icon = focused
      ? require('../../assets/tabs/profile_active.png')
      : require('../../assets/tabs/profile.png');
  } else if (routeName === 'Favorites') {
    icon = focused
      ? require('../../assets/tabs/favorites_active.png')
      : require('../../assets/tabs/favorites.png');
  }

  return <Image style={styles.image} source={icon} />;
};

export default React.memo(TabIcon);
