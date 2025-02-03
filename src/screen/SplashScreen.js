import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { resetAndNavigate } from '../utils/navigationUtils';

const SplashScreen = () => {
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
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 600,
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
        <Text>SplashScreen</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
