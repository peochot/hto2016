
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './components/App'


let store = createStore(reducers, applyMiddleware(thunk))

export default class Hackathon extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>

    )
  }
}

AppRegistry.registerComponent('Hackathon', () => Hackathon);
