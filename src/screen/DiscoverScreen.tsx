import { FlatList, Image, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { BookmarkSquareIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { navigate } from '../utils/navigationUtils';
import { colors, sizes } from '../utils/ThemeUtil';
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import CategoriesCard from '../components/CategoriesCard';
import { categories } from '../utils/constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { formatDate } from '../utils/helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../context/ThemeContext';

const DiscoverScreen: FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("business");
  const [discovernews, setDiscovernews] = useState([]);
  const [discoverLoading, setDiscoverLoading] = useState<Boolean>(false);
  const [urlList, setUrlList] = useState<string[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setDiscovernews([]);
  }

  const fetchDiscoverNews = async (activeCategory: string) => {
    try {
      setDiscoverLoading(true);
      const res = await axios.get(`${apiBaseUrl}/top-headlines?country=us&category=${activeCategory}&apiKey=${apiKey}`);
      setDiscoverLoading(false);
      const filteredNews = res.data.articles.filter(
        (article: any) => article.title !== "[Removed]"
      )
      setDiscovernews(filteredNews)
    } catch (error) {
      console.log("🚀 ~ fetchDiscoverNews ~ error:", error)
    }
  }


  const handleClick = (item: any) => {
    navigate('NewsDetailsScreen', item)
  }

  const toggleBookmarkAndSave = (item: any, index: number) => {

  }


  const renderHeader = () => {
    return (
      <>
        {/* header */}
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 18,
            justifyContent: 'space-between',
            marginTop: 8,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: theme.colors.primary,
              textTransform: 'uppercase',
            }}
          >Discover</Text>
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.secondary,
              marginTop: 8,
            }}
          >News from all over the world 🌎</Text>
        </View>

        {/* search */}
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 20,
            flexDirection: 'row',
            padding: 8,
            paddingVertical: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.colors.searchBar,
            borderRadius: 999
          }}
        >
          <TouchableOpacity style={{ paddingLeft: 8 }}>
            <MagnifyingGlassIcon size={25} color='gray' />
          </TouchableOpacity>
          <TextInput
            onPressIn={() => navigate('SearchScreen')}
            placeholder='Search for news'
            placeholderTextColor={'gray'}
            style={{
              paddingLeft: 16,
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              color: colors.black,
              letterSpacing: 1
            }}
          />
        </View>

        {/* categories */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
          }}
        >
          <CategoriesCard
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </View>
        <View
          style={{
            margin: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: theme.colors.secondary,
            }}
          >
            Discover
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: theme.colors.secondary,
            }}
          >
            View All
          </Text>
        </View>
      </>
    )
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          marginBottom: 16,
          marginHorizontal: 16,
          backgroundColor: theme.colors.card,
          padding: 12,
          borderRadius: 12,
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
                color: theme.colors.text,
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
                color: theme.colors.title,
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
                color: theme.colors.contentDescription,
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

  const renderEmptyComponent = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: sizes.width * 0.4,
          }}
        >
          <Text style={{
            color: colors.darkgray,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '80%',
          }}>
            Oops no news found
          </Text>
        </View>
      </>
    )
  }

  useEffect(() => {
    const urls = discovernews.map((item) => item.url)
    setUrlList(urls);
  }, [discovernews])

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDiscoverNews(activeCategory);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchDiscoverNews(activeCategory);
  }, [activeCategory])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 32,
        backgroundColor: theme.background,
      }}
    >
      <StatusBar />
      <FlatList
        data={discovernews}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[theme.colors.primary, theme.colors.notification]}
            tintColor={theme.colors.primary}
            progressBackgroundColor={theme.colors.card}
          />
        }
      />
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
