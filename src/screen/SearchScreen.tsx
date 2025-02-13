import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import NewsSection from '../components/NewsSection';
import { navigate } from '../utils/navigationUtils';
import { colors } from '../utils/ThemeUtil';
import { debounce } from 'lodash'
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';
import { apiKey } from '../utils/ApiKey';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../context/ThemeContext';
import NewsListSkeletion from '../components/skeletion/NewsListSkeletion';

const SearchScreen = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (query: string) => {
    if (query && query.length > 2) {
      setLoading(true);
      setResults([]);
      setSearchTerm(query);
      try {
        const res = await axios.get(`${apiBaseUrl}/everything?q=${query}&apiKey=${apiKey}`);
        console.log("🚀 ~ handleSearch ~ res", res.data)
        if (res.data && res.data.articles) {
          setResults(res.data.articles)
        }

      } catch (error) {
        console.log("🚀 ~ handleSearch ~ error:", error)
      } finally {
        setLoading(false);
      }
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <SafeAreaView />
      <View
        style={{
          marginHorizontal: 16,
          marginBottom: 12,
          marginTop: 12,
          flexDirection: 'row',
          padding: 8,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 12,
          backgroundColor: theme.colors.border,
        }}
      >
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder='Search for your news'
          placeholderTextColor={'gray'}
          style={{
            fontSize: 16,
            color: theme.colors.title,
            width: '90%',
            padding: 12,
            paddingVertical: 4
          }}
        />
        <TouchableOpacity onPress={() => navigate('HomeScreen')}
          hitSlop={10}
          style={{
            backgroundColor: colors.darkgray,
            position: 'absolute',
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            right: 8,
          }}
        >
          <XMarkIcon size={15} color={colors.black} strokeWidth={3} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 16,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(10),
            fontWeight: 'semibold',
            color: colors.darkgray1,
          }}
        >{results.length} Result found for <Text style={{ fontWeight: 'bold' }}>{searchTerm}</Text></Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: heightPercentageToDP(5),
        }}
      >
        {
          loading ? (
            <NewsListSkeletion />
          ) : (
            <NewsSection label="Search Results" data={results} />
          )
        }
      </ScrollView>
    </View >
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
