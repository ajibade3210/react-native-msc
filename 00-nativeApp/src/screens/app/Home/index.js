import {FlatList, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../data/products';
import ProductHomeitem from '../../../components/ProductHomeitem';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(products);

  // filter by categories
  useEffect(() => {
    let checkKey = keyword?.toLocaleLowerCase();

    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProduct(updatedProducts);
    } else if (keyword && selectedCategory) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLocaleLowerCase().includes(checkKey),
      );
      setFilteredProduct(updatedProducts);
    } else if (keyword && !selectedCategory) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLocaleLowerCase().includes(checkKey),
      );
      setFilteredProduct(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductItem = ({item, index}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeitem onPress={() => onProductPress(item)} {...item} />;
  };
  return (
    <SafeAreaView>
      <Header
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
        title="Find All You Need"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        style={styles.productList}
        numColumns={2} // after changing this reload
        data={filteredProduct}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => String(index)}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>©ajibadde</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
