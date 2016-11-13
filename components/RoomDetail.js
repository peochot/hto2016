import React, {Component} from 'react';
import {ListView, Text, View,ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import Modal   from 'react-native-modalbox';

const mapStateToProps = ({rooms,selectedRoom}) => ({rooms,selectedRoom});
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigSize: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange'
  },
  smallSize: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue',
    paddingTop:14
  },
  border: {
    padding: 10,
    backgroundColor: 'red',
    margin: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal4: {
    height: 200
  },
  text: {
    color: "black",
    fontSize: 22
  },
  rowContainer:{
    flex:1,
    flexDirection:"row"
  },
  leftView:{
    justifyContent:"flex-start",
    alignItems: 'flex-start',
    marginLeft:50,
    flex:1,
  },
  rightView:{
    marginRight:50
  },
  title:{
    marginBottom:20
  }
});
var happyPkm = require("../imgs/happy_pkm.png");
var sadPkm = require("../imgs/sad_pkm.png");
const alertMessage =
<Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
  At 9:30, energy consumed for lightning peaked at 7 kWh. At 11:00, energy consumed for heating peaked at 10 kWh";
</Text>;
const efficientText =
  <View>
    <Text style={{color: 'green', fontSize: 20}}>Keep up the good work!</Text>
  </View>;
class RoomDetail extends Component {
  constructor(props){
    super(props);
    this.props=props;
    let room={}
    let route = this.props.navigator.navigationContext.currentRoute;

    if(this.props.selectedRoom==-1){
      room.name="Company"
      room.average = props.rooms.map((room)=>room.average).reduce((acc,next)=> acc + next);
      room.today =  props.rooms.map((room)=>room.today).reduce((acc,next)=> acc + next);
      room.yesterday = props.rooms.map((room)=>room.yesterday).reduce((acc,next)=> acc + next);
      route.title = "Company Detail";
    }else{
      room = props.rooms.filter((room)=>room.id == this.props.selectedRoom)[0];
      route.title = room.name;
    }
    this.room = room

    this.state = {
      sliderValue: 0.3
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(id) {
    this.refs.modal4.open();
  }

  render(){
    const whyButton = <TouchableOpacity style={styles.border} onPress={this.openModal}><Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Why ?</Text></TouchableOpacity>
    return (
      <View style={styles.content}>
        <Text style={styles.bigSize}>Energy Cost
        </Text>
        <View style={styles.rowContainer}>
          <Text style={[styles.smallSize,styles.leftView]}>Monthly average :</Text>
          <Text style={[styles.bigSize,styles.rightView]}>{this.room.average}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.smallSize,styles.leftView]}>Yesterday : </Text>
          <Text style={[styles.bigSize,styles.rightView]}>{this.room.yesterday}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.smallSize,styles.leftView]}>Today :</Text>
          <Text style={[styles.bigSize,styles.rightView]}>{this.room.today}</Text>
        </View>

          <Image source={this.room.today < this.room.average ? happyPkm : sadPkm} resizeMode="stretch" style={{maxWidth: 190, height:200, marginTop: 25, marginBottom: 15}}/>
          {
            this.room.today < this.room.average ?
            efficientText : null
          }
          {
            this.room.today < this.room.average ?
            null : whyButton
          }
        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          <Text style={{color: 'black', fontSize: 18, margin: 10}}>
            At 9:30, energy consumed for lightning peaked at <Text style={{color: 'red', fontWeight: 'bold', fontSize: 22}}>7 kWh</Text>
          </Text>
          <Text style={{color: 'black', fontSize: 18, margin: 10}}>
            At 11:00, energy consumed for heating peaked at <Text style={{color: 'red', fontWeight: 'bold', fontSize: 22}}>10 kWh</Text>
          </Text>
        </Modal>
      </View>
      );
  }
}
export default connect(mapStateToProps,null)(RoomDetail);
