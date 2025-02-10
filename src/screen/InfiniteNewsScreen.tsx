import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import InfiniteNewsCard from '../components/InfiniteNewsCard';

const InfiniteNewsScreen = () => {
  const { theme } = useTheme();
  const [news, setNews] = useState<any[]>([]);

  const renderItem = ({ item, index }: any) => {
    return (
      <InfiniteNewsCard
        data={item}
      />
    )
  }

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default InfiniteNewsScreen

const styles = StyleSheet.create({})