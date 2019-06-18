import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

export default class PersonStat extends React.Component {
    render() {
        return (
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',height:60, backgroundColor:this.props.backgroundColor}}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.rankText}>{this.props.rank}</Text>
                        <View style={styles.playerStatsContainer}>
                            <Image source={{uri:this.props.playerImg}}
                                   style={styles.playerImage}/>
                            <View style={styles.playerStats}>
                                <Text style={styles.playerNameText}>{this.props.playerName}</Text>
                                <Text style={styles.nationalTeamText}>{this.props.nationalTeam}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text style={styles.playerStatText}>{this.props.statNum}</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
 
    leftHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flexBasis:'80%',
    },
    playerNameText:{
        fontWeight:'400',
        fontSize:13
    },
    nationalTeamText:{
        fontWeight:'400',
        fontSize:11,
        color:'#bdbdbd'
    },
    playerImage:{
        height:27,
        width:27,
        borderRadius:100
    },
    rankText:{
        marginLeft:20,
        fontWeight:'700',
        fontSize:15
    },
    rightHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexBasis:'20%',
        justifyContent:'center',
    },
    playerStatsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:210,
    },
    playerStats:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginLeft:8
    },
    playerStatText:{
        fontWeight:'700',
        fontSize:15
    }
});

