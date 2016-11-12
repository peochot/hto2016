import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
	Navigator,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux';
import {selectRoom} from '../actions';
const mapDispatchToProps = dispatch => ({
  selectRoom:   (roomId)   => dispatch(selectRoom(roomId))
});
class MainScreen extends Component {
	constructor(props) {
		super(props)
    this.props=props;
	}
	componentDidMount() {

	}

	render() {
		return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.border, {borderBottomWidth: 0}]} onPress={()=>this.props.navigator.push({name: 'SomeRoute'})}><Text style={styles.text}>COMPANY</Text></TouchableOpacity>
        <View style={{flex: 6, flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.border, {borderRightWidth: 0}]} onPress={()=>{this.props.selectRoom(0);this.props.navigator.push({name: 'RoomDetail'})}}><Text style={styles.text}>ROOM 1</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.border, {borderRightWidth:0}]} onPress={()=>{this.props.selectRoom(1);this.props.navigator.push({name: 'RoomDetail'})}}><Text style={styles.text}>ROOM 2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.border} onPress={()=>{this.props.selectRoom(2);this.props.navigator.push({name: 'RoomDetail'})}}><Text style={styles.text}>ROOM 3</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.border, {borderTopWidth: 0}]} onPress={()=>this.props.navigator.push({name: 'LeaderBoard'})}><Text style={styles.text}>LEADERBOARD</Text></TouchableOpacity>
      </View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  border: {
    flex: 2,
    borderWidth:5,
    borderColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'navy'
  }
});

export default connect(null,mapDispatchToProps)(MainScreen)
