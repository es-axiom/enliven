import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = window.store = configureStore(initialState);
  } else {
    store = window.store = configureStore();
  }

  window.Store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
