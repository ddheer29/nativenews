import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/navigationUtils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import DiscoverScreen from '../screen/DiscoverScreen';
import SaveArticlesScreen from '../screen/SaveArticlesScreen';
import SearchScreen from '../screen/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import NewsDetailsScreen from '../screen/NewsDetailsScreen';
import {useTheme} from '../context/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {theme} = useTheme();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = 'home';
            } else if (route.name === 'SearchScreen') {
              iconName = 'search';
            } else if (route.name === 'SaveArticlesScreen') {
              iconName = 'bookmarks-outline';
            } else if (route.name === 'DiscoverScreen') {
              iconName = 'earth';
            }

            const customizeSize = RFValue(20);
            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                // style={{color: 'green'}}
                color={focused ? theme.colors.primary : 'gray'}
              />
            );
          },
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="SaveArticlesScreen"
          component={SaveArticlesScreen}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="DiscoverScreen"
          component={DiscoverScreen}
          options={{
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="NewsDetailsScreen"
          component={NewsDetailsScreen}
          options={{
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontFamily: theme.fonts.regular,
              color: theme.colors.text,
            },
            headerStyle: {backgroundColor: theme.colors.card},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
