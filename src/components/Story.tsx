import React from 'react';
import {Pressable, View, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles/storyStyles';
import {Story as StoryType} from '../constants/types';
import {Indicator} from './Indicator';

interface Props {
  story: StoryType;
  currentDeck: boolean;
}

export const Story: React.FC<Props> = ({story, currentDeck}) => {
  return (
    <>
      <Pressable>
        <View style={styles.container}>
          <Image
            source={{uri: story.items[story.idx].src}}
            style={styles.deck}
          />
        </View>
      </Pressable>
      <View style={StyleSheet.absoluteFillObject}>
        <LinearGradient
          colors={['rgba(0,0,0,0.33)', 'transparent']}
          locations={[0, 0.95]}
          style={styles.indicatorBg}
        />

        <View style={styles.indicators}>
          {story.items.map((item, i) => (
            <Indicator
              key={i}
              i={i}
              animate={currentDeck && story.idx == i}
              story={story}
            />
          ))}
        </View>
      </View>
    </>
  );
};
