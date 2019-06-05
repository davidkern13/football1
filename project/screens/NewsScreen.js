import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import EachNews from './news/EachNews';


export default class NewsScreen extends React.Component {
    static navigationOptions = {  
        title: 'NewsScreen'
    };  

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <EachNews />
                    <EachNews />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:40,
        display:'flex',
        flexDirection:'column',
        backgroundColor: 'lightgray',
    },
});