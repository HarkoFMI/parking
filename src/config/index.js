import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Landing,
  Account,
  AddVehicle,
  Login,
  Floors
} from 'pages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/addvehicle">
              <AddVehicle />
            </Route>
            <Route path="/profile">
              <Account />
            </Route>
            <Route path="/floors">
              <Floors isAdmin={false}  />
            </Route>
            <Route path="/admin-floors">
              <Floors isAdmin={true} />
            </Route>
            <Route path="/home">
              <Landing />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
