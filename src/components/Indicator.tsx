import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from './styles/indicatorStyles';


interface Props {
    index: number;
    currentIndex: number;
    barWidth: Animated.Value
}

export const Indicator: React.FC<Props> = ({ index, currentIndex, barWidth }) => {
    return (
        <View key={index} style={[styles.indicatorContainer, index < currentIndex ? styles.indicatorContainerActive : styles.indicatorContainerInactive]}>
            {currentIndex === index && <Animated.View style={[{
                flex: currentIndex === index ? barWidth : 1
            }, styles.activityIndicator]} />}
        </View>
    )
}