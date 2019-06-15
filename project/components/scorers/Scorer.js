import React from 'react';
import {Button, StyleSheet, Text, View ,ScrollView} from 'react-native';
import PersonStat from './PersonStat';


export default class Scorer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            scorer:null
        }
    }
    componentDidMount(){
        
        fetch('https://bigfiveplus.com/scorers-api/ligue-1', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>this.setState({scorer:res.topPlayersList}))
    }

    find(stats){
       return stats.map((player,i)=>{       
            return ( <PersonStat key={i} 
                                 backgroundColor={i%2!==0?'#f4f4f4':'#ffffff'}
                                 rank={player.position}
                                 playerName={player.name} 
                                 playerImg={player.club_img}
                                 nationalTeam={player.country.substring(1,player.country.length-1)}
                                 statNum={player.goals}/>)
        })
    }
    render() {
        const {scorer}=this.state;

        return (
            <ScrollView style={{flex:1,backgroundColor:'#f4f4f4'}}>
                <View style={styles.container}>   
                    <View style={styles.statsContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.leftHeader}>
                                <Text style={{color:'#bdbdbd',fontWeight:'600',fontSize:15,marginLeft:10,marginRight:30}}>Rank</Text>
                                <Text style={{color:'#bdbdbd',fontWeight:'600',fontSize:15}}>Player</Text>
                            </View>
                            <View style={styles.rightHeader}>
                                <Text style={{color:'#bdbdbd',fontWeight:'600',fontSize:15}}>Goals</Text>
                            </View>
                        </View>
                        {
                            scorer === null ? <PersonStat rank='-' playerName='-' statNum='-'/> : this.find(scorer)
                        }
                    </View> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    statsContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:25,
        height:'auto',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        backgroundColor:'#ffffff',
        borderRadius:8,
        elevation:2,
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:50,
    },
    leftHeader:{
        display:'flex',
        flexDirection:'row',
        flexBasis:'80%',
    },
    rightHeader:{
        display:'flex',
        flexDirection:'row',
        flexBasis:'20%',
        justifyContent:'center',
    }
});