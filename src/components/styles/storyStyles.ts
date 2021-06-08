import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerOpen: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  containerClosed: {
    position: 'absolute',
    width: 0,
    height: 0
  },
  activityIndicatorContainer: {
    width: '100%',
    zIndex: 10,
    paddingHorizontal: 50,
    height: 30,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  storiesContainer: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject
  },
  image: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject
  }
});
