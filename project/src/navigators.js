import * as React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, StatusBar, Platform, Image, TouchableOpacity, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;
var height =  Dimensions.get('window').height;

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
import ScorersScreen from '../components/scorers/Scorer';
import NewsScreen from '../screens/NewsScreen';
import SettingsScreen from "../screens/SettingsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import HomeScreen from "../screens/HomeScreen";

// import Hamburger from './project/img/hamburger.png';

const BottomNavigator = createBottomTabNavigator(
    {
        Matches: {
            screen:MatchesScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    // <TouchableOpacity  onPress={()=> navigation.openDrawer()} >
                        <Image  source={require('../img/Matches.png')} resizeMode="contain" style={styles.logoSize}/>
                    // </TouchableOpacity>
                )
              },
        },
        News: {
            screen:NewsScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    // <TouchableOpacity  onPress={()=> navigation.openDrawer()} >
                        <Image  source={require('../img/News.png')} resizeMode="contain" style={styles.logoSize}/>
                    // </TouchableOpacity>
                )
              },
        },
        Tables: {
            screen:TablesScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    // <TouchableOpacity  onPress={()=> navigation.openDrawer()} >
                        <Image  source={require('../img/Tables.png')} resizeMode="contain" style={styles.logoSize}/>
                    // </TouchableOpacity> */}
                )
              },
            },
        Statistics: {
            screen:StatisticsScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    // <TouchableOpacity  onPress={()=> navigation.openDrawer()} >
                        <Image source={require('../img/Scorers.png')} resizeMode="contain" style={styles.logoSize }/>
                    // </TouchableOpacity>
                )
              },
    }
}
);

const App = createStackNavigator({
    BottomNavigator: {
        screen: BottomNavigator,
        navigationOptions: ({ navigation }) => ({
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerTintColor: '#FFFFFF',
            // title: 'Copa America 2019',
            headerLeft:
                <View style={{
                    width:width,
                    display:'flex',
                    flexDirection: "row",
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                        <TouchableOpacity  onPress={()=> navigation.openDrawer()} style={{position:'absolute',left:10}}>
                            <Image  source={{uri: "https://img.icons8.com/color/48/ffffff/menu.png"}} resizeMode="contain" style={styles.logoSize}/>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=> navigation.openDrawer()}>
                            <Image  source={{uri: "http://www.up2me.co.il/images/85296732.png?fbclid=IwAR3WVmuh6K4l3HB4v0Y0dU-fwtPwV2_tqXeWzR8V42qsoxxnn3uL_siJ0vM"}} 
                                    resizeMode="contain" 
                                    style={{ width: 105, height: 50 }}/>
                        </TouchableOpacity>

                    {/* </View> */}
                </View>



        })
    },
});



const MyApp = createDrawerNavigator({
        Home: {
            screen: App,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={styles.logoSize}
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
                        style={styles.logoSize}
                        source={require('../img/News.png')}
                    />
                ),
            },
        },
        Matches: {
            screen: MatchesScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={styles.logoSize}
                        source={require('../img/Matches.png')}
                    />
                ),
            },
        },
        Table: {
            screen: TablesScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={styles.logoSize}
                        source={require('../img/Tables.png')}
                    />
                ),
            },
        },
        Scorers: {
            screen: ScorersScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={styles.logoSize}
                        source={require('../img/Scorers.png')}
                    />
                ),
            },
        },
        Statistics: {
            screen: StatisticsScreen,
            navigationOptions: {
                drawerIcon: (
                    <Image
                        style={styles.logoSize}
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
                        style={styles.logoSize}
                        source={{uri: "https://img.icons8.com/material/100/000000/home-page.png"}}
                    />
                ),
            },
        },
    },
    // {
    //     shifting: false,
    //     backBehavior: 'initialRoute',
    //     activeColor: 'white',
    //     tabBarColor: 'blue',
    //     inactiveTintColor: 'black',
    //     barStyle: { backgroundColor: 'orange' },
    //     swipeEnabled: true
    // }
);

// export default createAppContainer(MyApp);
const styles = StyleSheet.create({
    logoSize:{
        height:24,
        width:24
    }
})
export const AppNavigator = createAppContainer(MyApp);