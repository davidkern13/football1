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

    /*
    *  Write to the content the news withour first(main) item
    */
    writeEachNews(AllNews){
        //remove the first position from array
        this.state.news.shift();

       return AllNews.map((eachOne,i)=>{
            return ( <EachNews key={i} title={eachOne.title.substring(0,40)} date={eachOne.date} img={eachOne.img} author={eachOne.author}/> )
        })
    }
    render() {
        const { news, firstNews} = this.state;

        return (
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    {/*<EachNews />*/}
                        {
                            news === null
                                ?
                                <Text>Loading</Text>
                                :
                                <View>
                                    {/*main news*/}
                                    <Text style={{marginLeft:25,marginBottom:7,marginTop:20,color:'#bdbdbd',fontWeight:'700'}}>News Feed</Text>
                                    <MainNews title={firstNews.title.substring(0,40)} date={firstNews.date} img={firstNews.img} credit={firstNews.author} />
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
    container: {

        display:'flex',
        flexDirection:'column',
        backgroundColor: '#f4f4f4',
    },
});