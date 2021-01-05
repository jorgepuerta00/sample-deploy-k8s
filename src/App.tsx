import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// core components
import Login from './Views/Containers/Login';
import Dashboard from './Views/Containers/Dashboard';
import Home from './Views/Containers/Home';

import { NavBar } from './Components/Index'

// Routes
import { PrivateRoute, PublicRoute } from './Utils/Index';

// Hooks
import { useVerifyToken } from './Hooks/Index';

function App() {

  const [ loading, fetchData ] = useVerifyToken()

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;