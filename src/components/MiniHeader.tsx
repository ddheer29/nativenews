import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../context/ThemeContext';

interface MiniHeaderProps {
  label: string;
}

const MiniHeader: FC<MiniHeaderProps> = ({ label }) => {
  const { theme } = useTheme();
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
          color: theme.colors.secondary
        }}
      >{label}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: theme.colors.secondary
        }}
      >
        View all
      </Text>
    </View>
  )
}

export default MiniHeader

const styles = StyleSheet.create({})