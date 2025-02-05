import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/navigationUtils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import DiscoverScreen from '../screen/DiscoverScreen';
import SaveArticlesScreen from '../screen/SaveArticlesScreen';
import SearchScreen from '../screen/SearchScreen';
import NewsSpecificScreen from '../screen/NewsSpecificScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
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

            const customizeSize = RFValue(18);
            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                // style={{color: 'green'}}
                color={focused ? 'green' : 'gray'}
              />
            );
          },
        })}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="SaveArticlesScreen" component={SaveArticlesScreen} />
        <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
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
          name="NewsSpecificScreen"
          component={NewsSpecificScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
