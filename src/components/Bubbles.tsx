import React from 'react';
import {ScrollView, View, Image, Pressable} from 'react-native';

import storiesMockData from '../constants/storiesMockData';
import {styles} from './styles/bubblesStyles';

export const Bubbles = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          style={styles.bubbles}
          contentContainerStyle={{alignItems: 'center'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {storiesMockData.map((story, i) => (
            <View key={i}>
              <Pressable>
                <Image style={styles.img} source={{uri: story.avatar}} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
