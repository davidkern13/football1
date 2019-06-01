import * as React from 'react';
import { View, Button, StatusBar } from 'react-native';
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './project/screens/HomeScreen';
import MatchesScreen from './project/screens/MatchesScreen';
import TablesScreen from './project/screens/TablesScreen';
import ScorersScreen from './project/screens/ScorersScreen';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
        </View>
    );
  }
}

const BottomNavigator = createBottomTabNavigator(
    {
      Matches: MatchesScreen,
      Tables: TablesScreen,
      Scorers: ScorersScreen,
    }
);

const MyApp = createDrawerNavigator({
  BottomNavigator: {
    screen: BottomNavigator,
  },
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyApp);

