import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PersonStat from './PersonStat';


export default class TopAsists extends React.Component {
    constructor(props){
        super(props)
        this.state={
            assist:[]
        }
    }
    render() {
        return (
            <View style={styles.container}>   
                <View style={styles.statsContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.leftHeader}>
                            <Text style={{color:'#bdbdbd',marginLeft:15,marginRight:35,fontWeight:'600',fontSize:15}}>Rank</Text>
                            <Text style={{color:'#bdbdbd',fontWeight:'600',fontSize:15}}>Player</Text>
                        </View>
                        <View style={styles.rightHeader}>
                            <Text style={{color:'#bdbdbd',fontWeight:'600',fontSize:15}}>Assists</Text>
                        </View>
                    </View>
                     <PersonStat rank='01' 
                     playerImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uOLUuxYX9w4ZwCLWgyOJUECRv1qoiQNDdjzJmm5m0XXNIOru-Q' 
                     playerName='Eren Zehavi' nationalTeam='Israel' statNum='7' backgroundColor='#ffffff'/>
                     <PersonStat rank='02' 
                     playerImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uOLUuxYX9w4ZwCLWgyOJUECRv1qoiQNDdjzJmm5m0XXNIOru-Q' 
                     playerName='Javier Hernandez' nationalTeam='Mexico' statNum='5' backgroundColor='#f4f4f4'/>
                     <PersonStat rank='03' 
                     playerImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uOLUuxYX9w4ZwCLWgyOJUECRv1qoiQNDdjzJmm5m0XXNIOru-Q' 
                     playerName='Eren Zehavi' nationalTeam='Israel' statNum='7' backgroundColor='#ffffff'/>
                     <PersonStat rank='04' 
                     playerImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uOLUuxYX9w4ZwCLWgyOJUECRv1qoiQNDdjzJmm5m0XXNIOru-Q' 
                     playerName='Javier Hernandez' nationalTeam='Mexico' statNum='5' backgroundColor='#f4f4f4'/>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f4f4'
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
        justifyContent:'center'
    }
});