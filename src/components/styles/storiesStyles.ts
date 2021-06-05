import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    ...StyleSheet.absoluteFillObject
  },
  deck: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    top: 0,
    left: 0,
  },
});
