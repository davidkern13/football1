import React from 'react';
import {Image, Text , View, StyleSheet, ScrollView, ImageBackground} from "react-native";

import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    DrawerActions
} from 'react-navigation';

export default class EachPlayer extends React.Component {

    constructor() {
        super();
        this.state = {
            test: null
        };
    }

    static navigationOptions =
        {
            title: 'Player',
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerStyle: {height: 100},
            headerTintColor: '#FFFFFF',
        };

    render() {

       console.log(this.props.navigation.state.params.item);
        return(
        <ScrollView style={{ flex:1,backgroundColor:'#f3f4f8'}}>
            <View style={styles.container}>
                <View style={styles.headerDataContainer}>
                {/* <ImageBackground source={require('../img/back.png')} resizeMode="contain" style={styles.headerDataContainer}> */}
                    <View style={styles.personPlayerData}>
                        <Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg'}}
                                style={styles.playerImg}/>
                        <Text style={styles.playerName}>{this.props.navigation.state.params.item.name}</Text>
                        <Text style={styles.playerRole}>Forward</Text>
                    </View>
                {/* </ImageBackground>   */}
                </View>
                <View style={styles.playerTeamContainer}>
                    <View style={styles.playerTeamRow}>
                        <Text style={{color:'#a1a1a1',fontWeight:'700'}}>Teams</Text>
                    </View>
                    <View style={[styles.playerTeamRow,styles.grayBackground]}>
                        <Image source={{uri:'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4e7.png'}}
                               style={styles.playerTeamImg}/>
                        <Text>Manchester United</Text>
                    </View>
                    <View style={styles.playerTeamRow}>
                        <Image source={{uri:'https://banner2.kisspng.com/20180716/isp/kisspng-france-national-football-team-2018-world-cup-frenc-5b4d067312f889.0774670415317745790777.jpg'}}
                               style={styles.playerTeamImg}/>
                        <Text>France</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statRow}>
                        <Text style={{color:'#a1a1a1',fontWeight:'700'}}>Player Statistics</Text>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Number</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Apearances</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>6</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Minutes</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>257</Text>
                        </View>
                    </View>
                    <View style={[styles.statRow,styles.grayBackground]}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Goals</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Penalty Goals</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>1</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Assists</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>23</Text>
                        </View>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Shots</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Shots On Target</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>1.4</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Tackles</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>17</Text>
                        </View>
                    </View>
                    <View style={[styles.statRow,styles.grayBackground]}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Passes</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>3.6</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Goals Per Match</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>2.4</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Clearances</Text>
                            <Text style={{color:'black',fontWeight:'700'}}>7</Text>
                        </View>
                    </View>
                </View> 
            </View> 
        </ScrollView>        
        );
    }
}
const styles = StyleSheet.create({
  container:{
      display:'flex',
      flexDirection:'column',
      paddingBottom:30,
  },
  headerDataContainer:{
      backgroundColor:'black',
      height:200,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      elevation:1
  },
  personPlayerData:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
},
  playerImg:{
      borderRadius:100,
      height:110,
      width:110,
      marginBottom:10,
  },
  playerName:{
      color:'white',
      fontSize:18
  },
  playerRole:{
      color:'white'
  },
  playerTeamContainer:{
      margin:20,
      display:'flex',
      flexDirection:'column',
      borderRadius:10,
      elevation:1
  },
  playerTeamRow:{
      height:55,
      backgroundColor:'#ffffff',
      paddingLeft:20,
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  playerTeamImg:{
      height:30,
      width:30,
      borderRadius:100,
      marginRight:10
  },
  statsContainer:{
      margin:20,
      marginTop:5,
      display:'flex',
      flexDirection:'column',
      borderRadius:10,
      elevation:1
  },
  statRow:{
      height:55,
      backgroundColor:'#ffffff',
      paddingLeft:10,
      paddingRight:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
  },
  eachCategoryBox:{
      height:50,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      flexBasis:'33%'
  },
  categoryTitle:{
      color:'#a1a1a1'
  },
  grayBackground:{
      backgroundColor:'#f3f4f8'
  }
});