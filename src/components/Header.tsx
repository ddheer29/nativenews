import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { colors } from '../utils/ThemeUtil'
import { navigate } from '../utils/navigationUtils'

const Header: React.FC = () => {


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
            color: colors.primary,
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
        <Switch />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})