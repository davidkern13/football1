import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import EachNews from '../components/news/EachNews';

export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {}

    }

    componentDidMount() {
        //call here the method of api from redux

    }

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
        display:'flex',
        flexDirection:'column',
        backgroundColor: 'lightgray',
    },
});