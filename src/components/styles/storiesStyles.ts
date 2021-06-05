import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  deck: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    top: 0,
    left: 0,
  },
});
