import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { sizes } from '../utils/ThemeUtil';

interface InfiniteNewsCardProps {
  item: any;
}

const InfiniteNewsCard: FC<InfiniteNewsCardProps> = ({ item }) => {
  return (
    <View style={{ flex: 1, height: sizes.height }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{ uri: item.urlToImage || "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
          style={{
            width: sizes.width * 0.98,
            height: sizes.height * 0.22,
            borderRadius: 10,
            backgroundColor: 'red'
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  )
}

export default InfiniteNewsCard

const styles = StyleSheet.create({})