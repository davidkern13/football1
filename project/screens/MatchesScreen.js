import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Dimensions, ScrollView, Image, Picker} from 'react-native';
import MatchesDate from '../components/matches/MatchesDate';
import { getApisUrls } from '../api/api';
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
const width = Dimensions.get('window').width;

class MatchesScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {
            currentRound: null,
            fetchRoundUrls:[
                'https://bigfiveplus.com/competition/copa-america/get-rounds',
                'https://bigfiveplus.com/get-stages/copa-america',
            ],
            todayGameList: {},
            roundName:[]

        }

    }

    componentDidMount() {
        //call here the method of api from redux
        //setInterval(() => {
         this.callApiMatches();
         this.fetchRound();
        //}, 60000)
    }
    renderDropDown(){
        const {roundName} = this.state;
        return roundName.map((item, index) => {

            // console.log(item);
            return (<Picker.Item key={index} label={item.name === '1' || item.name === '2' ||item.name === '3'?
                                 item.name+'st Round'+' - '+
                                 item.start+' / '+item.end : 
                                 item.name+' '//+item.start+item.end//
                                } value={item}/>)
        })
        }
        
    fetchRound=()=>{
        const {fetchRoundUrls}=this.state;
        let arr=[];

        Promise.all([
          fetch(fetchRoundUrls[0]),
          fetch(fetchRoundUrls[1]),
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        //   arr.push(data1)
          data1.map(ob=>{arr.push(ob)});
          data2.map(ob=>{arr.push(ob)});
          this.setState({roundName:arr})
        });
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

            // console.log(item);
            return (
                <View style={styles.containerPerMatch} key={index}>
                    {
                        <View style={styles.containerTop}>
                            <Text style={styles.gameDateText}>{item.gameSDate}</Text>
                        </View>
                    }

                    <View style={styles.containerGameRow}>
                        <View style={styles.matchDisplay}>
                            <View style={styles.matchRound}>
                                <Text style={{fontSize:11,color:'#164095',fontWeight:'500'}}>{item.groupName.name}, ROUND {item.gameRound}</Text>
                            </View>
                            <View style={styles.matchTeams}>
                                <View style={styles.teamScore}>
                                    <View style={styles.leftTeam}>
                                        <Image style={{width: 30, height: 30, borderRadius: 100}}
                                               source={{uri: item.gameLocalTeamLogo}}/>
                                        <Text style={{fontSize:14, marginLeft: 10}}>{item.gameLocalTeamName}</Text>
                                    </View>
                                    <View style={styles.scoreWrap}>
                                        <View style={styles.scoreDisplayContainer}>
                                            <Text style={{fontSize:14,color:'#a1a1a1'}}>
                                                {item.gameStatus === "NS" ? ` - ` : item.gameStatus === "LIVE" ? item.gameLocalteamScore : item.gameLocalteamScore}
                                                :
                                                {item.gameStatus === "NS" ? ` - ` : item.gameStatus === "LIVE" ? item.gameVisitorTeamScore : item.gameVisitorTeamScore}
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
        let { currentRound, todayGameList, roundName } = this.state;
        console.log()
       


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
                                width:width,
                                height:40,
                            }}
                            onValueChange={itemValue =>
                            {
                                this.setState({currentRound: itemValue});
                                this.selectedRound(itemValue);
                            }}>
                        {

                        }
                        {/* {roundName===null? '': <Picker.Item label={roundName[0]} value={roundName[0]} />} */}
                        {/* {console.log(roundName.length)} */}
                        {roundName === [] ? '' : this.renderDropDown() }

                        {/* <Picker.Item label="1st Round - 2019-06-15/2019-06-17" value="1"/>
                        <Picker.Item label="2nd Round - 2019-06-15/2019-06-17" value="2" />
                        <Picker.Item label="3rd Round - 2019-06-15/2019-06-17" value="3" />
                        <Picker.Item label="Quarter Final - 2019-06-15/2019-06-17" value="Quarter Finals" />
                        <Picker.Item label="Semi Final - 2019-06-15/2019-06-17" value="Semi Finals" />
                        <Picker.Item label="3rd place - 2019-06-15" value="3rd place" />
                        <Picker.Item label="Final - 2019-06-15" value="Final" /> */}
                    </Picker>
                </View>
                <View style={styles.container}>

                    {
                        todayGameList.length > 0 ? this.renderMatchesDate(todayGameList) : <Text>Loading</Text>
                    }
                </View>
            </ScrollView>
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