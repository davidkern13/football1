import React from 'react';
import {Button, StyleSheet, Text, View, Image,} from 'react-native';

export default class TeamRow extends React.Component {
    render() {

        let { position, teamLogo, place, win, draw, lose, 
            goalsFor,goalsAgainst, points,
            backgroundColor,elevation,
            borderBottomLeftRadius,borderBottomRightRadius } = this.props;

        return (
            <View style={{
                display:'flex',
                justifyContent:'space-between',
                paddingRight:5,
                paddingLeft:5,
                alignItems:'center',
                flexDirection:'row',
                height:45,
                backgroundColor,
                elevation,
                borderBottomLeftRadius,
                borderBottomRightRadius
            }}>
                <View style={styles.teamPlaceContainer}>
                    <Text style={styles.placeNum}>{position}</Text>
                    <View style={styles.teamDataContainer}>
                        <Image style={styles.teamLogo} source={{uri : teamLogo}}/>
                        <Text style={styles.teamName}>{place}</Text>
                    </View>
                </View>
                <View style={styles.teamStats}>
                    <Text style={styles.points}>{win}</Text>
                    <Text style={styles.points}>{draw}</Text>
                    <Text style={styles.points}>{lose}</Text>
                    <Text style={styles.points}>{goalsFor}</Text>
                    <Text style={styles.points}>{goalsAgainst}</Text>
                    <Text style={[styles.points,styles.boldWeight]}>{points}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    teamPlaceContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        color:'black',
    },
    teamDataContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    teamStats:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        flexBasis:'40%',
        justifyContent:'space-between',
    },
    teamLogo: {
        width: 24,
        height: 24,
        borderRadius: 100,
        marginRight:8
    },
    placeNum:{
        fontSize:13,
        marginRight:15,
        textAlign:'center',
        fontWeight:'700'
    },
    points:{
        fontSize:11,
        textAlign:'center',
        fontWeight:'400',
        flexBasis:'15%'
    },
    teamName:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'auto',
        fontSize:13,
        fontWeight:'100'
    },
    boldWeight:{
        fontWeight:'700'
    }
});