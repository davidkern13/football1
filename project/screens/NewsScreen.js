import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import EachNews from '../components/news/EachNews';
import MainNews from '../components/news/MainNews';


export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          news:null ,
          firstNews:'',
        }
    }
    
    componentDidMount(){
        
        fetch('http://bigfiveplus.com/get-all-new-copa-america', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>
            this.setState({
                news:res,
                firstNews:res[0]}))
    }

    writeEachNews(AllNews){
      
        this.state.news.shift();

       return AllNews.map((eachOne,i)=>{
            return ( <EachNews key={i} title={eachOne.title} 
                               date={eachOne.date.substring(0,17)} img={eachOne.img} author={eachOne.author}
                               content={eachOne.description.substring(0,60)+'...'}/> )
        })
    }
    render() {
        const { news, firstNews} = this.state;

        return (
        <ScrollView style={styles.scrollWrap}>
                <View style={styles.container}>
                    {/*<EachNews />*/}
                        {
                            news === null
                                ?
                                <Text style={styles.loadingText}>Loading...</Text>
                                :
                                <View>
                                    {/*main news*/}
                                    <Text style={styles.newFeedText}>News Feed</Text>
                                    <MainNews title={firstNews.title}
                                              date={firstNews.date.substring(0,17)} 
                                              img={firstNews.img} credit={firstNews.author}
                                              content={firstNews.description.substring(0,60)+'...'} />
                                    {/*each news*/}
                                    {this.writeEachNews(news)}
                                </View>
                        }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollWrap:{
        flex:1, 
        backgroundColor: '#f4f4f4'
    },
    container: {
        display:'flex',
        flexDirection:'column',
    },
    loadingText:{
        fontSize:20,
        color:'green',
    },
    newFeedText:{
        marginLeft:25,
        marginBottom:7,
        marginTop:20,
        color:'#bdbdbd',
        fontWeight:'700'
    }
});