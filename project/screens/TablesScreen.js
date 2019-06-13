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
               
                <View key={i}>    
                    {
                        i % 4 == 0 &&
                        <Group group={eachTeam.name}></Group>
                    }

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
                </View>

            )
        })
    }

    render() {
        const { table } = this.state;
  
        return (
            <ScrollView style={{flex:1, backgroundColor: '#f4f4f4'}}>
                <View style={styles.container}>  
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
    },
    loadingText:{
        fontSize:20,
        color:'green',
    }
   
});