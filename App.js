import React from 'react'
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import store from './project/store/store';

import { AppNavigator } from './project/src/navigators';
import SplashScreen from './project/screens/SplashScreen';
import { getStartedData } from './project/api/api';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            animating: false,
            align: 'center',
            alignsecond: false,
        };

    }

    componentDidMount(){

        setTimeout(() =>
            {
                this.setState({
                    alignsecond: true
                })
            },
            1000);
    }

    render() {
        return (
           this.state.alignsecond
               ?
               <Provider store={store}>
                   <AppNavigator />
               </Provider>
               :
               <SplashScreen />

        );
    }
}
