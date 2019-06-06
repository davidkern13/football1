import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import EachNews from '../components/news/EachNews';


export default class NewsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            //Heading/title of the header
            title: navigation.getParam('Title'),
            //Heading style
            headerStyle: {
                backgroundColor: navigation.getParam('BackgroundColor', 'red'),
            },
            //Heading text color
            headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
            headerRight: (
                <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
                    <Text
                        style={{
                            color: 'white',
                        }}>
                        Right Menu
                    </Text>
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
                    <Text
                        style={{
                            color: 'white',
                        }}>
                        Left Menu
                    </Text>
                </TouchableOpacity>
            ),
        };
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
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
        backgroundColor: 'lightgray',
    },
});