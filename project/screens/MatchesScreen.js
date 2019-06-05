import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar} from 'react-native';
import MatchesBox from '../components/matches/MatchesBox'

const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

export default class MatchesScreen extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
               <MatchesBox team1='Argentina' team2='Bolivia' scoreTeam1='2' scoreTeam2='1' round='1' group='A' date='Sat 15/06/2019 03:30'/>
               <MatchesBox team1='Qatar' team2='Japan' scoreTeam1='5' scoreTeam2='2' round='1' group='A' date='Sat 15/06/2019 03:30'/>
               <MatchesBox team1='Venezuela' team2='Columbia' scoreTeam1='3' scoreTeam2='7' round='1' group='B' date='Sat 15/06/2019 03:30'/>
               <MatchesBox team1='Brazil' team2='Peru' scoreTeam1='0' scoreTeam2='0' round='1' group='C' date='Sat 15/06/2019 03:30'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
        display:'flex',
        flexDirection:'column',
        backgroundColor: 'lightgray',
    },
});