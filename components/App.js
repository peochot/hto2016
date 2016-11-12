import React, { Component, PropTypes } from 'react'
import {
	Navigator,
	Platform,
	StyleSheet,
  Text,
} from 'react-native'

import routes from '../routes'
import MainScreen from './MainScreen'
import NavBarRouteMapper from './NavBarRouteMapper'


class App extends Component {
	constructor(props) {
		super(props)
		this._renderScene = this._renderScene.bind(this)
	}

	_renderScene(route, navigator) {
		switch (route.name) {
		case 'SomeRoute':
			return <Text>Con kec</Text>
		case 'MainScreen':
		default:
			return <MainScreen navigator={navigator} />
		}
	}

	render() {
		return (
			<Navigator
				initialRoute={routes.main}
				renderScene={this._renderScene}
				style={styles.container}
				sceneStyle={styles.sceneContainer}
				navigationBar={<Navigator.NavigationBar
					routeMapper={NavBarRouteMapper}
					style={styles.navBar}
				/>}
			/>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sceneContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		marginTop: Platform.OS === 'ios' ? 64 : 56,
	},
	navBar: {
		backgroundColor: '#efefef',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#494949',
	},
})

export default App
