import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deck: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'white',
  },
  indicators: {
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  indicatorBg: {
    ...StyleSheet.absoluteFillObject,
    height: 50,
  },

  back: {
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
    width: 90,
  },

  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 70,
    height: 70,
    zIndex: 1,
  },
  closeCross: {
    position: 'absolute',
    top: 32,
    right: 8,
    width: 20,
    height: 1,
    backgroundColor: '#fff',
  },
});
