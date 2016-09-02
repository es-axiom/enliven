import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';
import SplashPageContainer from '../splashpage/splashpage_container';
import HomeContainer from '../home/home_container';
import { fetchTeam } from '../../actions/team_actions';

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
     replace('/');
    }
  }

  _requestTeam(nextState, replace) {
    fetchTeam(1);
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={SplashPageContainer} />
          <Route path='/login' component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path='/signup' component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path='/home' component={ HomeContainer } />
        </Route>
      </Router>
    )
  }
}

export default AppRouter;
