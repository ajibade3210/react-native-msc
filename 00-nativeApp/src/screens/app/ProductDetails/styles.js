import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {flex: 1},
  footer: {padding: 24, flexDirection: 'row', alignItems: 'center'},
  container: {},
  image: {
    width: '100%',
    height: height * 0.55,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 8,
  },
  description: {
    color: colors.textGrey,
    fontWeight: '300',
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },
  backIcon: {
    width: 10,
    height: 19,
    tintColor: colors.blue,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 19,
    height: 19,
  },
});
