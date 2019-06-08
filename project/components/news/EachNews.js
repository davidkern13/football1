import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Image ,ScrollView} from 'react-native';
import { black } from 'ansi-colors';


export default class EachNews extends React.Component {
    
    render() {
        return (
            <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.top}>Neymar OUT of Copa America 2019 after Brazil star suffers ankle injury</Text>
                        <Text style={styles.center}>fdgfdg dsfdb fgh fdgnkbdgjkbdgjkbfd fdkgbffdgf kdbgjkfd fdkg</Text>
                        <Text style={styles.bottomCon}>07 June 2019 | Credit BBC </Text>
                    </View>
                    <View style={styles.ImageContainer}>
                            <Image style={{resizeMode: 'cover',flex:1, borderTopRightRadius:8, borderBottomRightRadius:8,}}
                                   source={{uri: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t31.0-8/1048631_623435157666850_2043591227_o.jpg?_nc_cat=108&_nc_ht=scontent.ftlv4-1.fna&oh=59f76406cec832833d068b30ca25f6c0&oe=5D9551DB'}}/>
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