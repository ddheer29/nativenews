import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { FC, useState } from 'react'
import { colors, sizes } from '../utils/Theme'
import { BookmarkSquareIcon, ChevronLeftIcon, ShareIcon } from 'react-native-heroicons/outline'
import { goBack } from '../utils/navigationUtils'
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';

const NewsDetailsScreen: FC = () => {
  const colorScheme = useColorScheme();
  const { params: item } = useRoute();
  const [visible, setVisible] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const toggleBookmarkAndSave = () => { }


  return (
    <>
      <View style={styles.headerContainer}>
        <StatusBar barStyle={colorScheme === 'dark' ? 'light' : 'dark'} />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => goBack()}>
            <ChevronLeftIcon size={25} color="gray" strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconContainer}>
            <ShareIcon color="gray" size={25} strokeWidth={3} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={toggleBookmarkAndSave}>
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
    paddingTop: 40, // Equivalent to `pt-10`
    paddingBottom: 16, // Equivalent to `pb-4`
    backgroundColor: 'white',
  },
  iconContainer: {
    backgroundColor: '#F3F4F6', // Equivalent to `bg-gray-100`
    padding: 8, // Equivalent to `p-2`
    borderRadius: 999, // Equivalent to `rounded-full`
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999, // Equivalent to `rounded-full`
    backgroundColor: 'white',
    gap: 12, // Equivalent to `space-x-3`
  },
})