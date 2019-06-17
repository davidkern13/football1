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
<<<<<<< HEAD
        let { currentRound, todayGameList, roundName } = this.state;
        console.log()
       

=======
        let { currentRound, todayGameList } = this.state;
>>>>>>> 645d48594e1f50cc60a8f419e2b94368f1496d2a

        return (
            <ScrollView style={styles.containerWrap}>

<<<<<<< HEAD
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
=======
>>>>>>> 645d48594e1f50cc60a8f419e2b94368f1496d2a
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