import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator,  createAppContainer } from 'react-navigation';

import { HomeScreen } from './project/screens/HomeScreen';
import { MatchesScreen } from './project/screens/MatchesScreen';
import { TablesScreen } from './project/screens/TablesScreen';
import { ScorersScreen } from './project/screens/ScorersScreen';
import { SettingsScreen } from './project/screens/SettingsScreen';

import MenuDrawer from '../components/navigation/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation} />)
    }
}

export const env = {
    'kopok': 5,
};

const koko = createDrawerNavigator({
    Home : {
        screen: HomeScreen
    },
    Matches : {
        screen: MatchesScreen
    },
    Tables : {
        screen: TablesScreen
    },
});

export default createAppContainer(koko);