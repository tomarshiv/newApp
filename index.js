/**
* @format
*/
// import { configureStore } from '@reduxjs/toolkit';
import {AppRegistry,Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
// import {RootSiblingParent} from 'react-native-root-siblings';
import store from './src/redux/Store';
 
 
 
const RNRedux = () => (
  <Provider store={store}>
    {/* <RootSiblingParent> */}
      <App />
    {/* </RootSiblingParent> */}
  </Provider>
);
 
AppRegistry.registerComponent(appName, () => RNRedux);