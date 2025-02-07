import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../utils/ThemeUtil';

interface MiniHeaderProps {
  label: string;
}

const MiniHeader: FC<MiniHeaderProps> = ({ label }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 16,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: colors.primary
        }}
      >{label}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: colors.primary
        }}
      >
        View all
      </Text>
    </View>
  )
}

export default MiniHeader

const styles = StyleSheet.create({})