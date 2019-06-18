import React from 'react';
import {Platform, Animated, StyleSheet, Text, View, Dimensions, ScrollView, Image, Picker} from 'react-native';
import MatchesDate from '../components/matches/MatchesDate';
import SingleMatch from '../components/matches/SingleMatch';
import DropDownPicker from '../picker/DropDownPicker';
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
            return (<Picker.Item key={index} label={item.name === '1' || item.name === '2' || item.name === '3'?
                                 item.name+'st Round'+' - '+
                                 item.start+' / '+item.end : 
                                 item.name+' '//+item.start+item.end// 
                                }value={item}/>)
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
                    <SingleMatch
                        gameStatus={item.gameStatus}
                        groupName={item.groupName.name}
                        gameRound={item.gameRound}
                        gameDate={item.gameSDate}
                        gameTimeMinutes={item.gameTimeMinnute}
                        gameTimeInjury={item.gameTimeInjuryTime}
                        localTeamLogo={item.gameLocalTeamLogo}
                        visitorTeamLogo={item.gameVisitorTeamLogo}
                        gameLocalTeamName={item.gameLocalTeamName}
                        gameVisitorTeamName={item.gameVisitorTeamName}
                        localTeamScore={item.gameLocalteamScore}
                        visitorTeamScore={item.gameVisitorTeamScore}
                    />
                </View>
            )
        });
    }

    render() {
        let { currentRound, todayGameList, roundName } = this.state;
        console.log()
       


        return (
            <ScrollView style={styles.containerWrap}>

                <View style={styles.container}>
                    <View>
                        <DropDownPicker
                            currentRound={currentRound}
                        />
                    </View>
                    <View>
                        { todayGameList.length > 0 ? this.renderMatchesDate(todayGameList) : <Text>Loading</Text>}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:2,
        paddingBottom:2,
        marginTop:50,
    },
    containerWrap:{
        flex:1,
        backgroundColor: '#f4f4f4'
    }
});

const mapStateToProps = state =>{
    return {
        matches: state.matches,
    }
}

const mapDispatchToProps = {

}

export default MatchesScreen;