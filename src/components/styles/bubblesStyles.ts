import {StyleSheet} from 'react-native';
import {BUBBLE_SIZE} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bubbles: {
    height: 90,
    flexDirection: 'row',
    paddingHorizontal: 5,
    backgroundColor: '#f3f3f3',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  img: {
    borderWidth: 2,
    borderColor: '#fff',
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    borderRadius: BUBBLE_SIZE / 2,
    marginHorizontal: 6,
  },
});
