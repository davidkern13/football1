import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar ,Image} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

export default class MatchesBox extends React.Component {

   constructor(props){
       super(props)
       this.state={
            data:null
       }
   }
   componentDidMount(){
    //    fetch('https://bigfiveplus.com/test-table/superliga-playoff').then(res=>res.json()).then(res=>this.setState({data:res}))
    }
    
    render() {
        // console.log(this.state)
        return (
            <View style={styles.container}>
                <View style={styles.matchDisplay}>
                    <View style={styles.matchRound}> 
                        <Text style={styles.groupText}>GROUP {this.props.group}, ROUND {this.props.round}</Text>
                    </View>
                    <View style={styles.matchTeams}> 
                        <View style={styles.teamScore}>
                            <View style={styles.leftTeam}>
                                <Image style={styles.leftTeamImage}
                                       source={{uri: 'data:image/png;base64,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'}}/>
                                <Text style={{fontSize:14}}>{this.props.team1}</Text>
                            </View>
                            <View style={styles.scoreContainer}>
                                <View style={styles.teamScoreAlignment}>
                                    <Text style={styles.teamText}>{this.props.scoreTeam1} : {this.props.scoreTeam2}</Text>
                                </View>
                            </View>
                            <View style={styles.rightTeam}>
                                <Text style={{fontSize:14}}>{this.props.team2}</Text>                    
                                <Image style={styles.rightTeamImage}
                                       source={{uri: 'data:image/png;base64,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'}}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.minuteText}>{this.props.minute || this.props.time}'</Text>
                        {/* <Text style={{backgroundColor:'#36bc4f',borderRadius:100,width:6,height:6}}></Text> */}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
        paddingLeft:4,
        paddingRight:4,
        height:'auto',
        borderRadius:8,
        margin:3,
        elevation:1,
    },
    timeContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:40,
    },
    groupText:{
        fontSize:11,
        color:'#164095',
        fontWeight:'500',
        opacity:.7
    },
    matchDisplay:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        height:80,
        padding:8,
    },
    matchRound:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    teamScoreAlignment:{
        backgroundColor:'#f4f4f4',
        borderRadius:6,
        width:45,
        height:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    teamScore:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
    },
    scoreContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:50,
    },
    minuteText:{
        color:'#a1a1a1',
        fontSize:12
    },
    leftTeam:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:120
    },
    teamText:{
        fontSize:14,
        color:'#a1a1a1'
    },
    leftTeamImage:{
        width: 30,
        height: 30,
        borderRadius: 100,
        marginLeft:8,
        marginRight:8
    },
    rightTeam:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        width:120
    },
    rightTeamImage:{
        width: 30,
        height: 30,
        borderRadius: 100,
        marginLeft:8,
        marginRight:8
    },
    matchTeams:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
});