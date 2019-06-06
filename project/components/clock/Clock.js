import React from 'react';
import {Platform, Button, StyleSheet, Text, View, StatusBar ,Image} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isClicked:false,
          secs:60,
          mins:45,
          hours:11,
          days:16,
          title:['Open','Close']
        };
      }
    
      componentDidMount(){
        const {secs,mins,hours,days}=this.state;
       let s=secs,
           m=mins,
           h=hours,
           d=days;
    
          setInterval(()=>{  
            s-- ;
            this.setState({secs:s,
                           mins:m,
                           hours:h,
                           days:d})
           switch (s) {
             case 0:
               s=60;
               m--;
               break;
             default:
               break;
          };
          switch (m) {
            case 0:
              m=59;
              h--;
              break;
            default:
              break;
          };
          switch (h) {
            case 0:
              h=23;
              d--;
              break;
          
            default:
              break;
          }
    
          }, 1000);
        }
      openNavbar=()=>{
        !this.state.isClicked? this.setState({isClicked:true}): this.setState({isClicked:false})  
      }
    render() {
        const { secs,mins,hours,days }= this.state;
        return (
                <View style={styles.clockContainer}>
                <View style={styles.clockHour}>
                  <Text style={styles.clockFont}>{days}</Text>
                  <Text style={styles.clockFont}>Days</Text>
                </View>
                <View style={styles.clockHour}>
                  <Text style={styles.clockFont}>{hours}</Text>
                  <Text style={styles.clockFont}>Hours</Text>
                </View>
                <View style={styles.clockHour}>
                  <Text style={styles.clockFont}>{mins}</Text>
                  <Text style={styles.clockFont}>Mins</Text>
                </View>
                <View style={styles.clockHour}>
                  <Text style={styles.clockFont}>{secs}</Text>
                  <Text style={styles.clockFont}>Secs</Text>
                </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    clockContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height:100,
      },
      clockHour:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        backgroundColor:'green',
        borderColor:'white',
        borderRadius:7,
      },
      clockFont:{
        fontSize:20,
        color:'white',
      }
   
});