import React from 'react';
import {View, Animated, PanResponderInstance} from 'react-native';
import {styles} from './styles/storiesStyles';
import storiesMockData from '../constants/storiesMockData';
import {HEIGHT, WIDTH} from '../constants/constants';
import {Story} from './Story';

interface Props {
  panResponder: PanResponderInstance;
//   verticalSwipe: Animated.Value;
//   horizontalSwipe: Animated.Value;
//   swipedHorizontally: boolean;
  deckIdx: number;
}

export const Stories: React.FC<Props> = ({
  panResponder,
//   verticalSwipe,
//   horizontalSwipe,
//   swipedHorizontally,
  deckIdx,
}) => {
  return (
    <View style={styles.container}>
      {storiesMockData.map((story, idx) => {
        // let scale = verticalSwipe.interpolate({
        //   inputRange: [-1, 0, HEIGHT],
        //   outputRange: [1, 1, 0.75],
        // });

        // if (swipedHorizontally) {
        //   scale = horizontalSwipe.interpolate({
        //     inputRange: [WIDTH * (idx - 1), WIDTH * idx, WIDTH * (idx + 1)],
        //     outputRange: [0.79, 1, 0.78],
        //   });
        // }

        return (
          <Animated.View
            key={idx}
            // style={[
            //   styles.deck,
            //   {
            //     transform: [
            //       {
            //         translateX: horizontalSwipe.interpolate({
            //           inputRange: [
            //             WIDTH * (idx - 1),
            //             WIDTH * idx,
            //             WIDTH * (idx + 1),
            //           ],
            //           outputRange: [WIDTH, 0, -WIDTH],
            //         }),
            //       },
            //       {
            //         translateY: verticalSwipe.interpolate({
            //           inputRange: [-1, 0, HEIGHT],
            //           outputRange: [0, 0, HEIGHT / 2],
            //         }),
            //       },
            //       {scale},
            //     ],
            //   },
			// ]}>
			>
            <Story story={story} currentDeck={deckIdx == idx} />
          </Animated.View>
        );
      })}
    </View>
  );
};
