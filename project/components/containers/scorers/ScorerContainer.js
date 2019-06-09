import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Scorer from '../../../components/scorers/Scorer';

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
                        <Text style={{fontSize:15,color:'gray'}}>Scorers</Text>
                        <Text style={{fontSize:15,color:'gray'}}>Goals</Text>
                    </View>
                    <View>
                        <Scorer place='1' scorerName='Ronaldinho' numOfGoals='2'/>
                        <Scorer place='1' scorerName='Ple' numOfGoals='2'/>
                        <Scorer place='2' scorerName='Rooney' numOfGoals='1'/>
                        <Scorer place='2' scorerName='Neymar' numOfGoals='1'/>
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
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
    },
});