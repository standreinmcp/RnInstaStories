import React from 'react';
import {View, Animated} from 'react-native';
import {styles} from './styles/indicator';

export const Indicator: React.FC = () => {
  return (
    <View style={styles.line}>
      <Animated.View style={styles.progress} />
    </View>
  );
};
