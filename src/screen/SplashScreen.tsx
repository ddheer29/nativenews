import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { resetAndNavigate } from '../utils/navigationUtils';

const SplashScreen: FC = () => {
  const [isStop] = useState(false);
  const scale = new Animated.Value(1);

  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate('TabNavigator');
    }, 1500);
  });

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.8,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        })
      ])
    )
    if (!isStop) {
      animation.start();
    }

    return () => animation.stop();
  }, [isStop])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text>Native News</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
