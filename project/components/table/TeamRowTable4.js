import React from 'react';
import {Button, StyleSheet, Text, View ,Image} from 'react-native';


export default class TeamRow4 extends React.Component {
    render() {
        return (
            <View style={styles.teamStats}>
            <View style={styles.statsLeft}>
                {/* <Text style={styles.placeNum}>4</Text> */}
                <Image style={{width: 24, height: 24, borderRadius: 100,marginRight:8}}
                        source={{uri: this.props.teamLogo}}/>
                <Text style={styles.teamName}>{this.props.place4}</Text>
            </View>
            <View style={styles.statsRight}>
                <Text style={styles.points}>0</Text>
                <Text style={styles.points}>0</Text>
                <Text style={styles.points}>0</Text>
                <Text style={styles.points}>0</Text>
            </View>    
        </View>
        );
    }
}

const styles = StyleSheet.create({
    teamStats:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:45,
        backgroundColor:'#f3f4f8',
        paddingRight:15,
    },
    statsLeft:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        width:170,
        justifyContent:'flex-start',
        paddingLeft:25,
        alignItems:'center'
    },
    placeNum:{
        borderRadius:100,
        fontSize:14,
        width:29,
        height:29,
        textAlign:'center'
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