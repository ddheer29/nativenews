import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { FC } from 'react'
import { sizes } from '../utils/ThemeUtil';

interface BreakingNewsCardProps {
  item: any;
  handleClick: (item: any) => void;
}

const BreakingNewsCard: FC<BreakingNewsCardProps> = ({ item, handleClick }) => {
  console.log("🚀 ~ item:", item)
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: item.urlToImage || "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
          style={{
            width: sizes.width * 0.8,
            height: sizes.height * 0.22,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 6,
          left: 4,
          justifyContent: 'flex-end',
          height: '80%'
        }}
      >
        <View>
          <View>
            <Text>
              {
                item.title.length > 60 ? item.title.slice(0, 58) + '...' : item.title.split(' - ')[0] || "N/A"
              }
            </Text>
          </View>
          <View>
            <Text>
              {
                item?.author?.length > 20 ? item?.author.slice(0, 20) + '...' : item?.author
              }
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BreakingNewsCard

const styles = StyleSheet.create({})