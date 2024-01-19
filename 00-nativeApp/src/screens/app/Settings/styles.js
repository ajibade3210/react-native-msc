import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  icon: {
    width: 20,
    height: 24,
    tintColor: colors.blue,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  sectionHelpTitle: {
    marginTop: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});
