import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface NewsSectionProps {
  label: string;
  data: any[];
}

const NewsSection: FC<NewsSectionProps> = ({ label, data }) => {
  return (
    <View>
      <Text>NewsSection</Text>
    </View>
  )
}

export default NewsSection

const styles = StyleSheet.create({})