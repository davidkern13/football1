import React from 'react';
import {Button, StyleSheet, Text, View ,Image} from 'react-native';


export default class TeamRow1 extends React.Component {
    render() {
        return (
            <View style={styles.teamStats}>
            <View style={styles.statsLeft}>
                {/* <Text style={styles.placeNum}>1</Text> */}
                <Image style={{width: 24, height: 24, borderRadius: 100,marginRight:8}}
                       source={{uri: this.props.teamLogo}}/>
                <Text style={styles.teamName}>{this.props.place1}</Text>
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
        backgroundColor:'#ffffff',
        height:45,
        paddingRight:15,
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
        borderColor:'green',
        backgroundColor:'#e5ffe5',
        textAlign:'center'
    },
    statsRight:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        justifyContent:'space-between',
        width:125,
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