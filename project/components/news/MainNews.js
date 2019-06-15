import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Image ,ScrollView ,ImageBackground} from 'react-native';
import { Constants } from 'expo';

export default class MainNews extends React.Component {
    
    render() {

        let { img, title, date, credit } = this.props;

        return (
            <ImageBackground source={{ uri:img}}
                                       style={styles.headerNewsCon}
                                       imageStyle={{ borderRadius: 8}}>

                <ImageBackground style={{height:'100%',borderRadius:8,resizeMode:'cover'}} 
                                 imageStyle={{ borderRadius: 8}}
                                 source={{uri:'http://www.up2me.co.il/images/92093494.png?fbclid=IwAR17g4s8AueIAt5XZyc5Z0ecnx2aavSF8Y9ev7ZsuIrUBkjYJaOTDLveZuE'}}>
                    <View style={styles.textContainer}>
                            <Text style={styles.text}>{title}</Text>
                            <Text style={styles.text}>{date} | Credit : {credit} </Text>
                    </View>
                </ImageBackground>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    headerNewsCon:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        resizeMode: 'cover',
        maxHeight:220,
    },
    textContainer:{
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        height:60,
        bottom:0,
        borderRadius:8,
        padding:11,
    },
    headerTitle:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        paddingLeft:5,
        bottom:0
    },
    text:{
        fontSize:11,
        color:'#ffffff',
        fontWeight:'800',
    }
   
});