import React from 'react';
import PersonStat from './PersonStat';
import {View, Text, TouchableOpacity, ListView, StyleSheet, ActivityIndicator, ScrollView, Image} from 'react-native';

import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    DrawerActions
} from 'react-navigation';

import TopAsists from '../scorers/TopAsists';
import TopYelloCard from '../scorers/TopYelloCard';
import TopRedCard from '../scorers/TopRedCard';
import Player from '../players/Player';

class Scorer extends React.Component {

    constructor() {
        super();
        this.state = {
            scorer:null
        };
    }

    componentDidMount(){
        fetch('https://bigfiveplus.com/scorers-api/copa-america', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>this.setState({
            scorer:res.topPlayersList
        }))
    }

    clickedItemText( clickedItem ) {
        this.props.navigation.navigate('Item', { item: clickedItem });
    }

    find(stats){
        return stats.map((player,i)=>{
            return (
                <TouchableOpacity  onPress = { this.clickedItemText.bind( this, player ) } key={i}>
                    <PersonStat rank={player.position}
                                playerName={player.name}
                                playerImg={player.club_img}
                                nationalTeam={player.country.toString()}
                                statNum={player.goals}
                                backgroundColor={i%2!==0?'#f4f4f4':'#ffffff'}
                    />
                </TouchableOpacity>
            )
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
                                <Text style={styles.titleText}>Goals</Text>
                            </View>
                        </View>
                        {
                            scorer === null
                                ?
                                <PersonStat rank='-' playerName='-' statNum='-'/>
                                :
                                this.find(scorer)
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const TabScreen = createMaterialTopTabNavigator(
    {
        Scorers: { screen: Scorer },
        Assists: { screen: TopAsists },
        Yellow: { screen: TopYelloCard },
        Red: { screen: TopRedCard },
    }
)

export default App = createStackNavigator(
    {
        TabScreen: {
            screen: TabScreen,
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#fff',
                },
                tabBarOptions: {
                    labelStyle: {
                        fontSize: 10,
                        margin: 0,
                        padding: 0,
                    },
                },
                headerBackground: (
                    <Image
                        style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                        source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                        resizeMode="cover"
                    />
                ),
                headerTintColor: '#FFFFFF',
                title: 'Players Statistics',
                // header: ({ goBack }) => ({
                //     left: <Left onPress={goBack} />,
                // }),
                headerLeft: <TouchableOpacity  onPress={()=> navigation.openDrawer()}><Image  source={{uri: "https://img.icons8.com/color/48/ffffff/menu.png"}}
                                                                                              resizeMode="contain"
                                                                                              style={{ width: 24, height: 24, left: 15 }}
                /></TouchableOpacity>
            }),

        },
        List: {
            screen: Scorer,
        },
        Item: {
            screen: Player
        }
    }
);

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
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#ffffff',
        borderRadius:8,
        elevation:1,
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