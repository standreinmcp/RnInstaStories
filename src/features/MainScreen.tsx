import React, {useState, useRef} from 'react';
import {View, Animated, PanResponder, LayoutAnimation} from 'react-native';
import {styles} from './styles/mainScreenStyles';
import {Bubbles} from '../components/Bubbles';
import {OFFSET, WIDTH} from '../constants/constants';
import {Stories} from '../components/Stories';
import {OpenCarouselProps} from '../constants/types';

export const MainScreen = () => {
  const [swipedHorizontally, setSwipedHorizontally] = useState<boolean>(false);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);
  const [deckIdx, setDeckIdx] = useState<number>(0);
  const horizontalSwipe = useRef(new Animated.Value(0)).current;
  const verticalSwipe = useRef(new Animated.Value(0)).current;
  const indicatorAnim = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (evt, {dx, dy}) => {
      if (Math.abs(dx) > 5) {
        setSwipedHorizontally(true);
        return true;
      }

      if (dy > 5) {
        setSwipedHorizontally(false);
        return true;
      }

      return false;
    },

    onPanResponderGrant: () => {},

    onPanResponderMove: (e, {dx, dy}) => {
      if (swipedHorizontally) {
        horizontalSwipe.setValue(-dx);
      } else {
        verticalSwipe.setValue(dy);
      }
    },

    onPanResponderRelease: (e, {dx, dy}) => {},
  });

  const openCarousel = ({idx}: OpenCarouselProps) => {
    console.log('hello');
    setDeckIdx(idx);
    horizontalSwipe.setValue(idx * WIDTH);

    requestAnimationFrame(() => {
      LayoutAnimation.easeInEaseOut();
      setCarouselOpen(true);
      //   animateIndicator();
    });
  };

  return (
    <View style={styles.container}>
      <Bubbles openCarousel={openCarousel} />
        <Stories
        //   panResponder={panResponder}
        //   verticalSwipe={verticalSwipe}
        //   horizontalSwipe={horizontalSwipe}
        //   swipedHorizontally={swipedHorizontally}
        //   deckIdx={deckIdx}
        />
    </View>
  );
};
