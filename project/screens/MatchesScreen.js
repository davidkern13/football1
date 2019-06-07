import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar ,ScrollView} from 'react-native';
import MatchesDate from '../components/matches/Matches.date';
import {connect} from "react-redux";

const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

class MatchesScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {}

    }

    componentDidMount() {
        //call here the method of api from redux
    }

    setMatchesDataApi = () => {

    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor: '#f4f4f4'}}>
                <View style={styles.container}>
                    <MatchesDate  date='Sunday, June 16' 
                                  team1='Venezuela' team2='Argentina' 
                                  scoreTeam1='1' scoreTeam2='1' 
                                  team3='Qatar' team4='Brazil'
                                  scoreTeam3='0' scoreTeam4='0'
                                  round='1' group='A' time='90+2'/> 
                    <MatchesDate  date='Sunday, June 16' 
                                  team1='Venezuela' team2='Argentina' 
                                  scoreTeam1='0' scoreTeam2='0' 
                                  team3='Qatar' team4='Brazil'
                                  scoreTeam3='3' scoreTeam4='6'
                                  round='1' group='B' time='24'/> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        padding:10
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