import React, { Component } from 'react'
import { Text, View, TextComponent } from 'react-native'
import NavBar from './components/NavBar'
import AddItem from './components/addItem.js'


export default class App extends Component {
  render() {
    return (
      <View>
        <NavBar/>
        <AddItem/>
      </View>
    )
  }
}
