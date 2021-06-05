/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {MainScreen} from './src/features/MainScreen';

const App: React.FC = () => {
  const [carouselOpen, setCarouselOpen] = useState();

  return (
    <View style={{flex: 1}}>
      <MainScreen />
    </View>
  );
};

export default App;
