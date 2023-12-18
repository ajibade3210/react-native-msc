import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // display fllex
    alignItems: 'center',
    marginBottom: 54,
  },
  image: {
    width: 18,
    height: 18,
    tintColor: colors.blue,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
