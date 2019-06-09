import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Image ,ScrollView} from 'react-native';
import { black } from 'ansi-colors';


export default class EachNews extends React.Component {
    
    render() {
        return (
            <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.top}>{this.props.header}</Text>
                        <Text style={styles.center}>{this.props.content}</Text>
                        <Text style={styles.bottomCon}>{this.props.date} | Credit {this.props.credit} </Text>
                    </View>
                    <View style={styles.ImageContainer}>
                            <Image style={{resizeMode: 'cover',flex:1, borderTopRightRadius:8, borderBottomRightRadius:8,}}
                                   source={{uri: this.props.img}}/>
                    </View>
                    
                    </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft:25,
        marginRight:25,
        display:'flex',
        flexDirection:'row',
        marginBottom:20,
        borderRadius:8,
        height:110,
    },
    content:{
        display:'flex',
        backgroundColor:'#ffffff',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flexBasis:'70%',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        paddingLeft:10,
        paddingRight:5,
    },
    top:{
        color:'black',
        fontWeight:'600',
        fontSize:13
    },
    center:{
        fontSize:12,
        color:'gray',
    },
    bottomCon:{
        color:'lightgray',
        borderBottomLeftRadius:8,
        fontSize:12
    },
    ImageContainer:{
        flexBasis:'30%',
        borderTopRightRadius:8,
    },
   
});