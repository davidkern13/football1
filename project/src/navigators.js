import * as React from 'react';
import {View, Text, Button, SafeAreaView, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    DrawerActions
} from 'react-navigation';

import MatchesScreen from '../screens/MatchesScreen';
import TablesScreen from '../screens/TablesScreen';
import ScorersScreen from '../screens/ScorersScreen';
import NewsScreen from '../screens/NewsScreen';
import SettingsScreen from "../screens/SettingsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import HomeScreen from "../screens/HomeScreen";

// import Hamburger from './project/img/hamburger.png';

const BottomNavigator = createBottomTabNavigator(
    {
        Matches: MatchesScreen,
        News: NewsScreen,
        Tables: TablesScreen,
        StatisticsScreen: StatisticsScreen,
    }
);

const App = createStackNavigator({
    BottomNavigator: {
        screen: BottomNavigator,
        navigationOptions: ({ navigation }) => ({
            // headerStyle: {
            //     backgroundColor: '#0055A6',
            // },
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerTintColor: '#FFFFFF',
            title: 'Copa America 2019',
            headerLeft: <TouchableOpacity  onPress={()=> navigation.openDrawer()}><Image  source={{uri: "https://img.icons8.com/color/48/ffffff/menu.png"}}
                                                                                          resizeMode="contain"
                                                                                          style={{ width: 24, height: 24, left: 15  }}
            /></TouchableOpacity>
        })
    },
});



const MyApp = createDrawerNavigator({
        Home: {
            screen: App,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        News: {
            screen: NewsScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        Matches: {
            screen: MatchesScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        Table: {
            screen: TablesScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        Scorers: {
            screen: ScorersScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        Statistics: {
            screen: StatisticsScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
    }
);

// export default createAppContainer(MyApp);
export const AppNavigator = createAppContainer(MyApp);