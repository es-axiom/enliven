import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.current_user) {
    const initialState = { session: { current_user: window.current_user }};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.Store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
