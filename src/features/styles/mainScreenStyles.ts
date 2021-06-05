import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  carouselWrap: {
    overflow: 'hidden',
    position: 'absolute',
  },
  closed: {
    width: 0,
    height: 0,
  },
  open: {
    width: WIDTH,
    height: HEIGHT,
    top: 0,
    left: 0,
  },

  btn: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'black',
  },
});
