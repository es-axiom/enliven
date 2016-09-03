import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';
import SplashPageContainer from '../splashpage/splashpage_container';
import HomeContainer from '../home/home_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    if(!this.props.currentUser) {
     replace('/');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if(this.props.currentUser) {
     replace('/home');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ SplashPageContainer } />
          <Route path='/home' component={ HomeContainer } onEnter={ this._ensureLoggedIn }/>
        </Route>
      </Router>
    )
  }
}

export default AppRouter;
