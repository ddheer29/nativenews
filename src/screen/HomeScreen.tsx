import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import axios from 'axios';
import MiniHeader from '../components/MiniHeader';
import BreakingNews from '../components/BreakingNews';
import Header from '../components/Header';

const HomeScreen = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [recommandedNews, setRecommandedNews] = useState([]);
  const [breakingNewsLoading, setBreakingNewsLoading] = useState(false);
  const [recommendedNewsLoading, setrecommendedNewsLoading] = useState(false);

  const getBreakingNews = async () => {
    console.log('calling getBreakingNews');
    try {
      setBreakingNewsLoading(true);
      console.log(`${apiBaseUrl}/top-headlines?country=in&apiKey=${apiKey}`);
      const res = await axios.get(
        `${apiBaseUrl}/top-headlines?country=in&apiKey=${apiKey}`,
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
        `${apiBaseUrl}/top-headlines?country=in&category=business&apiKey=${apiKey}`,
      );
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
      <View>
        <MiniHeader label={'Breaking News'} />
        <BreakingNews label={'Breaking News'} data={breakingNews} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
