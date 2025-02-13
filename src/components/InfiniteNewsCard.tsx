import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { sizes } from '../utils/ThemeUtil';
import { formatPublishedDate } from '../utils/helper';

interface InfiniteNewsCardProps {
  item: any;
}

const InfiniteNewsCard: FC<InfiniteNewsCardProps> = ({ item }) => {
  return (
    <View style={{ flex: 1, height: sizes.height * 0.833, backgroundColor: 'gold',borderWidth: 1, paddingHorizontal: 16, paddingVertical: 32 }}>
      <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 16, overflow: 'hidden' }}>
        <View>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ width: sizes.width, height: sizes.height * 0.32 }}
        />
        <View style={{ padding: 16 }}>
          <Text
          style={{ fontSize: 12, color: 'gray' }}
          >{formatPublishedDate(item?.publishedAt)}</Text>
          <Text
          style={{ fontSize: 24, fontWeight: 'bold' }}
          >{item?.title}</Text>
          <Text
          style={{ fontSize: 14, marginTop: 8 }}
          >{item?.description}</Text>
        </View>
        </View>
      </View>
    </View>
  )
}

export default InfiniteNewsCard

const styles = StyleSheet.create({})