import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

// Handle Spread Props
const Input = ({
  label,
  type,
  value,
  options,
  placeholder,
  isPassword,
  style,
  onChangeText,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModelVisible, setIsPickerModelVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect = opt => {
    onChangeText(opt);
    setIsPickerModelVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'picker' ? (
        <Pressable
          onPress={() => setIsPickerModelVisible(true)}
          style={styles.inputContainer}>
          <Text style={[styles.placeholder, style]}>
            {value ? value?.title : placeholder}
          </Text>

          <Image
            style={styles.arrow}
            source={require('../../assets/arrow-left.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder} // props is being spread now
            {...props}
            style={[styles.input, style]}
          />

          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require('../../assets/eyee.png')
                    : require('../../assets/eye_closed.png')
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}

      <Modal transparent visible={isPickerModelVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsPickerModelVisible(false)}
          style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>
            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }

              const selected = value?.id === opt?.id;
              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(Input);
