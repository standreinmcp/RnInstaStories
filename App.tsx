/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {WIDTH, HEIGHT, OFFSET} from './src/constants/constants';
import {Bubbles} from './src/components/Bubbles';
import { Stories } from './src/features/Stories';

const App: React.FC = () => {
  const [carouselOpen, setCarouselOpen] = useState();

  return (
    <View style={styles.container}>
      <Bubbles />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
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

export default App;
