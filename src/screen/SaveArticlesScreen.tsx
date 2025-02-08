import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SaveArticlesScreen = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 32,
        backgroundColor: theme.background,
      }}
    >
      <Text>SaveArticlesScreen</Text>
    </SafeAreaView>
  );
};

export default SaveArticlesScreen;

const styles = StyleSheet.create({});
