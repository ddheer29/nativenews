import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { FC, useState } from 'react'
import { colors, isIOS, sizes } from '../utils/ThemeUtil'
import { BookmarkSquareIcon, ChevronLeftIcon, ShareIcon } from 'react-native-heroicons/outline'
import { goBack } from '../utils/navigationUtils'
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import { useTheme } from '../context/ThemeContext'

const NewsDetailsScreen: FC = () => {
  const { theme } = useTheme();
  const { params: item } = useRoute();
  const [visible, setVisible] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const toggleBookmarkAndSave = () => { }


  return (
    <>
      <View style={[styles.headerContainer, { backgroundColor: theme.background }]}>
        {/* <StatusBar barStyle={colorScheme === 'dark' ? 'light' : 'dark'} /> */}
        <View style={[styles.iconContainer, { backgroundColor: theme.colors.searchBar }]}>
          <TouchableOpacity onPress={() => goBack()}>
            <ChevronLeftIcon size={25} color="gray" strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View style={[styles.iconGroup]}>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: theme.colors.searchBar }]}>
            <ShareIcon color="gray" size={25} strokeWidth={3} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: theme.colors.searchBar }]} onPress={toggleBookmarkAndSave}>
            <BookmarkSquareIcon color={isBookMarked ? 'green' : 'gray'} size={25} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </View>

      <WebView
        source={{ uri: item?.url }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
      />

      {visible && (
        <ActivityIndicator
          size="large"
          color={colors.darkCapsule}
          style={{
            position: 'absolute',
            top: sizes.height / 2,
            left: sizes.width / 2.3,
          }}
        />
      )}
    </>
  )
}

export default NewsDetailsScreen

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // Equivalent to `px-4`
    paddingTop: isIOS ? 60 : 30, // Equivalent to `pt-10`
    paddingBottom: 16, // Equivalent to `pb-4`
  },
  iconContainer: {
    // backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    gap: 12,
  },
})