import React from 'react';
import {Platform, Button, StyleSheet, Text, View, Image ,ScrollView} from 'react-native';
import { black } from 'ansi-colors';


export default class EachNews extends React.Component {
    
    render() {

        let { title, content, date, author, img } = this.props;

        return (
            <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.top}>{title}</Text>
                        <Text style={styles.center}>{content}</Text>
                        <Text style={styles.bottomCon}>{date} | Credit {author} </Text>
                    </View>
                    <View style={styles.ImageContainer}>
                            <Image style={styles.image}
                                   source={{uri: img}}/>
                    </View>
                    
                    </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft:20,
        marginRight:20,
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
        borderRadius:8,
        height:110,
    },
    content:{
        display:'flex',
        backgroundColor:'#ffffff',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flexBasis:'65%',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        paddingLeft:10,
        paddingRight:5,
    },
    image:{
        resizeMode: 'cover',
        flex:1, 
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
    },
    top:{
        color:'black',
        fontWeight:'600',
        fontSize:12
    },
    center:{
        fontSize:11,
        color:'gray',
    },
    bottomCon:{
        color:'lightgray',
        borderBottomLeftRadius:8,
        fontSize:11
    },
    ImageContainer:{
        flexBasis:'35%',
        borderTopRightRadius:8,
    },
   
});