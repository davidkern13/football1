import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import axios from "axios";

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {}

    }

    componentDidMount() {
        //call here the method of api from redux

        // fetch('https://bigfiveplus.com/standings-tables-api/copa-america')
        // // If the response is not within a 500 (according to Fetch docs) our promise object
        // // will _eventually_ resolve to a response.
        //     .then(res => {
        //
        //         console.log('------res-----11----', res);
        //
        //         // Let's also check the headers to make sure that the server "reckons" its serving
        //         //up json
        //
        //     })
        //     // Fulfilling these conditions lets return the data. But how do we get it out of the promise?
        //     .then(data => {
        //         // Using the function we passed to our original function silly! Since we've error
        //         // handled above, we're ready to pass the response data as a callback.
        //
        //     })
        //     // Fetch's promise will throw an error by default if the webserver returns a 500
        //     // response (as notified by the response code in the HTTP header).
        //     .catch(err => console.error(err));


    }

    render() {
        return (
            <View style={ styles.container }>
                <Image source={require('../img/splash.png')} style={styles.backgroundImage} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});


// const mapStateToProps = state =>{
//     return {
//         tables: state.setTablesDataApi.tables,
//     }
// }
//
// const mapDispatchToProps = {
//     setTables,
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(SplashScreen);
