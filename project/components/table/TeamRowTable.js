import React from 'react';
import {Button, StyleSheet, Text, View, Image,} from 'react-native';

export default class TeamRow extends React.Component {
    render() {

        let { teamLogo, place, win, draw, lose, points } = this.props;
        return (
            <View style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                height:45,
                paddingRight:15,
                backgroundColor:this.props.backgroundColor
            }}>

                <View style={styles.statsLeft}>
                    {/* <Text style={styles.placeNum}>2</Text>              */}
                    <Image style={{width: 24, height: 24, borderRadius: 100, marginRight:8}} source={{uri: teamLogo}}/>
                    <Text style={styles.teamName}>{place}</Text>
                </View>

                <View style={styles.statsRight}>
                    <Text style={styles.points}>{win}</Text>
                    <Text style={styles.points}>{draw}</Text>
                    <Text style={styles.points}>{lose}</Text>
                    <Text style={styles.points}>{points}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    teamStats:{
        
    },
    statsLeft:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        width:170,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:25,
    },
    placeNum:{
        borderRadius:100,
        fontSize:14,
        width:29,
        height:29,
        borderWidth:1,
        backgroundColor:'#e5ffe5',
        textAlign:'center',
        borderColor:'green',
    },
    statsRight:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        width:125,
        justifyContent:'space-between',
    },
    points:{
        fontSize:12,
        fontWeight:'500',
    },
    teamName:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:80,
        fontSize:13,
        fontWeight:'100'
    }
});