import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface LoadingProps {
  size?: string;
  color?: string;
}

const Loading: FC<LoadingProps> = ({ size, color }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})
