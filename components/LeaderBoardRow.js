import React, {Component} from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';
import {selectRoom} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


const arrowUp = (<Icon name="arrow-up" size={20} color="green" />);
const arrowDown = (<Icon name="arrow-down" size={20} color="red" />);
const trophy = (<Icon name="trophy" size={25} color="gold" />);

const mapDispatchToProps = dispatch => ({
  selectRoom:   (roomId)   => dispatch(selectRoom(roomId))
});

 const LeaderBoardRow = props => (
     <View style={styles.container}>
         <View style={styles.trophy} >
             <Text>{props.room.id == "1" && trophy} </Text>
         </View>
         <Text style={styles.text}>{props.room.id+". "}</Text>
         <Text style={[styles.roomNumber, styles.text]} onPress={()=> {props.selectRoom(props.room.id);props.navigator.push({name: 'RoomDetail'})}}>{props.room.name}: </Text>
         <Text style={[styles.text, styles.today]}>{props.room.today}</Text>
         <Text style={styles.arrow}>
             {props.room.id == "1" && arrowUp}
             {props.room.id == "3" && arrowDown}
         </Text>
     </View>
    );

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    roomNumber: {
        fontWeight: 'bold'
    },
    text: {
        fontSize: 25,
        marginRight: 5,
        textAlign: 'left'
    },
    trophy: {
        flexBasis: 100,
        marginLeft: 15,
        marginTop: 5
    }, today: {
        marginLeft: 80,
        marginRight: 20
    }, arrow: {
        marginTop: 5
    }
});

export default connect(null,mapDispatchToProps)(LeaderBoardRow);
