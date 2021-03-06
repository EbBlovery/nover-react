import React, { Component } from 'react';
import {Provider} from 'react-redux';

import RouterMap from './router/routerMap';
import store from './store/index.js';

console.log(store.getState())

class App extends Component {
  render() {
    return (
       <Provider store={store}>
	        <RouterMap />
       </Provider>
    );
  }
}

export default App;
