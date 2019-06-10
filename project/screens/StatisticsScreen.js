import React from 'react';
import {Text, View} from "react-native";

export default class StatisticsScreen extends React.Component {

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
            <View>
                <Text>Statistics</Text>
            </View>
        );
    }
}