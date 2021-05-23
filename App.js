import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/Store';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/page/Home';
import Register from './src/page/Register';
import Login from './src/page/Login';
import MainMenu from './src/page/MainMenu';

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="registrasi" component={Register}/>
            <Stack.Screen name="login" component={Login}/>
            {/* <Stack.Screen name="mainmenu" component={MainMenu}/> */}

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
