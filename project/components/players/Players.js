// import React from 'react';
// import {Image, Text , View, StyleSheet, ScrollView,ImageBackground} from "react-native";

// import {
//     createDrawerNavigator,
//     createStackNavigator,
//     createAppContainer,
//     createBottomTabNavigator,
//     createMaterialTopTabNavigator,
//     DrawerActions
// } from 'react-navigation';

// export default class Player extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             test: null
//         };
//     }

//     static navigationOptions =
//         {
//             title: 'Player',
//             headerBackground: (
//                 <Image
//                     style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
//                     source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
//                     resizeMode="cover"
//                 />
//             ),
//             headerStyle: {height: 50},
//             headerTintColor: '#FFFFFF',
//         };

//     render() {

//        console.log(this.props.navigation.state.params.item);
//         return(
//         <ScrollView style={styles.scrollViewWrap}>
//             <View style={styles.container}>
//                 <ImageBackground source={require('../../img/field_001.png')} resizeMode="cover" style={styles.headerDataContainer}>
//                     <View style={styles.personPlayerData}>
//                         <Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg'}}
//                                 style={styles.playerImg}/>
//                         <Text style={styles.playerName}>{this.props.navigation.state.params.item.name}</Text>
//                         <Text style={styles.playerRole}>Forward</Text>
//                     </View>
//                 </ImageBackground>  
//                 <View style={styles.playerTeamContainer}>
//                     <View style={[styles.playerTeamRow,styles.radiusTop]}>
//                         <Text style={styles.grayTextTitle}>Teams</Text>
//                     </View>
//                     <View style={[styles.playerTeamRow,styles.grayBackground]}>
//                         <Image source={{uri:'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4e7.png'}}
//                                style={styles.playerTeamImg}/>
//                         <Text>Manchester United</Text>
//                     </View>
//                     <View style={[styles.playerTeamRow,styles.radiusBottom]}>
//                         <Image source={{uri:'https://banner2.kisspng.com/20180716/isp/kisspng-france-national-football-team-2018-world-cup-frenc-5b4d067312f889.0774670415317745790777.jpg'}}
//                                style={styles.playerTeamImg}/>
//                         <Text>France</Text>
//                     </View>
//                 </View>
//                 <View style={styles.statsContainer}>
//                     <View style={[styles.statRow,styles.radiusTop]}>
//                         <Text style={styles.grayTextTitle}>Player Statistics</Text>
//                     </View>
//                     <View style={styles.statRow}>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Number</Text>
//                             <Text style={styles.playerCategoryStat}>7</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Apearances</Text>
//                             <Text style={styles.playerCategoryStat}>6</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Minutes</Text>
//                             <Text style={styles.playerCategoryStat}>257</Text>
//                         </View>
//                     </View>
//                     <View style={[styles.statRow,styles.grayBackground]}>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Goals</Text>
//                             <Text style={styles.playerCategoryStat}>7</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Penalty Goals</Text>
//                             <Text style={styles.playerCategoryStat}>1</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Assists</Text>
//                             <Text style={styles.playerCategoryStat}>23</Text>
//                         </View>
//                     </View>
//                     <View style={styles.statRow}>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Shots</Text>
//                             <Text style={styles.playerCategoryStat}>7</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Shots On Target</Text>
//                             <Text style={styles.playerCategoryStat}>1.4</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Tackles</Text>
//                             <Text style={styles.playerCategoryStat}>17</Text>
//                         </View>
//                     </View>
//                     <View style={[styles.statRow,styles.grayBackground,styles.radiusBottom]}>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Passes</Text>
//                             <Text style={styles.playerCategoryStat}>3.6</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Goals Per Match</Text>
//                             <Text style={styles.playerCategoryStat}>2.4</Text>
//                         </View>
//                         <View style={styles.eachCategoryBox}>
//                             <Text style={styles.categoryTitle}>Clearances</Text>
//                             <Text style={styles.playerCategoryStat}>7</Text>
//                         </View>
//                     </View>
//                 </View> 
//             </View> 
//         </ScrollView>        
//         );
//     }
// }
// const styles = StyleSheet.create({
//     scrollViewWrap:{
//       flex:1,
//       backgroundColor:'#f3f4f8'
//     },  
//   container:{
//       display:'flex',
//       flexDirection:'column',
//       paddingBottom:30,
//   },
//   headerDataContainer:{
//       backgroundColor:'black',
//       height:200,
//       display:'flex',
//       flexDirection:'column',
//       justifyContent:'center',
//       alignItems:'center',
//       marginBottom:20,
//   },
//   grayTextTitle:{
//       color:'#a1a1a1',
//       fontWeight:'400'
//   },
//   personPlayerData:{
//       display:'flex',
//       flexDirection:'column',
//       alignItems:'center'
// },
//   playerImg:{
//       borderRadius:100,
//       height:100,
//       width:100,
//       marginBottom:10,
//   },
//   playerName:{
//       color:'#ffffff',
//       fontSize:16
//   },
//   playerRole:{
//       color:'black'
//   },
//   playerTeamContainer:{
//       margin:20,
//       display:'flex',
//       flexDirection:'column',
//       borderRadius:10,
//       elevation:.7
//   },
//   playerTeamRow:{
//       height:60,
//       backgroundColor:'#ffffff',
//       paddingLeft:20,
//       display:'flex',
//       flexDirection:'row',
//       alignItems:'center'
//   },
//   playerTeamImg:{
//       height:30,
//       width:30,
//       borderRadius:100,
//       marginRight:10
//   },
//   statsContainer:{
//       margin:20,
//       marginTop:5,
//       display:'flex',
//       flexDirection:'column',
//       borderRadius:8,
//       elevation:.7
//   },
//   statRow:{
//       height:55,
//       backgroundColor:'#ffffff',
//       paddingLeft:10,
//       paddingRight:10,
//       display:'flex',
//       flexDirection:'row',
//       alignItems:'center',
//       justifyContent:'space-between'
//   },
//   eachCategoryBox:{
//       height:50,
//       display:'flex',
//       flexDirection:'column',
//       justifyContent:'center',
//       alignItems:'center',
//       flexBasis:'33%'
//   },
//   categoryTitle:{
//       color:'#a1a1a1'
//   },
//   grayBackground:{
//       backgroundColor:'#f3f4f8'
//   },
//   playerCategoryStat:{
//       color:'black',
//       fontWeight:'700'
//   },
//   radiusTop:{
//       borderTopLeftRadius:8,
//       borderTopRightRadius:8
//   },
//   radiusBottom:{
//       borderBottomLeftRadius:8,
//       borderBottomRightRadius:8
//   }
// });



// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class Group extends React.Component {

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.groupContainer}>
//                     <Text style={styles.text}>{this.props.group}</Text>
//                 </View>
//                 <View style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
//                     <View style={[styles.containerTop,styles.flexRowBetween]}>
//                         <View style={[styles.wrapContainerTableRowTeam, styles.flexRowBetween]}>
//                             <Text style={styles.titleTableRowTeam}>-</Text>
//                             <Text style={styles.titleTableRowTeam}>Team</Text>
//                         </View>
//                         <View style={[styles.wrapContainerTableRow, styles.flexRowBetween]}>
//                             <Text style={styles.titleTableRow}>W</Text>
//                             <Text style={[styles.titleTableRow,styles.titleTableRowDraw]}>D</Text>
//                             <Text style={[styles.titleTableRow,styles.titleTableRowLost]}>L</Text>
//                             <Text style={[styles.titleTableRow,styles.titleTableRowGF]}>GF</Text>
//                             <Text style={styles.titleTableRow}>GA</Text>
//                             <Text style={styles.titleTableRow}>P</Text>
//                         </View>
//                     </View>
//                     <View style={styles.teamsContainer}>
//                         {this.props.children}
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         display:'flex',
//         marginTop:20,
//         backgroundColor:'#f4f4f4',
//     },
//     groupContainer:{
//         backgroundColor:'#f4f4f4',
//         marginBottom:10
//     },
//     titleTableRowTeam : {
//         color:'#a1a1a1',
//         fontSize:13,
//         fontWeight:'100',
//     },
//     titlePosRowTeam : {
//         width:12,
//     },
//     wrapContainerTableRowTeam : {
//         display:'flex',
//         flexDirection:'row',
//         justifyContent:'space-around',
//         flexBasis:'15%',
//         paddingLeft:7,
//     },
//     wrapContainerTableRow : {
//         display:'flex',
//         justifyContent:'space-between',
//         flexBasis:'40%',
//         marginRight:3,
//     },
//     containerTop:{
//         alignItems:'center',
//         height:30,
//         color:'gray',
//         backgroundColor:'#ffffff',
//         fontSize:16,
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//     },
//     text:{
//         fontSize: 13,
//         color:'#bdbdbd',
//         fontWeight:'500',
//     },
//     titleTableRow: {
//         fontSize:11,
//         textAlign:'center',
//         fontWeight:'400',
//         flexBasis:'15%',
//         color:'#a1a1a1',
//     },
//     // titleTableRowLost:{
//     //     marginLeft:7,
//     // },
//     // titleTableRowDraw:{
//     //     marginLeft:2,
//     // },
//     // titleTableRowGF:{
//     //     marginLeft:4,
//     // },
//     // titleTableRowPoints:{
//     //     fontSize:11,
//     //     color:'#a1a1a1',
//     //     fontWeight:'400',
//     //     textAlign:'center',        
//     //     marginRight:2,
//     // },
//     teamsContainer:{
//         display:'flex',
//         flexDirection:'column',
//     },
//     flexRowBetween : {
//         display:'flex',
//         flexDirection:'row',
//         justifyContent:'space-between'
//     }
// });



// import React from 'react';
// import {Button, StyleSheet, Text, View, Image,} from 'react-native';

// export default class TeamRow extends React.Component {
//     render() {

//         let { position, teamLogo, place, win, draw, lose, 
//             goalsFor,goalsAgainst, points,
//             backgroundColor,elevation,
//             borderBottomLeftRadius,borderBottomRightRadius } = this.props;

//         return (
//             <View style={{
//                 display:'flex',
//                 justifyContent:'space-between',
//                 paddingRight:5,
//                 paddingLeft:5,
//                 alignItems:'center',
//                 flexDirection:'row',
//                 height:45,
//                 backgroundColor,
//                 elevation,
//                 borderBottomLeftRadius,
//                 borderBottomRightRadius
//             }}>
//                 <View style={styles.teamPlaceContainer}>
//                     <Text style={styles.placeNum}>{position}</Text>
//                     <View style={styles.teamDataContainer}>
//                         <Image style={styles.teamLogo} source={{uri : teamLogo}}/>
//                         <Text style={styles.teamName}>{place}</Text>
//                     </View>
//                 </View>
//                 <View style={styles.teamStats}>
//                     <Text style={styles.points}>{win}</Text>
//                     <Text style={styles.points}>{draw}</Text>
//                     <Text style={styles.points}>{lose}</Text>
//                     <Text style={styles.points}>{goalsFor}</Text>
//                     <Text style={styles.points}>{goalsAgainst}</Text>
//                     <Text style={[styles.points,styles.boldWeight]}>{points}</Text>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
 
//     teamPlaceContainer:{
//         display:'flex',
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//         color:'black',
//     },
//     teamDataContainer:{
//         display:'flex',
//         flexDirection:'row',
//         alignItems:'center'
//     },
//     teamStats:{
//         display:'flex',
//         flexDirection:'row',
//         color:'black',
//         flexBasis:'40%',
//         justifyContent:'space-between',
//     },
//     teamLogo: {
//         width: 24,
//         height: 24,
//         borderRadius: 100,
//         marginRight:8
//     },
//     placeNum:{
//         fontSize:13,
//         marginRight:15,
//         textAlign:'center',
//         fontWeight:'700'
//     },
//     points:{
//         fontSize:11,
//         textAlign:'center',
//         fontWeight:'400',
//         flexBasis:'15%'
//     },
//     teamName:{
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         width:'auto',
//         fontSize:13,
//         fontWeight:'100'
//     },
//     boldWeight:{
//         fontWeight:'700'
//     }
// });