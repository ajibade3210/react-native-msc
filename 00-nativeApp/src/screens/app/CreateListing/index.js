import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../../utils/colors';
import Input from '../../../components/Input';
import {categories} from '../../../data/categories';
import Button from '../../../components/Button';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const goBack = () => {
    navigation.goBack();
  };

  // Handle Upload Image In RN
  // Install react-native-image-picker dependency
  // use launchImageLibrary to get image from phone gallery
  // once image is selected we will get the details returned.
  // the add it to images state...
  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    console.log('result: ', result.assets);

    if (result?.assets?.length) {
      setImages(list => [...list, ...result?.assets]);
    }
    setLoading(false);
  };

  const onDeleteImage = image => {
    setImages(list => {
      const filteredImages = list.filter(img => img?.uri !== image?.uri);
      return filteredImages;
    });
  };

  // Handle Input Form
  const onChange = (value, key) => {
    setValues(val => ({...val, [key]: value}));
  };
  return (
    <SafeAreaView>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new Listing"
      />

      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView behaviour="padding">
          <Text style={styles.sectionTitle}>Uppload Photos</Text>

          <View style={styles.imageRow}>
            <TouchableOpacity
              disabled={loading}
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>

            {images?.map((image, idx) => (
              <View style={styles.imageContainer} key={image?.uri}>
                <Image style={styles.image} source={{uri: image?.uri}} />
                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                  <Image
                    style={styles.delete}
                    source={require('../../../assets/close.png')}
                  />
                </Pressable>
              </View>
            ))}

            {loading ? (
              <ActivityIndicator size="large" color={colors.blue} />
            ) : null}
          </View>
          <Input
            placeholder="Lisiting Title"
            label="Title"
            value={values.title}
            onChangeText={v => onChange(v, 'title')}
          />

          <Input
            placeholder="Enter price in USD"
            label="Price"
            value={values.price}
            onChangeText={v => onChange(v, 'price')}
            keyboardType="numeric"
          />

          <Input
            placeholder="Select the category"
            label="Category"
            options={categories}
            value={values.category}
            onChangeText={v => onChange(v, 'category')}
            type="picker"
          />

          <Input
            style={styles.textarea}
            placeholder="Tell us more"
            label="Description"
            value={values.description}
            onChangeText={v => onChange(v, 'description')}
            multiline={true}
          />
        </KeyboardAvoidingView>
        <Button style={styles.button} title="Submit" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
