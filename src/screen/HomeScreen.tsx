import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import axios from 'axios';
import MiniHeader from '../components/MiniHeader';
import BreakingNews from '../components/BreakingNews';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NewsSection from '../components/NewsSection';

const HomeScreen: FC = () => {
  const [breakingNews, setBreakingNews] = useState<any[]>([]);
  const [recommandedNews, setRecommandedNews] = useState<any[]>([]);
  const [breakingNewsLoading, setBreakingNewsLoading] = useState<Boolean>(false);
  const [recommendedNewsLoading, setrecommendedNewsLoading] = useState<Boolean>(false);

  const getBreakingNews = async () => {
    console.log('calling getBreakingNews');
    try {
      setBreakingNewsLoading(true);
      console.log(`${apiBaseUrl}/top-headlines?country=in&apiKey=${apiKey}`);
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
    console.log('calling getRecommandedNews');
    try {
      setrecommendedNewsLoading(true);
      const res = await axios.get(
        `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${apiKey}`,
      );
      console.log("🚀 ~ getRecommandedNews ~ res:", JSON.stringify(res.data, null, 2))
      setrecommendedNewsLoading(false);
      setRecommandedNews(res.data.articles);
    } catch (error) {
      console.log('Error in getRecommandedNews', error);
    }
  };

  useEffect(() => {
    getBreakingNews();
    getRecommandedNews();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar />
      <Header />
      {
        breakingNewsLoading ? (
          <Loading />
        ) : (
          <View>
            <MiniHeader label={'Breaking News'} />
            {/* <BreakingNews label={'Breaking News'} data={breakingNews} /> */}
          </View>
        )
      }
      <View>
        <MiniHeader
          label='Recommended News'
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: hp(80),
          }}
        >
          {
            recommendedNewsLoading ? (
              <Loading />
            ) : (
              <NewsSection
                label='Recommended News'
                data={recommandedNews}
              />
            )
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
