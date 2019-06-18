import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Scorer2 from '../../scorers/Scorer2';

export default class ScorersScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            scorers:[]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scorerContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Scorers</Text>
                        <Text style={styles.text}>Goals</Text>
                    </View>
                    <View>
                        <Scorer2 place='1' scorerName='Ronaldinho' numOfGoals='2'/>
                        <Scorer2 place='1' scorerName='Ple' numOfGoals='2'/>
                        <Scorer2 place='2' scorerName='Rooney' numOfGoals='1'/>
                        <Scorer2 place='2' scorerName='Neymar' numOfGoals='1'/>
                    </View>
                </View>
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
    text:{
        fontSize:15,
        color:'gray'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
    },
});