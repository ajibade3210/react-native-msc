import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    width: 18,
    height: 19,
    tintColor: colors.blue,
    marginLeft: -16,
    marginTop: -10,
  },
  textarea: {
    minHeight: 150,
    // paddingTop: 10,
    textAlignVertical: 'top',
  },
  button: {
    marginBottom: 180,
  },
});
