import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import Group from '../components/table/GroupTable.js';
import TeamRow from '../components/table/TeamRowTable.js';

export default class TablesScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {
            table:null,
        }

    }

    componentDidMount(){

        fetch('https://bigfiveplus.com/standings-tables-api/copa-america', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>this.setState({ table:res}))
    }

    sortTeam(teamsArr){

        return teamsArr.map((eachTeam,i)=>{
            return (
<<<<<<< HEAD

                <View key={i} style={styles.containerWrapTables}>
=======
               
                <View key={i}>    
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
                    {
                        i % 4 == 0 &&
                        <Group group={eachTeam.name}></Group>
                    }

<<<<<<< HEAD
                    <TeamRow key={i}
                             position={eachTeam.position}
                             place={eachTeam.team_name}
                             teamLogo={eachTeam.team_logo}
                             win={eachTeam.overall.won}
                             draw={eachTeam.overall.draw}
                             lose={eachTeam.overall.lost}
                             goals={(eachTeam.overall.goals_scored + ':' + eachTeam.overall.goals_against)}
                             points={eachTeam.total.points}
                             elevation={eachTeam.position % 4  !== 0 ? 0 : 1}
                             borderBottomLeftRadius={eachTeam.position % 4 !==0? 0 : 8 }
                             borderBottomRightRadius={eachTeam.position % 4 !==0? 0 : 8 }
                             backgroundColor={ eachTeam.position % 2  !== 0 ? '#ffffff':'#f3f4f8' }/>
=======
                    <TeamRow key={i} place={eachTeam.team_name}
                        teamLogo={eachTeam.team_logo}
                        win={eachTeam.overall.won}
                        draw={eachTeam.overall.draw}
                        lose={eachTeam.overall.lost}
                        points={eachTeam.total.points}
                        elevation={eachTeam.position % 4  !== 0 ? 0 : 1}
                        borderBottomLeftRadius={eachTeam.position % 4 !==0? 0 : 8 }
                        borderBottomRightRadius={eachTeam.position % 4 !==0? 0 : 8 }
                        backgroundColor={ eachTeam.position % 2  !== 0 ? '#ffffff':'#f3f4f8' }/>
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
                </View>

            )
        })
    }

    render() {
        const { table } = this.state;
<<<<<<< HEAD

        return (
            <ScrollView style={{flex:1, backgroundColor: '#f4f4f4'}}>
                <View style={styles.container}>
=======
  
        return (
            <ScrollView style={{flex:1, backgroundColor: '#f4f4f4'}}>
                <View style={styles.container}>  
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
                    {
                        table === null ? <Text style={styles.loadingText}>Loading...</Text> :  this.sortTeam(table)
                    }
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom:20
    },
    loadingText:{
        fontSize:20,
        color:'green',
<<<<<<< HEAD
    },
    containerWrapTables:{
        marginLeft:10,
        marginRight:10,
    }

});
=======
    }
   
});
>>>>>>> 285f644603729b95594e2d9571adb2d24b33fcf9
