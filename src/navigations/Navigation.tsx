import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ICONS, SCREENS } from '../constant/constant'
import HomePage from '../screens/home/HomePage'
import SplashScreen from '../screens/splashscreen/SplashScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchPage from '../screens/search/SearchPage'
import BookMarkPage from '../screens/bookmark/BookMarkPage'
import SettingPage from '../screens/setting/SettingPage'
import { TabIcon } from '../components/TabIcon'
import DetailScreen from '../screens/detail/Detail'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const MainNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name={SCREENS.TAB} component={TabNavigation} />
        <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
        <Stack.Screen name={SCREENS.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
)

export const TabNavigation = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
                height: 56,
                bottom: 0,
                left: 0,
                right: 0
            }
        }}
    >
        <Tab.Screen name={SCREENS.HOME} component={HomePage} 
            options={{tabBarIcon: ({focused}) => <TabIcon icon={ICONS.home} focused={focused}/>}}
        />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchPage} 
            options={{tabBarIcon: ({focused}) => <TabIcon icon={ICONS.search} focused={focused}/>}}
        />
        <Tab.Screen name={SCREENS.BOOKMARK} component={BookMarkPage} 
            options={{tabBarIcon: ({focused}) => <TabIcon icon={ICONS.bookmark} focused={focused}/>}}
        />
        <Tab.Screen name={SCREENS.SETTING} component={SettingPage} 
            options={{tabBarIcon: ({focused}) => <TabIcon icon={ICONS.setting} focused={focused}/>}}
        />
    </Tab.Navigator>
)