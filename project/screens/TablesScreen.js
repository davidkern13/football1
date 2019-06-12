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
                <View style={styles.AddHereCssOfTable}>
                    {
                        i % 4 == 0 &&
                        <Group key={i}></Group>
                    }

                    <TeamRow key={i} place={eachTeam.team_name}
                        group={eachTeam.name} teamLogo={eachTeam.team_logo}
                        win={eachTeam.overall.won}
                        draw={eachTeam.overall.draw}
                        lose={eachTeam.overall.lost}
                        points={eachTeam.total.points}
                        backgroundColor={ eachTeam.position % 2  !== 0 ? '#ffffff':'#f3f4f8' }/>
                </View>

            )
        })
    }

    render() {
        const { table } = this.state;
    
        // console.log(typeof(table))
        return (
            <ScrollView style={{flex:1, backgroundColor: '#f4f4f4'}}>
                <View style={styles.container}>    
                {
                    table === null ? <Text>Loading</Text> :  this.sortTeam(table)
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
    AddHereCssOfTable: {
        display:'flex',
        marginBottom:20,
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#ddd',
    }
});