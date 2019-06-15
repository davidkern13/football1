import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import TeamRow from './TeamRowTable.js';
import TeamRow1 from './TeamRowTable1.js';
import TeamRow3 from './TeamRowTable3.js';
import TeamRow4 from './TeamRowTable4.js';

export default class Group extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.groupContainer}>
                    <Text style={styles.text}>{this.props.group}</Text>
                </View>
<<<<<<< HEAD
                <View style={{borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderColor:'#f4f4f4',borderWidth:1}}>
                    <View style={[styles.containerTop, styles.flexRowBetwen]}>
                        <View style={[styles.wrapContainerTableRowTeam, styles.flexRowBetwen]}>
                            <Text style={[styles.titleTableRowTeam, styles.titlePosRowTeam]}>#</Text>
                            <Text style={styles.titleTableRowTeam}>Team</Text>
=======
                <View style={{display:'flex',flexDirection:'column',
                        borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderColor:'#f4f4f4',borderWidth:1}}>
                    <View style={styles.containerTop}>
                        <View>
                            <Text style={{color:'#a1a1a1',paddingLeft:11,fontSize:14,fontWeight:'500'}}>Team</Text>
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
                        </View>
                        <View style={[styles.wrapContainerTableRow, styles.flexRowBetwen]}>
                            <Text style={styles.titleTableRow}>W</Text>
                            <Text style={styles.titleTableRow}>D</Text>
                            <Text style={styles.titleTableRow}>L</Text>
                            <Text style={styles.titleTableRow}>G</Text>
                            <Text style={styles.titleTableRowPoints}>Pts</Text>
                        </View>
                    </View>
                    <View style={styles.teamsContainer}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        marginBottom:20,
        marginTop:20,
        backgroundColor:'#f4f4f4',
    },
    groupContainer:{
        backgroundColor:'#f4f4f4',
    },
    titleTableRowTeam : {
        color:'#a1a1a1',
        fontSize:13,
        fontWeight:'500',
    },
    titlePosRowTeam : {
        width:12,
    },
    wrapContainerTableRowTeam : {
        flex:4,
    },
    wrapContainerTableRow : {
        flex:3,
    },
    containerTop:{
        alignItems:'center',
        height:40,
        color:'gray',
        backgroundColor:'#ffffff',
        fontSize:16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor:'red'
    },
    text:{
        fontSize: 13,
        color:'#bdbdbd',
        fontWeight:'500',
    },
    titleTableRow: {
        fontSize:13,
        color:'#a1a1a1',
        fontWeight:'400',
        flex: 1,
        textAlign:'center',
    },
    titleTableRowPoints:{
        fontSize:13,
        color:'#a1a1a1',
        fontWeight:'400',
        flex: 1
    },
    teamsContainer:{
        display:'flex',
        flexDirection:'column',
<<<<<<< HEAD
    },
    flexRowBetwen : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
=======
        marginTop:-30,
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
    }
});