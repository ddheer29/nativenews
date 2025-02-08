import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 16,
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: theme.colors.primary,
            textTransform: 'uppercase',
          }}
        >Header</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Switch
          value={theme.dark}
          onValueChange={toggleTheme}
          thumbColor={theme.colors.primary}
          trackColor={{
            false: '#DADADA',
            true: '#333333',
          }}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})