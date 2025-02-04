import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import BreakingNewsCard from './BreakingNewsCard';
import { sizes } from '../utils/Theme';
import { navigate } from '../utils/navigationUtils';
import Carousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";

interface BeakingNewsProps {
  label: string;
  data: any;
}

const BeakingNews: FC<BeakingNewsProps> = ({ label, data }) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const handleClick = (item: any) => {
    navigate("NewsDetails", item);
  }
  return (
    <View>
      <Carousel
        ref={ref}
        width={sizes.width}
        height={sizes.width / 2}
        data={data}
        renderItem={({ item }) => (
          <BreakingNewsCard
            item={item}
            handleClick={handleClick}
          />
        )}
      />
    </View>
  )
}

export default BeakingNews

const styles = StyleSheet.create({})