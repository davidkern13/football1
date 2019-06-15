import React from 'react';
import {Button, StyleSheet, Text, View, Image,} from 'react-native';

export default class TeamRow extends React.Component {
    render() {

<<<<<<< HEAD
        let { position, teamLogo, place, win, draw, lose, goals, points } = this.props;
=======
        let { teamLogo, place, win, draw, lose, points } = this.props;
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9

        return (
            <View style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                height:45,
<<<<<<< HEAD
=======
                paddingRight:15,
                marginLeft:15,
                marginRight:15,
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
                backgroundColor:this.props.backgroundColor,
                elevation:this.props.elevation,
                borderBottomLeftRadius:this.props.borderBottomLeftRadius,
                borderBottomRightRadius:this.props.borderBottomRightRadius
            }}>

                <View style={styles.statsLeft}>
                    <Text style={styles.placeNum}>{position}</Text>
                    <Image style={styles.teamLogo} source={{uri: teamLogo}}/>
                    <Text style={styles.teamName}>{place}</Text>
                </View>

                <View style={styles.statsRight}>
                    <Text style={styles.points}>{win}</Text>
                    <Text style={styles.points}>{draw}</Text>
                    <Text style={styles.points}>{lose}</Text>
                    <Text style={styles.points}>{goals}</Text>
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
        width:'auto',
        flex:4,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:0,
    },
    statsRight:{
        display:'flex',
        flexDirection:'row',
        color:'black',
        width:'auto',
        flex:3,
        justifyContent:'space-between',
    },
    teamLogo: {
        width: 24,
        height: 24,
        borderRadius: 100,
        marginRight:8
    },
    placeNum:{
        borderRadius:100,
        fontSize:12,
        width:12,
        textAlign:'center',
    },
    points:{
        fontSize:11,
        fontWeight:'500',
        flex:1,
        textAlign:'center',
    },
    teamName:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'auto',
        fontSize:13,
        flex: 1,
        fontWeight:'100'
    }
});