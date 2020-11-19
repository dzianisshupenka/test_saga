import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Tabble from './Table';
import { reducer } from './redux/reducers';
import { watchLoadData } from './redux/saga';

function App() {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchLoadData);
  
  return (
    <Provider store={store}>
      <Tabble />
    </Provider>
  )
}

export default App;
