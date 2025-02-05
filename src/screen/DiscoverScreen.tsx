import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { navigate } from '../utils/navigationUtils';
import Loading from '../components/Loading';
import { colors } from '../utils/Theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import NewsSection from '../components/NewsSection';
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import CategoriesCard from '../components/CategoriesCard';
import { categories } from '../utils/constants';

const DiscoverScreen: FC = () => {

  const [activeCategory, setActiveCategory] = useState<string>("business");
  const [discovernews, setDiscovernews] = useState([]);
  const [discoverLoading, setDiscoverLoading] = useState<Boolean>(false);

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

  useEffect(() => {
    fetchDiscoverNews(activeCategory);
  }, [activeCategory])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 32,
        backgroundColor: '#fff'
      }}
    >
      <StatusBar barStyle={'dark'} />
      <View>
        {/* header */}
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 24,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              fontSize: 32,
            }}
          >Discover</Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.darkCapsule
            }}
          >News from all over the world 🌎</Text>
        </View>

        {/* search */}
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 32,
            flexDirection: 'row',
            padding: 8,
            paddingVertical: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.lightGray8,
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
            height: '100%',
          }}
        >
          {/* header title */}
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
                color: 'black',
              }}
            >
              Discover
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#065F46',
              }}
            >
              View All
            </Text>
          </View>

          {
            discoverLoading ? <Loading size='small' color={colors.darkCapsule} /> : (
              <ScrollView contentContainerStyle={{
                paddingBottom: heightPercentageToDP(70)
              }}>
                <NewsSection label="Discovery" data={discovernews} />
              </ScrollView>
            )
          }
        </View>

      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
