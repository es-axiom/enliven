import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configureStore';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const initialState = { session: { user: window.currentUser }};
    store = configureStore(initialState);
    debugger;
  } else {
    debugger
    const _nullUser = Object.freeze({
      user: null,
      errors: []
    });
    store = configureStore({ session: _nullUser });
  }

  console.log(store.getState()); // check if preloadedState for current user is set
  Modal.setAppElement(document.body);

  window.Store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
