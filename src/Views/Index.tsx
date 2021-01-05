import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// core components
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';
import Home from './Containers/Home';

import { NavBar } from './../Components/Index'

// Routes
import { PrivateRoute, PublicRoute, getToken, removeUserSession, setUserSession } from './../Utils/Index';

function Index() {

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/index" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/index" />
        </Switch>
      </div>
    </div>
  );
}

export default Index;