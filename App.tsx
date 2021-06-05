import React from 'react';
import {View} from 'react-native';
import {MainScreen} from './src/features/MainScreen';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <MainScreen />
    </View>
  );
};

export default App;
