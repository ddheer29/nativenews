import React, { FC } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../utils/ThemeUtil';
import { useTheme } from '../context/ThemeContext';

interface category {
  id: number;
  title: string;
}

interface CategoriesCardProps {
  categories: category[];
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

const CategoriesCard: FC<CategoriesCardProps> = ({ categories, activeCategory, handleCategoryChange }) => {
  const { theme } = useTheme();
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((category, index) => {
          const isActive = category.title === activeCategory;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryChange(category.title)}
              style={styles.categoryButton}
            >
              <View
                style={[
                  styles.categoryContainer,
                  isActive ? [{ backgroundColor: theme.colors.primary }] : [{ backgroundColor: theme.colors.border }],
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isActive ? [{ color: '#fff', fontWeight: 'bold' }] : [{ color: theme.colors.text }],
                  ]}
                >
                  {category.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingRight: 20,
    flexDirection: 'row',
    gap: 16,
  },
  categoryButton: {
    alignItems: 'center',
  },
  categoryContainer: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  inactiveButton: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  darkButton: {
    backgroundColor: '#4B5563',
  },
  categoryText: {
    fontSize: hp(1.6),
    textTransform: 'capitalize',
  },
  activeText: {
    color: 'white',
  },
  inactiveText: {
    color: '#4B5563',
  },
  darkText: {
    color: '#9CA3AF',
  },
});

export default CategoriesCard;