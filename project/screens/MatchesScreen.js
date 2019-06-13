import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar, ScrollView, Image, Picker} from 'react-native';
import MatchesDate from '../components/matches/MatchesDate';
import { getApisUrls } from '../api/api';
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

class MatchesScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {
            currentRound: null,
            fetchUrls:[
                'https://bigfiveplus.com/competition/copa-america/get-rounds',
                'https://bigfiveplus.com/get-stages/copa-america',
            ],
            todayGameList: {},
        }

    }

    componentDidMount() {
        //call here the method of api from redux
        this.callApiMatches();
        //setInterval(() => {
            // this.callApiMatches();
        //}, 60000)
    }

    callApiMatches(){
        fetch('https://bigfiveplus.com/get-current-round/copa-america', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((dataStr) => {
            fetch('https://bigfiveplus.com/competition/copa-america/get-rounds/' + parseInt(dataStr._bodyInit)).then((response) => response.json()).then((responseData) => {
                this.setState({
                    currentRound:  parseInt(dataStr._bodyInit),
                    todayGameList: responseData
                });
               
            }).done();
        })
        .catch((error) => {
            console.error(error);
        });
    }

    renderMatchesDate(todayGameList) {

        return todayGameList.map((item, index) => {
            // console.log(item)
            return (
                <View style={styles.container} key={index}>
                {
                    <View style={styles.containerTop}>
                        <Text style={{textAlign:'center',fontSize:14,fontWeight:'600',color:'#bdbdbd',marginLeft:12}}>{item.gameSDate}</Text>
                    </View>
                }

                <View style={styles.containerGameRow}>
                    <View style={styles.matchDisplay}>
                        <View style={styles.matchRound}>
                            <Text style={{fontSize:11,color:'#164095',fontWeight:'500'}}>GROUP {this.props.group}, ROUND {item.gameRound}</Text>
                        </View>
                        <View style={styles.matchTeams}>
                            <View style={styles.teamScore}>
                                <View style={styles.leftTeam}>
                                    <Image style={{width: 30, height: 30, borderRadius: 100}}
                                           source={{uri: item.gameLocalTeamLogo}}/>
                                    <Text style={{fontSize:14, marginLeft: 10}}>{item.gameLocalTeamName}</Text>
                                </View>
                                <View style={styles.scoreContainer}>
                                    <View style={{backgroundColor:'#f4f4f4',borderRadius:6,width:45,height:25,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:14,color:'#a1a1a1'}}>
                                            {item.gameStatus === "NS" ? ` - ` : item.gameStatus === "LIVE" ? item.gameLocalteamScore : ` - `}
                                            :
                                            {item.gameStatus === "NS" ? ` - ` : item.gameStatus === "LIVE" ? item.gameVisitorTeamScore : ` - `}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.rightTeam}>
                                    <Text style={{fontSize:14,  marginRight: 10}}>{item.gameVisitorTeamName}</Text>
                                    <Image style={{width: 30, height: 30, borderRadius: 100}}
                                           source={{uri: item.gameVisitorTeamLogo}}/>
                                </View>
                            </View>
                        </View>
                        { item.gameStatus === "LIVE" &&
                            <View style={styles.timeContainer}>
                                <Text style={{color:'#a1a1a1',fontSize:12}}>
                                    {item.gameTimeMinnute}
                                    {parseInt(item.gameTimeInjuryTime) >= 0 ? item.gameTimeInjuryTime : ''}
                                '</Text>
                                <Text style={{backgroundColor:'#36bc4f',borderRadius:100,width:6,height:6}}></Text>
                            </View>
                        }
                    </View>
                </View>
                </View>
            )
        });
    }

    selectedRound(round){
        console.log(round)
         fetch('https://bigfiveplus.com/competition/copa-america/get-rounds/' + round, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then(res=>this.setState({ todayGameList:res }))
    }

    render() {
        let { currentRound, todayGameList ,rounds} = this.state;
        return (
            <ScrollView style={{flex:1,backgroundColor: '#f4f4f4'}}>
                    <View style={styles.dropDownContainer}>
                      <Picker selectedValue={this.state.currentRound}
                             mode='dropdown'
                             style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'100%',
                                height:30,
                                transform: [
                             ]
                           }}
                            onValueChange={itemValue =>
                                {
                                this.setState({currentRound: itemValue});
                                this.selectedRound(itemValue);
                            }}>
                                {

                                }
                            <Picker.Item label="Round 1" value="1" />
                            <Picker.Item label="Round 2" value="2" />
                            <Picker.Item label="Round 3" value="3" />
                            <Picker.Item label="Quarter Final" value="Quarter Finals" />
                            <Picker.Item label="Semi Final" value="Semi Finals" />
                            <Picker.Item label="3rd place" value="3rd place" />
                            <Picker.Item label="Final" value="Final" />
                        </Picker>
                    </View>
                <View style={styles.container}>

                    {
                        todayGameList.length > 0 ? this.renderMatchesDate(todayGameList) : <Text>Loading</Text>
                    }

                    {/*<MatchesDate  date='Sunday, June 16'*/}
                    {/*              team1='Venezuela' team2='Argentina'*/}
                    {/*              scoreTeam1='1' scoreTeam2='1'*/}
                    {/*              team3='Qatar' team4='Brazil'*/}
                    {/*              scoreTeam3='0' scoreTeam4='0'*/}
                    {/*              round='1' group='A' time='90+2'/>*/}

                    {/*<MatchesDate  date='Sunday, June 16' */}
                    {/*              team1='Venezuela' team2='Argentina' */}
                    {/*              scoreTeam1='0' scoreTeam2='0' */}
                    {/*              team3='Qatar' team4='Brazil'*/}
                    {/*              scoreTeam3='3' scoreTeam4='6'*/}
                    {/*              round='1' group='B' time='24'/> */}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        padding:10,
        marginTop:10
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
    scoreContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:50,
    },
    leftTeam:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:120
    },
    rightTeam:{
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
});

const mapStateToProps = state =>{
    return {
        matches: state.matches,
    }
}

const mapDispatchToProps = {

}

export default MatchesScreen;