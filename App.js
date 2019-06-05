import * as React from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './project/screens/HomeScreen';
import MatchesScreen from './project/screens/MatchesScreen';
import TablesScreen from './project/screens/TablesScreen';
import ScorersScreen from './project/screens/ScorersScreen';
import NewsScreen from './project/screens/NewsScreen';

import { SafeAreaView, StatusBar, Platform } from 'react-native';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    
  };

  render() {
   
    return (

        <View style={{ flex: 1, justifyContent: 'center', }}>
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home "
          />
        </View>
 
    );
  }
}



const BottomNavigator = createBottomTabNavigator(
    {
      News: NewsScreen,
      Matches: MatchesScreen,
      Tables: TablesScreen,
      Scorers: ScorersScreen,
    }
);

const MyApp = createDrawerNavigator({
  Home: { screen: HomeScreen},
  BottomNavigator: { screen: BottomNavigator},
  Notifications: { screen: MyNotificationsScreen},
  
});

export default createAppContainer(MyApp);

