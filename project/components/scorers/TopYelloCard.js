import React from 'react';
import {Button, StyleSheet, Text, View ,ScrollView} from 'react-native';
import PersonStat from './PersonStat';


export default class TopYelloCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            scorer:null
        }
    }
    componentDidMount(){
        
        fetch('https://bigfiveplus.com/scorers-api/champions-league', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>this.setState({scorer:res.topScorersPlayersList}))
    }

    find(stats){
       return stats.map((player,i)=>{       
            return ( <PersonStat key={i} 
                                 backgroundColor={i%2!==0?'#f4f4f4':'#ffffff'}
                                 rank={player.position}
                                 playerName={player.name} 
                                 playerImg={player.club_img}
                                 nationalTeam={player.country}
                                 statNum={player.assists}/>)
        })
    }
    render() {
        const {scorer}=this.state;

        return (
            <ScrollView style={styles.scrollWrap}>
                <View style={styles.container}>   
                    <View style={styles.statsContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.rankText}>Rank</Text>
                                <Text style={styles.titleText}>Player</Text>
                            </View>
                            <View style={styles.rightHeader}>
                                <Text style={styles.titleText}>Cards</Text>
                            </View>
                        </View>
                        {
                            scorer===null?<PersonStat rank='-' playerName='-' statNum='-'/>:this.find(scorer)
                        }
                    </View> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollWrap:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    container: {
    },
    titleText:{
        color:'#bdbdbd',
        fontWeight:'600',
        fontSize:15
    },
    statsContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:25,
        height:'auto',
        marginLeft:20,
        marginRight:20,
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
    },
    rankText:{
        color:'#bdbdbd',
        fontWeight:'600',
        fontSize:15,
        marginLeft:10,
        marginRight:30
    }
});