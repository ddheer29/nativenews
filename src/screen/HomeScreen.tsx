import { FlatList, Image, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import axios from 'axios';
import MiniHeader from '../components/MiniHeader';
import BreakingNews from '../components/BreakingNews';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, sizes } from '../utils/ThemeUtil';
import { RFValue } from 'react-native-responsive-fontsize';
import { BookmarkSquareIcon } from 'react-native-heroicons/outline';
import { navigate } from '../utils/navigationUtils';
import { formatDate } from '../utils/helper';
import { useTheme } from '../context/ThemeContext';

const HomeScreen: FC = () => {
  const { theme } = useTheme();
  const [breakingNews, setBreakingNews] = useState<any[]>([]);
  const [recommandedNews, setRecommandedNews] = useState<any[]>([]);
  const [breakingNewsLoading, setBreakingNewsLoading] = useState<boolean>(false);
  const [recommendedNewsLoading, setrecommendedNewsLoading] = useState<boolean>(false);
  const [urlList, setUrlList] = useState<string[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false);


  const getBreakingNews = async () => {
    try {
      setBreakingNewsLoading(true);
      const res = await axios.get(
        `${apiBaseUrl}/top-headlines?country=us&apiKey=${apiKey}`,
      );
      setBreakingNewsLoading(false);
      setBreakingNews(res.data.articles);
    } catch (error) {
      console.log('Error in getBreakingNews', error);
    }
  };

  const getRecommandedNews = async () => {
    try {
      setrecommendedNewsLoading(true);
      const res = await axios.get(
        `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${apiKey}`,
      );
      setrecommendedNewsLoading(false);
      setRecommandedNews(res.data.articles);
    } catch (error) {
      console.log('Error in getRecommandedNews', error);
    }
  };


  const handleClick = (item: any) => {
    navigate('NewsDetailsScreen', item)
  }

  const toggleBookmarkAndSave = (item: any, index: number) => {

  }


  const renderHeader = () => {
    return (
      <>
        <Header />
        {
          breakingNewsLoading ? (
            <Loading />
          ) : (
            <View>
              <MiniHeader label={'Breaking News'} />
              <BreakingNews label={'Breaking News'} data={breakingNews} />
            </View>
          )
        }
        <MiniHeader
          label='Recommended News'
        />
      </>
    )
  }

  const renderItem = ({ item, index }: { item: any, index: number }) => {
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

  const fetchNews = async () => {
    setRefreshing(true); // Start refreshing
    await Promise.all([getBreakingNews(), getRecommandedNews()]);
    setRefreshing(false); // Stop refreshing
  };

  useEffect(() => {
    fetchNews()
  }, []);

  useEffect(() => {
    const urls = recommandedNews.map((item) => item.url)
    setUrlList(urls);
  }, [recommandedNews])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={{ colors: theme.colors.text }} />
      <FlatList
        data={recommandedNews}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchNews}
            colors={[theme.colors.primary, theme.colors.notification]} // Primary and notification color for Android
            tintColor={theme.colors.primary} // Primary color for iOS
            progressBackgroundColor={theme.colors.card} // Background color to match the theme
          />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
