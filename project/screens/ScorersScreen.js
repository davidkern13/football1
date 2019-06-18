//This is an example of React Native Tab
import React from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from "react-native";
//import react in our code.
//For React Navigation Version 2+
//import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation';
//import Navigator in our project

import ScorersContainer from '../components/scorers/Scorer.js';
import TopAsists from '../components/scorers/TopAsists';
import TopYelloCard from '../components/scorers/TopYelloCard';
import TopRedCard from '../components/scorers/TopRedCard';

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
    {
        Scorers: { screen: ScorersContainer },
        Assists: { screen: TopAsists },
        Yellow: { screen: TopYelloCard },
        Red: { screen: TopRedCard },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFFFFF',
            style: {
                backgroundColor: '#1F5FC6',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#1F5FC6',
                borderBottomWidth: 2,
            },
        },
    }
);

const Left = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={{uri:('https://img.icons8.com/android/24/ffffff/left.png')}}
        />
    </TouchableOpacity>
);

//making a StackNavigator to export as default
const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: ({ navigation }) => ({
            // headerStyle: {
            //     backgroundColor: '#1F5FC6',
            // },
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerTintColor: '#FFFFFF',
            title: 'Players Statistics',
            // header: ({ goBack }) => ({
            //     left: <Left onPress={goBack} />,
            // }),
            headerLeft: <TouchableOpacity  onPress={()=> navigation.openDrawer()}>
                <Image  source={{uri: "https://img.icons8.com/color/48/ffffff/menu.png"}}
                        resizeMode="contain"
                        style={{ width: 24, height: 24, left: 15 }}
            /></TouchableOpacity>
        }),
    },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);

const styles = StyleSheet.create({

})