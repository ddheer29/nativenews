import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
// import Carousal from 'react-native-snap-carousel';
import BreakingNewsCard from './BreakingNewsCard';
import { sizes } from '../utils/Theme';
import { navigate } from '../utils/navigationUtils';

interface BeakingNewsProps {
  label: string;
  data: any;
}

const BeakingNews: FC<BeakingNewsProps> = ({ label, data }) => {
  const handleClick = (item) => {
    navigate("NewsDetails", item);
  }
  return (
    <View>
      {/* <Carousal
        data={data}
        renderItem={({ item }) => (
          <BreakingNewsCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={sizes.width}
        itemWidth={sizes.width * 0.8}
        slideStyle={{ display: "flex", alignItems: "center" }}
      /> */}
    </View>
  )
}

export default BeakingNews

const styles = StyleSheet.create({})