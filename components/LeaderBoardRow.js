import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import {selectRoom} from '../actions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  selectRoom:   (roomId)   => dispatch(selectRoom(roomId))
});
 const LeaderBoardRow = props => (
      <View style={{flexDirection: 'row'}}>
          <Text>{props.room.id+". "}</Text>
          <Text onPress={()=> {props.selectRoom(props.room.Id-1);props.navigator.push({name: 'RoomDetail'})}}>{props.room.name}</Text>
          <Text></Text>
      </View>
    );
export default connect(null,mapDispatchToProps)(LeaderBoardRow);
