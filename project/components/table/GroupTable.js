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
                    <Text style={styles.text}>Group {this.props.group}</Text>
                </View>
                <View style={{borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderColor:'#f4f4f4',borderWidth:1}}>
                    <View style={styles.containerTop}>
                        <View style={{}}>
                            <Text style={{color:'#bdbdbd',paddingLeft:11}}>Team</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:133}}>
                            <Text style={styles.textR}>W</Text>
                            <Text style={styles.textR}>D</Text>
                            <Text style={styles.textR}>L</Text>
                            <Text style={styles.textRPoints}>Pts</Text>
                        </View>
                    </View>
                    <View style={styles.teamsContainer}>
                        <TeamRow1 place1={this.props.place1}/>
                        <TeamRow place2={this.props.place2}/>
                        <TeamRow3 place3={this.props.place3}/>
                        <TeamRow4 place4={this.props.place4}/>
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
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#f4f4f4',
    },
    groupContainer:{
        backgroundColor:'#f4f4f4',
    },

    containerTop:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
        color:'gray',
        backgroundColor:'#ffffff',
        fontSize:16,
        paddingLeft: 10,
        paddingRight:10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor:'red'
    },
    text:{
        marginLeft:3,
        fontSize: 14,
        color:'#bdbdbd',
        fontWeight:'700',
        marginBottom:3
    },
    textR: {
        fontSize:14,
        color:'#bdbdbd',
        fontWeight:'500',
    },
    textRPoints:{
        fontSize:14,
        color:'#bdbdbd',
        fontWeight:'500',
        marginLeft:-5,
    },
    teamsContainer:{
        display:'flex',
        flexDirection:'column',
    }
});