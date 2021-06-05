import React, {useRef} from 'react';
import {ScrollView, View, Image, Pressable} from 'react-native';

import storiesMockData from '../constants/storiesMockData';
import {styles} from './styles/bubblesStyles';
import {OpenCarouselProps} from '../constants/types';

interface Props {
  openCarousel: (params: OpenCarouselProps) => void;
}

export const Bubbles: React.FC<Props> = ({openCarousel}) => {
  const bubbleRef = useRef(null).current;
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          style={styles.bubbles}
          contentContainerStyle={{alignItems: 'center'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {storiesMockData.map((story, i) => (
            <View ref={bubbleRef} key={i}>
              <Pressable onPress={() => {
                openCarousel({idx: i})}}>
                <Image style={styles.img} source={{uri: story.avatar}} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
