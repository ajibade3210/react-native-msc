import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    paddingVertical: 24,
  },
  productList: {
    paddingHorizontal: 16,
  },
  footer: {
    height: 250,
    alignItems: 'center',
    padding: 16,
  },
  footerText: {
    fontSize: 16,
    color: colors.lightGrey,
    fontWeight: 'bold',
  },
});
