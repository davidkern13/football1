import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
            marginTop: 20
        },
        headerTintColor: '#0ff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>koko</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="Open Drawer"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    }
});