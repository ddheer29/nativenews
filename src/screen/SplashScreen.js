import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {resetAndNavigate} from '../utils/navigationUtils';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate('TabNavigator');
    }, 1000);
  });

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
