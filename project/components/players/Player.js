import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";

import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    DrawerActions
} from 'react-navigation';

export default class Player extends React.Component {

    constructor() {
        super();
        this.state = {
            test: null
        };
    }

    static navigationOptions =
        {
            title: 'Player',
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerStyle: {height: 100},
            headerTintColor: '#FFFFFF',
        };

    render() {

       console.log(this.props.navigation.state.params.item);
        return(
            <View>
                <Text>You Selected:</Text>
            </View>
        );
    }
}
