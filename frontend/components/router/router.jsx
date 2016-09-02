import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';
import SplashPageContainer from '../splashpage/splashpage_container';
import HomeContainer from '../home/home_container';
import AboutContainer from '../about/about_container';
import ContactContainer from '../contact/contact_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
     replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser) {
     replace('/home');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={SplashPageContainer} />
          <Route path='/about' component={ AboutContainer } />
          <Route path='/home' component={ HomeContainer } />
          <Route path='/contact' component={ ContactContainer } />
        </Route>
      </Router>
    )
  }
}

export default AppRouter;
