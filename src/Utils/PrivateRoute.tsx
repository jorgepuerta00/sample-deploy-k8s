import React, { ComponentType } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { getToken } from './Common';

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
  exact?: any;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  exact,
  path,
  ...props
}) => {

  return (
    <Route
      {...props}
      exact={exact}
      path={path} 
      render={(matchProps: any) => getToken() ? <Component {...matchProps} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;