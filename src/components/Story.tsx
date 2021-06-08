import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable, Animated, Image, Dimensions, StyleSheet, GestureResponderEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';

import { mockStories } from '../constants/storiesMockData';
import { Indicator } from './Indicator';
import { styles } from './styles/storyStyles';

const { width } = Dimensions.get('window');

interface Props {
  display: boolean
}

export const Story: React.FC<Props> = ({ display }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const barWidth = useState(new Animated.Value(0))[0];


  const onPressOut = (event: GestureResponderEvent) => {
    if (paused) {
      play();
    }
    else {
      const direction = event.nativeEvent.locationX < width / 2 ? -1 : 1
      setCurrentIndex(prevState => prevState + direction);
      animateIndicator();
    }
  }

  const animation = useCallback(() => {
    return Animated.timing(barWidth, {
      toValue: 1,
      duration: mockStories[currentStoryIndex]?.stories[currentIndex]?.duration,
      useNativeDriver: false
    })
  }, [currentIndex, currentStoryIndex])

  const getDuration = useCallback(() => {
    //@ts-ignore
    return mockStories[currentStoryIndex]?.stories[currentIndex]?.duration * (1 - barWidth._value)
  }, [currentStoryIndex, currentIndex])

  const animateIndicator = (reset = true) => {
    if (reset)
      barWidth.setValue(0);
    requestAnimationFrame(() => {
      Animated.timing(barWidth, {
        toValue: 1,
        duration: getDuration(),
        useNativeDriver: false
      }).start(({ finished }) => {
        if (finished) {
          if (paused) {
            setCurrentIndex(prevState => prevState + 1);
            animateIndicator();
          }
          else {
            onNextItem();
          }
        }
      });
    })
  }

  useEffect(() => {
    if (display)
      animateIndicator();
  }, [display])

  const pause = useCallback(() => {
    setPaused(true);
    animation().stop();
  }, [animation])

  const play = useCallback(() => {
    if (paused) {
      setPaused(false);
      animateIndicator(false)
    }
    else {
      animateIndicator(true);
    }
  }, [animateIndicator, paused]);

  const onNextItem = useCallback(() => {
    if (paused) {
      return play();
    }
    animateIndicator();
    setCurrentIndex(prevState => prevState + 1);
  }, [paused, animateIndicator, play])


  useEffect(() => {
    if (currentIndex === mockStories[currentStoryIndex]?.stories?.length) {
      setCurrentIndex(0);
      setPaused(false);
      barWidth.setValue(0);
      setCurrentStoryIndex(prevState => prevState + 1);
    }
  }, [currentIndex])

  if (currentStoryIndex === mockStories.length) {
    return null;
  }
  else if (mockStories[currentStoryIndex]?.stories[currentIndex]?.image)
    return (
      <SafeAreaView style={display ? styles.containerOpen : styles.containerClosed}>
        {!paused &&
          <View style={styles.activityIndicatorContainer}>
            {mockStories[currentStoryIndex].stories.map((item, index) => {
              return (
                <Indicator index={index} currentIndex={currentIndex} barWidth={barWidth} />
              )
            })}
          </View>}
        <Pressable
          style={styles.storiesContainer}
          onLongPress={pause}
          onPressOut={onPressOut}>
          {mockStories[currentStoryIndex].stories[currentIndex].type === 'video' ?
            display && <Video paused={paused} style={StyleSheet.absoluteFillObject} source={mockStories[currentStoryIndex].stories[currentIndex].image} onLoad={(data) => console.log(data, 'dataonload')} /> :
            <Image style={styles.image} source={{ uri: mockStories[currentStoryIndex].stories[currentIndex].image }} />}
        </Pressable>
      </SafeAreaView>
    )
  return <View />
}