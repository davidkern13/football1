import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import EachNews from '../components/news/EachNews';


export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {}

    }

    componentDidMount() {
        //call here the method of api from redux
    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <Text style={{marginLeft:25,marginBottom:7,marginTop:20,color:'#bdbdbd',fontWeight:'700'}}>News Feed</Text>
                        <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSivOK2Nr_IjteuJ8FXos66kz8sTS43iu-o-T8QsTH0bmm212cw'}}
                                         style={styles.headerNewsCon}
                                         imageStyle={{ borderRadius: 8}}>
                            <View style={styles.headerBackground}></View>
                            <View style={styles.headerTitle}>
                                <Text style={styles.text}>The Argentine National Team roster was awarded with the return of Messi</Text>
                                <Text style={styles.text}>10 June 2019 | Credit : BBC </Text> 
                            </View>  
                        </ImageBackground>
                    <EachNews />
                    <EachNews />
                    <EachNews />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        backgroundColor: '#f4f4f4',
    },
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