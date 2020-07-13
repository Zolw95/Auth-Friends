import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <Fragment>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            Home
          </Route>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
