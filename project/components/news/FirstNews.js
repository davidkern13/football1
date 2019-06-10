import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Image ,ScrollView ,ImageBackground} from 'react-native';


export default class FirstNews extends React.Component {
    
    render() {
        return (
            <ImageBackground source={{ uri:this.props.img}} 
                                       style={styles.headerNewsCon}
                                       imageStyle={{ borderRadius: 8}}>
                <View style={styles.headerBackground}></View>
                <View style={styles.headerTitle}>
                    <Text style={styles.text}>{this.props.title}</Text>
                    <Text style={styles.text}>{this.props.date} | Credit : {this.props.credit} </Text> 
                </View>  
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    headerNewsCon:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        marginLeft:25,
        marginRight:25,
        marginBottom:15,
        resizeMode: 'cover',
        height:220,
    },
    headerBackground:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'blue',
        height:45,
        opacity:.3,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8
    },
    headerTitle:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        paddingLeft:5,
        bottom:0
    },
    text:{
        fontSize:12,
        color:'#ffffff',
        fontWeight:'800',
    }
   
});