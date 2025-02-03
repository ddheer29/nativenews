import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Header: React.FC = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme()

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
        <Text className='text-2xl text-green-800 uppercase dark:text-white'>Header</Text>
      </View>
      <View className='flex-row space-x-4 rounded-full justify-center items-center'>
        <Switch />
        <Text>Dark Mode</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})