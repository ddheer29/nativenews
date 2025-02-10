import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface InfiniteNewsCardProps {
  data: any;
}

const InfiniteNewsCard: FC<InfiniteNewsCardProps> = ({ data }) => {
  return (
    <View>
      <Text>InfiniteNewsCard</Text>
    </View>
  )
}

export default InfiniteNewsCard

const styles = StyleSheet.create({})