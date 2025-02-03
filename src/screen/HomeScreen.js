import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'nativewind';

const HomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [breakingNews, setBreakingNews] = useState([]);
  const [recommandedNews, setRecommandedNews] = useState([]);
  const [breakingNewsLoading, setBreakingNewsLoading] = useState(false);
  const [resommandedNewsLoading, setResommandedNewsLoading] = useState(false);


  const getBreakingNews = async () => {
    try {

    } catch (error) {
      console.log('Error in getBreakingNews', error);
    }
  }

  const getRecommandedNews = async () => {
    try {

    } catch (error) {
      console.log('Error in getRecommandedNews', error);
    }
  }

  useEffect(() => {
    getBreakingNews();
    getRecommandedNews();
  }, []);


  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
