import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { formatDate } from '../utils/helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../utils/Theme';
import { BookmarkSquareIcon } from 'react-native-heroicons/outline';
import { navigate } from '../utils/navigationUtils';

interface NewsSectionProps {
  label: string;
  data: any[];
}

const NewsSection: FC<NewsSectionProps> = ({ label, data }) => {
  const [urlList, setUrlList] = useState<string[]>([])

  const handleClick = (item: any) => {
    navigate('NewsDetailsScreen', item)
  }

  const toggleBookmarkAndSave = (item: any, index: number) => {

  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          marginBottom: 16,
          marginHorizontal: 16,
        }}
        onPress={() => handleClick(item)}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20%',
            }}
          >
            <Image
              source={{
                uri:
                  item.urlToImage ||
                  "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{ width: hp(10), height: hp(10), borderRadius: 12 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              width: '70%',
              paddingLeft: 20,
              justifyContent: 'center',
            }}
          >
            {/* Author */}
            <Text
              style={{
                fontSize: RFValue(12),
                color: colors.darkGray141,
              }}
            >
              {item?.author?.length > 20
                ? item.author.slice(0, 20) + "..."
                : item.author}
            </Text>

            {/* Title */}
            <Text
              style={{
                fontSize: hp(1.7),
                fontWeight: 'bold',
                color: colors.black,
                textTransform: 'capitalize',
                maxWidth: '90%',
              }}
            >
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </Text>

            {/* Date */}
            <Text
              style={{
                fontSize: RFValue(10),
                color: colors.darkGray141,
              }}
            >
              {formatDate(item.publishedAt)}
            </Text>
          </View>

          <View
            style={{
              width: '10%',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => toggleBookmarkAndSave(item, index)}
            >
              <BookmarkSquareIcon
                color={"gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    const urls = data.map((item) => item.url)
    setUrlList(urls);
  }, [data])

  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}
    >
      <FlatList
        data={data}
        nestedScrollEnabled
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default NewsSection

const styles = StyleSheet.create({})