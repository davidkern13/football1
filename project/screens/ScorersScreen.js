import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class ScorersScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScorersScreen</Text>
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