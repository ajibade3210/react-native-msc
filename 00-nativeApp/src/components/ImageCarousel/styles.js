import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width,
    height: height * 0.55,
  },
  list: {},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});
