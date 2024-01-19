import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    // paddingHorizontal: 8,
    // borderRadius: 8,
    // width: '100%',
    // flex: 1,
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
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{rotate: '270deg'}],
    tintColor: colors.blue,
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.grey,
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  headerTitle: {
    marginBottom: 16,
    color: colors.black,
    fontSize: 16,
  },
  optionText: {
    color: colors.black,
    paddingVertical: 4,
    fontSize: 16,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
