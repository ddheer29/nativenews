import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../context/ThemeContext';

interface LoadingProps {
  size?: string;
}

const Loading: FC<LoadingProps> = ({ size }) => {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={theme.colors.primary} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})
