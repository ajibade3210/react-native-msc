import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    // paddingHorizontal: 8,
    // borderRadius: 8,
    // width: '100%',
    marginBottom: 20,
  },
  label: {
    marginVertical: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: 'row', // display flex
    alignItems: 'center',
  },
  input: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    // borderColor: 'yellow',
    flex: 1,
  },
  eye: {
    width: 25,
    height: 20,
    tintColor: colors.grey,
    marginHorizontal: 16,
  },
});
