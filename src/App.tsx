import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// Components
import { NavBar } from './Components/Index'

// Routes
import { PrivateRoute, PublicRoute } from './Utils/Index';

// Hooks
import { useVerifyToken } from './Hooks/Index';

// core components
const Login = lazy(() => import("./Views/Containers/Login"));
const Dashboard = lazy(() => import("./Views/Containers/Dashboard"));
const Home = lazy(() => import("./Views/Containers/Home"));

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
        <Suspense fallback={<div>Loading...</div>}>
        <div>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;