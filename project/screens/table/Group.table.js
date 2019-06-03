import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import TeamRow from './TeamRow.table.js';
import TeamRow1 from './TeamRow.table1.js';
import TeamRow3 from './TeamRow.table3.js';
import TeamRow4 from './TeamRow.table4.js';

export default class Group extends React.Component {
  

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.containerTop}>
                <Text style={styles.text}>Group {this.props.group}</Text>
                <View style={styles.containerTopLeft}>
                    <Text style={styles.textR}>P.</Text>
                    <Text style={styles.textR}>Gd.</Text>
                    <Text style={styles.textR}>Pts.</Text>
                </View>
              </View>
              <View style={styles.teamsContainer}>
                <TeamRow1 place1={this.props.place1}/>
                <TeamRow place2={this.props.place2}/>
                <TeamRow3 place3={this.props.place3}/>
                <TeamRow4 place4={this.props.place4}/>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection:'column',
        marginTop:2,
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        margin:6,
        paddingLeft:10,
        paddingRight:10,
        elevation: 5
    },
    containerTop:{
        display:'flex',
        flexDirection:'row',
        height:30,
        alignItems:'center',
        justifyContent:'space-between',
        color:'gray',
        fontSize:16,
        padding: 5,
        marginBottom:8
    },
    containerTopLeft:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:100,
    },
    text:{
        marginLeft:3,
        fontSize: 16,
        color:'gray'
    },
    textR: {
        fontSize: 16,
        color:'gray',
    },
    teamsContainer:{
        display:'flex',
        flexDirection:'column',
        padding: 5,
    }
});