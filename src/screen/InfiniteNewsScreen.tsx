import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import InfiniteNewsCard from '../components/InfiniteNewsCard';
import newsData from '../utils/randomNewData.json';

const InfiniteNewsScreen = () => {
  const { theme } = useTheme();
  const [news, setNews] = useState<any[]>([]);

  const renderItem = ({ item, index }: any) => {
    return (
      <InfiniteNewsCard
        item={item}
      />
    )
  }

  useEffect(() => {
    setNews(newsData.articles)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        windowSize={2}
        disableIntervalMomentum={true}
        removeClippedSubviews
        initialNumToRender={1}
        onEndReachedThreshold={0.1}
        decelerationRate={'normal'}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  )
}

export default InfiniteNewsScreen

const styles = StyleSheet.create({})