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

import MatchesScreen from './project/screens/MatchesScreen';
import TablesScreen from './project/screens/TablesScreen';
import ScorersScreen from './project/screens/ScorersScreen';
import NewsScreen from './project/screens/NewsScreen';
import SettingsScreen from "./project/screens/SettingsScreen";
import StatisticsScreen from "./project/screens/StatisticsScreen";
import HomeScreen from "./project/screens/HomeScreen";

import Hamburger from './project/img/hamburger.png';

const BottomNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        News: NewsScreen,
        Matches: MatchesScreen,
        Tables: TablesScreen,
    }
);

const App = createStackNavigator({
    BottomNavigator: {
        screen: BottomNavigator,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#0055A6',
            },
            headerTintColor: '#FFFFFF',
            title: 'Copa America 2019',
            headerLeft: <TouchableOpacity  onPress={()=> navigation.openDrawer()}><Image  source={{uri: "https://img.icons8.com/color/48/ffffff/menu.png"}}
                                                                                          resizeMode="contain"
                                                                                          style={{ width: 24, height: 24 }}
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
//     {
//     contentComponent: (props) => (
//         <View style={{height: "auto", backgroundColor: "#f77"}}>
//             <View style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text style={{fontSize: 32}}>LOGO</Text>
//             </View>
//         </View>
// )
);


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
