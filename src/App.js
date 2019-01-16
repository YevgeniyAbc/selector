import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './app.css';
import SelectPanel from './components/select-panel/SelectPanel';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SelectPanel/>
      </Provider>
    );
  }
}