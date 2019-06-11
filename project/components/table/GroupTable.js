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
                <View style={{borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderColor:'#f4f4f4',borderWidth:1}}>
                    <View style={styles.containerTop}>
                        <View>
                            <Text style={{color:'#a1a1a1',paddingLeft:11,fontSize:14,fontWeight:'500'}}>Team</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:133}}>
                            <Text style={styles.textR}>W</Text>
                            <Text style={styles.textR}>D</Text>
                            <Text style={styles.textR}>L</Text>
                            <Text style={styles.textRPoints}>Pts</Text>
                        </View>
                    </View>
                    <View style={styles.teamsContainer}>
                        {this.props.children}
                        {/* <TeamRow place={this.props.place}  teamLogo={this.props.teamLogo} win={this.props.win} draw={this.props.draw} lose={this.props.lose} points={this.props.points}/>
                        <TeamRow place={this.props.place}  teamLogo={this.props.teamLogo} win={this.props.win} draw={this.props.draw} lose={this.props.lose} points={this.props.points}/>
                        <TeamRow place={this.props.place}  teamLogo={this.props.teamLogo} win={this.props.win} draw={this.props.draw} lose={this.props.lose} points={this.props.points}/>
                        <TeamRow place={this.props.place}  teamLogo={this.props.teamLogo} win={this.props.win} draw={this.props.draw} lose={this.props.lose} points={this.props.points}/> */}
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
        color:'#a1a1a1',
        fontWeight:'500',
    },
    textRPoints:{
        fontSize:14,
        color:'#a1a1a1',
        fontWeight:'500',
        marginLeft:-5,
    },
    teamsContainer:{
        display:'flex',
        flexDirection:'column',
    }
});