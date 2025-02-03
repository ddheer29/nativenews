import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface MiniHeaderProps {
  label: string;
}

const MiniHeader: FC<MiniHeaderProps> = ({ label }) => {
  return (
    <View className="flex-row justify-between items-center px-4 my-4">
      <Text
        className="text-xl text-green-800 dark:text-white"
      >{label}</Text>
      <Text className="text-base text-green-800 dark:text-neutral-300">
        View all
      </Text>
    </View>
  )
}

export default MiniHeader

const styles = StyleSheet.create({})