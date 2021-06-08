import React, { useState, useRef, useEffect } from 'react';
import { View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles/mainScreenStyles';
import { Bubbles } from '../components/Bubbles';
import { roots } from '../navigation/roots';
import { Story } from '../components/Story';

export const MainScreen = () => {
  const navigation = useNavigation();
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);

  const openCarousel = () => {
    requestAnimationFrame(() => {
      LayoutAnimation.easeInEaseOut();
      setCarouselOpen(true);
    });
  };


  useEffect(() => {
    if (Platform.OS == 'android')
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }, [])

  return (
    <View style={styles.container}>
      <Bubbles openStories={() => requestAnimationFrame(() => {
        LayoutAnimation.easeInEaseOut();
        setCarouselOpen(true);
      })} />
      <Story display={carouselOpen} />
    </View>
  );
};
