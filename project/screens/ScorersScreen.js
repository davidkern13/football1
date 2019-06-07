//This is an example of React Native Tab
import React from 'react';
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

import Scorer from '../components/scorers/Scorer';
import TopAsists from '../components/scorers/TopAsists';
import TopYelloCard from '../components/scorers/TopYelloCard';
import TopRedCard from '../components/scorers/TopRedCard';

//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
    {
        Scorers: { screen: Scorer },
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
            inactiveTintColor: '#5F99DE',
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

//making a StackNavigator to export as default
const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1F5FC6',
            },
            headerTintColor: '#FFFFFF',
            title: 'Players Stats',
        },
    },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);