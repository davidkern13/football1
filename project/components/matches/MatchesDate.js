import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar ,Image} from 'react-native';
import MatchesBox from './MatchesBox';

const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

export default class MatchesDate extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={styles.dateAlignment}>{this.props.date}</Text>
                </View>
               <MatchesBox team1={this.props.team1} team2={this.props.team2} 
                           scoreTeam1={this.props.scoreTeam1} scoreTeam2={this.props.scoreTeam2} 
                           round={this.props.round} group={this.props.group} 
                           time={this.props.time} minute={this.props.minute}/>
               <MatchesBox team1={this.props.team3} team2={this.props.team4} 
                           scoreTeam1={this.props.scoreTeam3} scoreTeam2={this.props.scoreTeam4} 
                           round={this.props.round} group={this.props.group}
                           time={this.props.time} minute={this.props.minute}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        height:'auto',
    },
    containerTop:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        height:40,
    },
    dateAlignment:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'600',
        color:'#bdbdbd',
        marginLeft:12
    }
    
});