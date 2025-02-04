import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { colors } from '../utils/Theme'

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
            color: colors.switchGreen,
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
        <TouchableOpacity>
          <MagnifyingGlassIcon
            size={25}
            strokeWidth={2}
            color={colors.switchGreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})