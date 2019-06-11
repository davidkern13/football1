import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import EachNews from '../components/news/EachNews';
import FirstNews from '../components/news/FirstNews';


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

    find(AllNews){
        this.state.news.shift();

       return AllNews.map((eachOne,i)=>{
            return ( <EachNews key={i} header={eachOne.title} date={eachOne.date} img={eachOne.img} author={eachOne.author}/> )
        })
    }
    render() {
        const { news, firstNews} = this.state;

        return (
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <Text style={{marginLeft:25,marginBottom:7,marginTop:20,color:'#bdbdbd',fontWeight:'700'}}>News Feed</Text> 
                    <FirstNews title={firstNews.title} date={firstNews.date} img={firstNews.img} credit={firstNews.author} />
                        {
                            news === null ? <EachNews /> : this.find(news) 
                        }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        display:'flex',
        flexDirection:'column',
        backgroundColor: '#f4f4f4',
    },
});