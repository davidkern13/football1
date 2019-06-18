import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

// import { Status } from '../modal/emun';

export default class SingleMatch extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {}
    }

    render() {

        let { gameStatus, groupName, gameRound, gameDate, gameTimeMinutes, gameTimeInjury, localTeamLogo,
            visitorTeamLogo, gameLocalTeamName, gameVisitorTeamName, localTeamScore, visitorTeamScore} = this.props;

        return (
            <View>

                {/*date of game*/}
                <View style={styles.containerTop}>
                    <Text style={styles.gameDateText}>{gameDate}</Text>
                </View>


                <View style={styles.containerGameRow}>
                    <View style={styles.matchDisplay}>
                        {/*date of round*/}
                        <View style={styles.matchRound}>
                            <Text style={styles.rounds}>{groupName}, ROUND {gameRound}</Text>
                        </View>

                        <View style={styles.matchTeams}>
                            <View style={styles.teamScore}>
                                {/*local team*/}
                                <View style={styles.localTeam}>
                                    <Image style={styles.teamLogo} source={{uri: localTeamLogo}}/>
                                    <Text style={styles.teamName}>{gameLocalTeamName}</Text>
                                </View>

                                <View style={styles.scoreWrap}>
                                    <View style={styles.scoreDisplayContainer}>
                                        <Text style={styles.teamName}>
                                            {gameStatus === Status.NS ? ` - ` : gameStatus === Status.LIVE ? localTeamScore : localTeamScore}
                                            :
                                            {gameStatus === Status.NS ? ` - ` : gameStatus === Status.LIVE ? visitorTeamScore : visitorTeamScore}
                                        </Text>
                                    </View>
                                </View>

                                {/*visitor team*/}
                                <View style={styles.visitorTeam}>
                                    <Text style={styles.teamName}>{gameVisitorTeamName}</Text>
                                    <Image style={styles.teamLogo} source={{uri: visitorTeamLogo}}/>
                                </View>

                            </View>
                        </View>

                        { gameStatus === Status.LIVE &&
                        <View style={styles.timeContainer}>
                            <Text style={styles.minuteTime}>
                                {gameTimeMinutes}
                                {parseInt(gameTimeInjury) >= 0 ? gameTimeInjury : ''}
                                '</Text>
                        </View>
                        }
                    </View>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    containerPerMatch:{
        marginBottom:15,
    },
    container: {
        display:'flex',
        flexDirection:'column',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:2,
        paddingBottom:2,
        marginTop:50,
    },
    gameDateText:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'600',
        color:'#bdbdbd',
        marginLeft:12
    },
    dropDownContainer:{
        backgroundColor:'#ffffff',
        elevation:.4,
        paddingLeft:30,
        paddingRight:30,
        position:'absolute',
        top:0,
        width:'100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerTop:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        height:'auto',
    },
    containerGameRow: {
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
    teamScore:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
    },
    scoreWrap:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:50,
    },
    scoreDisplayContainer:{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#f4f4f4',
        alignItems:'center',
        borderRadius:6,
        width:45,
        height:25,
    },
    localTeam:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:120
    },
    visitorTeam:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        width:120
    },
    matchTeams:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10
    },
    rounds:{
        fontSize:11,
        color:'#164095',
        fontWeight:'500'
    },
    teamLogo:{
        width: 30,
        height: 30,
        borderRadius: 100
    },
    teamName:{
        fontSize:14,
        marginLeft: 10
    },
    minuteTime:{
        color:'#a1a1a1',
        fontSize:12
    }
});