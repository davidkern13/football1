import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class TopRedCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            assist:[]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>TopAsists</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'lightgray'
    },
    scorerContainer:{
        margin:3,
        backgroundColor:'#fff',
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
    },
});