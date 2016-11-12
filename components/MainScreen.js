import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
	Navigator
} from 'react-native'


class MainScreen extends Component {
	constructor(props) {
		super(props)
    this.props=props;
	}
	componentDidMount() {

	}

	render() {
    let content
		return (
      <View style={styles.container}>
        <Text style={styles.welcome}  onPress={()=>this.props.navigator.push({name: 'LeaderBoard'}) }>Web</Text>
        {content}
      </View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MainScreen
