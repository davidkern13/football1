import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import Group from '../components/table/GroupTable.js';

export default class TablesScreen extends React.Component {

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
            <ScrollView>
                <View style={styles.container}>    
                    <Group group='A' place1='Bolivia' place2='Brazil' place3='Peru' place4='Venezuela'/>
                    <Group group='B' place1='Bolivia' place2='Brazil' place3='Peru' place4='Venezuela'/>
                    <Group group='C' place1='Bolivia' place2='Brazil' place3='Peru' place4='Venezuela'/>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});