import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

export default class PersonStat extends React.Component {
    render() {
        return (
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',height:60, backgroundColor:this.props.backgroundColor}}>
                    <View style={styles.leftHeader}>
                        <Text style={{marginLeft:20,marginRight:45,fontWeight:'700',fontSize:15}}>{this.props.rank}</Text>
                        <View style={styles.playerStatsContainer}>
                            <Image source={{uri:this.props.playerImg}}
                                   style={{height:27,width:27,borderRadius:100}}/>
                            <View style={styles.playerStats}>
                                <Text style={{fontWeight:'700',fontSize:15}}>{this.props.playerName}</Text>
                                <Text style={{fontWeight:'700',fontSize:15,color:'#bdbdbd'}}>{this.props.nationalTeam}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text style={{fontWeight:'700',fontSize:15}}>{this.props.statNum}</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({

    leftHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexBasis:'80%',
    },
    rightHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexBasis:'20%',
        justifyContent:'center'
    },
    playerStatsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:200,
    },
    playerStats:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingLeft:12
    }
   
});

