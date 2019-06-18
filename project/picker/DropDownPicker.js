import React from 'react';
import {StyleSheet, View, Picker} from 'react-native';

export default class DropDownPicker extends React.Component {

    constructor(props) {
        super(props);

        /* default state */
        this.state = {
            currentRound: 1
        }
    }

    _selectedRound(round){

        // fetch('https://bigfiveplus.com/competition/copa-america/get-rounds/' + round, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(res=>res.json())
        //     .then(res=>this.setState({ todayGameList:res }))


        //set value to store state, call to redux

    }

    render() {

        let { currentRound } = this.props;

        return (
            <View style={styles.dropDownContainer}>
                <Picker selectedValue={currentRound}
                        mode='dropdown'
                        style={styles.pickerStyle}
                        onValueChange={itemValue => {
                           //function updated the selected value in redux
                            this._selectedRound(itemValue);
                        }}>


                </Picker>

                <View>
                    <Picker.Item label="1st Round - 2019-06-15/2019-06-17" value="1"/>
                    <Picker.Item label="2nd Round - 2019-06-15/2019-06-17" value="2" />
                    <Picker.Item label="3rd Round - 2019-06-15/2019-06-17" value="3" />
                    <Picker.Item label="Quarter Final - 2019-06-15/2019-06-17" value="Quarter Finals" />
                    <Picker.Item label="Semi Final - 2019-06-15/2019-06-17" value="Semi Finals" />
                    <Picker.Item label="3rd place - 2019-06-15" value="3rd place" />
                    <Picker.Item label="Final - 2019-06-15" value="Final" />
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    containerPerMatch:{
        marginBottom:15,
    },
    dropDownContainer:{
        backgroundColor:'#ffffff',
        elevation:.4,
        paddingLeft:30,
        paddingRight:30,
        position:'absolute',
        top:0,
        width:'100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    pickerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // width:width,
        height:40,
    }
});