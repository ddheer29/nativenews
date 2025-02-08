import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import BreakingNewsCard from './BreakingNewsCard';
import { colors, sizes } from '../utils/ThemeUtil';
import { navigate } from '../utils/navigationUtils';
import { useTheme } from '../context/ThemeContext';

interface BeakingNewsProps {
  label: string;
  data: any;
}

let currentIndex = 0;

const BeakingNews: FC<BeakingNewsProps> = ({ label, data }) => {
  const { theme } = useTheme();
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClick = (item: any) => {
    navigate("NewsDetailsScreen", item);
  }

  const renderItem = ({ item }: { item: any }) => {
    console.log("🚀 ~ renderItem ~ item:", JSON.stringify(item, null, 2))
    return (
      <TouchableOpacity style={{ width: sizes.width, height: sizes.width * 0.6, alignItems: 'center' }}
        onPress={() => handleClick(item)}>
        <Image
          source={{ uri: item?.urlToImage || "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
          style={{
            width: '92%',
            height: '100%',
            borderRadius: 12,
          }}
          resizeMode="cover"
        />
        <View style={{ position: 'absolute', bottom: 0, padding: 10, width: '92%', backgroundColor: 'rgba(0,0,0,0.5)', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
          <Text
            style={{ color: theme.colors.title, fontSize: 14, fontWeight: 'bold' }}
            numberOfLines={2}
          >{item?.title}</Text>
          <Text
            style={{ color: theme.colors.text, fontSize: 12, marginTop: 4 }}
            numberOfLines={2}
          >
            {item?.description !== null ? item?.description : item?.content}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        ref={scrollViewRef}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={e => {
          let x = e?.nativeEvent?.contentOffset?.x;
          x = Number((x / sizes.width).toFixed(0))
          currentIndex = x
          setActiveIndex(x)
        }}
        scrollEventThrottle={16}
        getItemLayout={(item, index) => (
          { length: sizes.width, offset: sizes.width * index, index }
        )}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  )
}

export default BeakingNews

const styles = StyleSheet.create({})