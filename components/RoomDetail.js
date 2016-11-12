import React, {Component} from 'react';
import {ListView, Text, View,Image} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = ({rooms,selectedRoom}) => ({rooms,selectedRoom});

const RoomDetail = props => (
      <View>
          <Text>Average :{props.rooms[props.selectedRoom]}</Text>
          <Text>Yesterday :{props.name}</Text>
          <Text>Today :</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
      </View>
    );
export default connect(mapStateToProps,null)(RoomDetail);
