import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import EachNews from '../components/news/EachNews';


export default class NewsScreen extends React.Component {

    // constructor(props) {
    //     super(props);

    //     /* default state */
    //     this.state = {
    //         data:'',
    //         data1:'',
    //         data2:'',
    //         data3:'',
    //         data4:'',
    //         data5:'',
    //         data6:'',
    //         data7:'',
    //         data8:'',
    // }

    // }

    // componentDidMount() {
    //     fetch('http://bigfiveplus.com/get-all-new-copa-america')
    //     .then(res=>res.json())
    //     .then(res=>this.setState({
    //         data:res[0],
    //         data1:res[1],
    //         data2:res[2],
    //         data3:res[3],
    //         data4:res[4],
    //         data5:res[5],
    //         data6:res[6],
    //         data7:res[7],
    //         data8:res[8],
    //     }))
    // }

    render() {
        const { data,data1,data2,data3,data4,data5,data6,data7,data8
         } = this.state;
        // console.log(this.state.data2)
    //    data.map(dat=>console.log(dat))

        return (
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <Text style={{marginLeft:25,marginBottom:7,marginTop:20,color:'#bdbdbd',fontWeight:'700'}}>News Feed</Text>
                        <ImageBackground source={{uri:data.img}}
                                         style={styles.headerNewsCon}
                                         imageStyle={{ borderRadius: 8}}>
                            <View style={styles.headerBackground}></View>
                            <View style={styles.headerTitle}>
                                <Text style={styles.text}>{data.title}</Text>
                                <Text style={styles.text}>{data.date} | Credit : BBC </Text> 
                            </View>  
                        </ImageBackground>
                      
                    {/* <EachNews date={data1.date} img={data1.img} header={data1.title} />
                    <EachNews date={data2.date} img={data2.img} header={data2.title} />
                    <EachNews date={data3.date} img={data3.img} header={data3.title} />
                    <EachNews date={data4.date} img={data4.img} header={data4.title} />
                    <EachNews date={data5.date} img={data5.img} header={data5.title} />
                    <EachNews date={data6.date} img={data6.img} header={data6.title} />
                    <EachNews date={data7.date} img={data7.img} header={data7.title} />
                    <EachNews date={data8.date} img={data8.img} header={data8.title} /> */}
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