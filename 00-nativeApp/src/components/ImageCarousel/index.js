import React, {useState} from 'react';
import {styles} from './styles';
import {Dimensions, FlatList, Image, View} from 'react-native';

const {width} = Dimensions.get('window');

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEnd = e => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    console.log('horizontalOffset: ', horizontalOffset);
    const index = Math.round(horizontalOffset / width);
    setActiveIndex(index);
  };

  const renderImage = ({item}) => {
    return <Image style={styles.image} source={{uri: item}} />;
  };
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={styles.list}
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
