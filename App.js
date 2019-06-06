import * as React from 'react';
import { View, Button, SafeAreaView, StatusBar, Platform } from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';

import MatchesScreen from './project/screens/MatchesScreen';
import TablesScreen from './project/screens/TablesScreen';
import ScorersScreen from './project/screens/ScorersScreen';
import NewsScreen from './project/screens/NewsScreen';
import SettingsScreen from "./project/screens/SettingsScreen";
import StatisticsScreen from "./project/screens/StatisticsScreen";
import HomeScreen from "./project/screens/HomeScreen";

const BottomNavigator = createBottomTabNavigator(
    {
        News: NewsScreen,
        Matches: MatchesScreen,
        Tables: TablesScreen,
        Scorers: ScorersScreen,
    }
);

const App = createStackNavigator({
    BottomNavigator: {
        screen: BottomNavigator,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#04386A',
            },
            headerTintColor: '#FFFFFF',
            title: 'Copa America 2019',
        },
    },
});

const MyApp = createDrawerNavigator({
    Home: { screen: App},
    HomePage: { screen: HomeScreen},
    News: { screen: NewsScreen},
    Matches: { screen: MatchesScreen},
    Table: { screen: TablesScreen},
    Statistics: { screen: StatisticsScreen},
    Settings: { screen: SettingsScreen},
});

//TOP TABS

// const TabScreen = createMaterialTopTabNavigator(
//     {
//         News: NewsScreen,
//         Matches: MatchesScreen,
//         Tables: TablesScreen,
//         Scorers: ScorersScreen,
//     },
//     {
//         tabBarPosition: 'top',
//         swipeEnabled: true,
//         animationEnabled: true,
//         tabBarOptions: {
//             activeTintColor: '#FFFFFF',
//             inactiveTintColor: '#F8F8F8',
//             style: {
//                 backgroundColor: '#633689',
//             },
//             labelStyle: {
//                 textAlign: 'center',
//             },
//             indicatorStyle: {
//                 borderBottomColor: '#87B56A',
//                 borderBottomWidth: 2,
//             },
//         },
//     }
// );
//
// const App = createStackNavigator({
//     TabScreen: {
//         screen: TabScreen,
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#633689',
//             },
//             headerTintColor: '#FFFFFF',
//             title: 'Copa America 2019',
//         },
//     },
// });
//

export default createAppContainer(MyApp);
