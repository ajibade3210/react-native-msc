import {Text, Pressable, View, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Input from '../Input';

const Header = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showLogout,
  showSearch,
  showBack,
  keyword,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/arrow-left.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('../../assets/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>

      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeholder="Type your keyword..."
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
