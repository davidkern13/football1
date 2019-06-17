import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Group extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.groupContainer}>
                    <Text style={styles.text}>{this.props.group}</Text>
                </View>
                <View style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                    <View style={[styles.containerTop,styles.flexRowBetween]}>
                        <View style={[styles.wrapContainerTableRowTeam, styles.flexRowBetween]}>
                            <Text style={styles.titleTableRowTeam}>-</Text>
                            <Text style={styles.titleTableRowTeam}>Team</Text>
                        </View>
                        <View style={[styles.wrapContainerTableRow, styles.flexRowBetween]}>
                            <Text style={styles.titleTableRow}>W</Text>
                            <Text style={[styles.titleTableRow,styles.titleTableRowDraw]}>D</Text>
                            <Text style={[styles.titleTableRow,styles.titleTableRowLost]}>L</Text>
                            <Text style={[styles.titleTableRow,styles.titleTableRowGF]}>GF</Text>
                            <Text style={styles.titleTableRow}>GA</Text>
                            <Text style={styles.titleTableRow}>P</Text>
                        </View>
                    </View>
                    <View style={styles.teamsContainer}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        marginTop:20,
        backgroundColor:'#f4f4f4',
    },
    groupContainer:{
        backgroundColor:'#f4f4f4',
        marginBottom:10
    },
    titleTableRowTeam : {
        color:'#a1a1a1',
        fontSize:13,
        fontWeight:'100',
    },
    titlePosRowTeam : {
        width:12,
    },
    wrapContainerTableRowTeam : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flexBasis:'15%',
        paddingLeft:7,
    },
    wrapContainerTableRow : {
        display:'flex',
        justifyContent:'space-between',
        flexBasis:'40%',
        marginRight:3,
    },
    containerTop:{
        alignItems:'center',
        height:30,
        color:'gray',
        backgroundColor:'#ffffff',
        fontSize:16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text:{
        fontSize: 13,
        color:'#bdbdbd',
        fontWeight:'500',
    },
    titleTableRow: {
        fontSize:11,
        textAlign:'center',
        fontWeight:'400',
        flexBasis:'15%',
        color:'#a1a1a1',
    },
    // titleTableRowLost:{
    //     marginLeft:7,
    // },
    // titleTableRowDraw:{
    //     marginLeft:2,
    // },
    // titleTableRowGF:{
    //     marginLeft:4,
    // },
    // titleTableRowPoints:{
    //     fontSize:11,
    //     color:'#a1a1a1',
    //     fontWeight:'400',
    //     textAlign:'center',        
    //     marginRight:2,
    // },
    teamsContainer:{
        display:'flex',
        flexDirection:'column',
    },
    flexRowBetween : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
});