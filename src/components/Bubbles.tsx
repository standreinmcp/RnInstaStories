import React, { useRef } from 'react';
import { ScrollView, View, Image, Pressable } from 'react-native';

import { mockStories } from '../constants/storiesMockData';
import { styles } from './styles/bubblesStyles';

interface Props {
  openStories: () => void;
}

export const Bubbles: React.FC<Props> = ({ openStories }) => {
  const bubbleRef = useRef(null).current;
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          style={styles.bubbles}
          contentContainerStyle={{ alignItems: 'center' }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {mockStories.map((story, i) => (
            <View ref={bubbleRef} key={i}>
              <Pressable onPress={openStories}>
                <Image style={styles.img} source={{ uri: story.avatar }} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
