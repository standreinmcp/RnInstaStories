import React from 'react';
import {Pressable, View, Image} from 'react-native';
import {styles} from './styles/storyStyles';
import {Story as StoryType} from '../constants/types';

interface Props {
  story: StoryType;
}

export const Story: React.FC<Props> = ({story}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image source={{uri: story.items[story.idx].src}} style={styles.deck} />
      </View>
    </Pressable>
  );
};
