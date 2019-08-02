import React from 'react';
import './App.css';
import Page from './components/layouts/page/index';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
