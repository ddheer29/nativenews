import { Animated, Linking, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { resetAndNavigate } from '../utils/navigationUtils';
import { useTheme } from '../context/ThemeContext';

const SplashScreen: FC = () => {
  const { theme } = useTheme();
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
          toValue: 1.5,
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: theme.colors.title,
          }}
        >Native News</Text>
      </Animated.View>
      <View style={{ position: 'absolute', bottom: 40 }}>
        <Text style={{ color: theme.colors.text, fontSize: 12, }}>
          Made by -{" "}<Text style={{
            color: theme.colors.primary,
            fontWeight: 'bold',
          }}
            onPress={() => Linking.openURL('https://github.com/ddheer29')}
          >Divyang Dheer</Text>
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
