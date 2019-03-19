import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import firebase from './firebase';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
//import Profile from './components/pages/Profile';
import Results from './components/pages/Results';
import Register from './components/pages/Register';
// import Header from './components/Header'
//import Drug from './components/pages/Drug';
import './App.scss';

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user=> {
      if(user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(() =>
      this.props.history.push('/')
    );
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} user={this.state.user} signOut={this.signOut} />} />
          <Route exact path="/results" component={Results} />
          <Route exact path='/login' render={(props) => <Login {...props} user={this.state.user} signOut={this.signOut} />} />
          <Route exact path='/register' render={(props) => <Register {...props} user={this.state.user} signOut={this.signOut} />} />
        </Switch>
      </React.Fragment>
    );
  }
};

const AppWithAuth = withRouter(App)

export default AppWithAuth;
