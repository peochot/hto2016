import React, {Component} from 'react';
import {ListView, Text, View,Image} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = ({rooms,selectedRoom}) => ({rooms,selectedRoom});

const RoomDetail = props => (
      <View>
          <Text>Average :{props.rooms[props.selectedRoom].average}</Text>
          <Text>Yesterday :{props.rooms[props.selectedRoom].yesterday}</Text>
          <Text>Today :{props.rooms[props.selectedRoom].today}</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
      </View>
    );
export default connect(mapStateToProps,null)(RoomDetail);
